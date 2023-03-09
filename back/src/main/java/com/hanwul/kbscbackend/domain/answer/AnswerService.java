package com.hanwul.kbscbackend.domain.answer;

import com.hanwul.kbscbackend.domain.account.Account;
import com.hanwul.kbscbackend.domain.account.AccountRepository;
import com.hanwul.kbscbackend.domain.questionanswer.question.Question;
import com.hanwul.kbscbackend.domain.questionanswer.question.QuestionRepository;
import com.hanwul.kbscbackend.dto.BasicResponseDto;
import com.hanwul.kbscbackend.exception.NoAuthorization;
import com.hanwul.kbscbackend.exception.WrongId;
import com.hanwul.kbscbackend.exception.common.DetailInformations;
import com.hanwul.kbscbackend.file.aws.FileUploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import static com.hanwul.kbscbackend.exception.common.DetailInformations.ANSWER_EXCEPTION;
import static com.hanwul.kbscbackend.exception.common.DetailInformations.QUESTION_EXCEPTION;
import static com.hanwul.kbscbackend.exception.common.ExceptionOccurrencePackages.*;

@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;
    private final AccountRepository accountRepository;
    // file 저장
    private final FileRepository fileRepository;
    private final FileUploadService fileUploadService;

    @Transactional
    public BasicResponseDto<Long> create(Long questionId, AnswerDto answerDto, Principal principal) {
        Account account = get_account(principal);
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new WrongId(ANSWER, QUESTION_EXCEPTION));
        answerDto.setQuestion_id(questionId);
        answerDto.setQuestion_content(question.getContent());
        Answer answer = dtoToEntity(answerDto, account);
        answerRepository.save(answer);
        return new BasicResponseDto<>(HttpStatus.OK.value(), "answer", answer.getId());
    }


    // answerId로 가져오기
    public BasicResponseDto<AnswerDto> findAnswer(Long answerId) {
        Answer answer = answerRepository.findById(answerId)
                .orElseThrow(() -> new WrongId(ANSWER, ANSWER_EXCEPTION));
        AnswerDto dto = entityToDTO(answer);
        return new BasicResponseDto<>(HttpStatus.OK.value(), "answer", dto);
    }

    public BasicResponseDto<List<AnswerDto>> findMyAnswer(Long questionId, Principal principal, String date) {
        // date : 2019-01-01~30
        // 수정
        date = date + "-01";
        LocalDate localDate = LocalDate.parse(date, DateTimeFormatter.ISO_DATE);
        LocalDate startDate = localDate.withDayOfMonth(1);
        LocalDate endDate = localDate.withDayOfMonth(localDate.lengthOfMonth());

        LocalDateTime start = startDate.atStartOfDay();
        LocalDateTime end = endDate.atTime(LocalTime.MAX);

        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new WrongId(ANSWER, QUESTION_EXCEPTION));
        Account account = get_account(principal);
        List<Answer> result =
                answerRepository.findByQuestionAndAccountAndCreatedDateTimeBetween(question, account, start, end);
        List<AnswerDto> resultDtos = getDtoList(result);
        if (resultDtos.size() < 1) {
            AnswerDto build = getTempDto(question);
            resultDtos.add(build);
        }
        return new BasicResponseDto<>(HttpStatus.OK.value(), "answer", resultDtos);
    }

    private AnswerDto getTempDto(Question question) {
        return AnswerDto.builder()
                .id(question.getId())
                .question_id(question.getId())
                .question_content(question.getContent())
                .answer("")
                .build();
    }

    // 답변 이미 완료했는지 확인 -> 필요 로직인지 판단 필요
    public boolean isAlreadyAnswered(Long questionId, Principal principal, String date) {
        LocalDate localDate = LocalDate.parse(date, DateTimeFormatter.ISO_DATE);
        LocalDateTime start = localDate.atStartOfDay();
        LocalDateTime end = localDate.atTime(LocalTime.MAX);

        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new WrongId(ANSWER, QUESTION_EXCEPTION));
        Account account = get_account(principal);
        List<Answer> result =
                answerRepository.findByQuestionAndAccountAndCreatedDateTimeBetween(question, account, start, end);

        return (result.size() >= 1);
    }

    // 동영상 파일 가져오기 -> 해당 날짜의
    public BasicResponseDto<List<File>> findMyVideo(Principal principal, String date) {
        // date : 2019-01-10
        LocalDate localDate = LocalDate.parse(date, DateTimeFormatter.ISO_DATE);
        LocalDateTime start = localDate.atStartOfDay();
        LocalDateTime end = localDate.atTime(LocalTime.MAX);

        Account account = get_account(principal);
        List<File> result =
                fileRepository.findByAccountAndCreatedDateTimeBetween(account, start, end);
        return new BasicResponseDto<>(HttpStatus.OK.value(), "answer", result);
    }


    // 동영상 파일 저장하기 ->  해당 부분 나중에 S3 로직으로 변경 예정
    @Transactional
    public BasicResponseDto<String> saveVideo(MultipartFile file, Principal principal) {
        Account account = get_account(principal);
        String url = fileUploadService.uploadImage(file);
        File build_file = File.builder()
                .url(url)
                .account(account)
                .build();
        File save = fileRepository.save(build_file);
        return new BasicResponseDto<>(HttpStatus.OK.value(), "answer", url);
    }

    // Answer 수정하기
    @Transactional
    public BasicResponseDto<AnswerDto> modify(Long answerId, AnswerDto answerDto, Principal principal) {
        Account request_account = get_account(principal);
        Answer answer = answerRepository.findById(answerId)
                .orElseThrow(() -> new WrongId(ANSWER, ANSWER_EXCEPTION));
        if (answer.getAccount().getId() != request_account.getId()) {
            throw new NoAuthorization(ANSWER, ANSWER_EXCEPTION);
        }
        answer.changeAnswer(answerDto.getAnswer());
        AnswerDto answerDto1 = entityToDTO(answer);
        return new BasicResponseDto<>(HttpStatus.OK.value(), "answer", answerDto1);
    }

    @Transactional
    public BasicResponseDto<Void> delete(Long answerId, Principal principal) {
        Account account = get_account(principal);
        Answer answer = answerRepository.findById(answerId)
                .orElseThrow(() -> new WrongId(ANSWER, ANSWER_EXCEPTION));
        if (answer.getAccount().getId() != account.getId()) {
            throw new NoAuthorization(ANSWER, ANSWER_EXCEPTION);
        }
        answerRepository.deleteById(answerId);
        return new BasicResponseDto<>(HttpStatus.OK.value(), "answer", null);
    }


    private Account get_account(Principal principal) {
        return accountRepository.findByUsername(principal.getName()).get();
    }

    public Answer dtoToEntity(AnswerDto answerDto, Account account) {
        Question question = questionRepository.findById(answerDto.getQuestion_id())
                .orElseThrow(() -> new WrongId(ANSWER, QUESTION_EXCEPTION));
        return Answer.builder()
                .id(answerDto.getId())
                .account(account)
                .question(question)
                .answer(answerDto.getAnswer())
                .build();
    }

    public AnswerDto entityToDTO(Answer answer) {
        return AnswerDto.builder()
                .id(answer.getQuestion().getId())
                .answer_id(answer.getId())
                .question_id(answer.getQuestion().getId())
                .question_content(answer.getQuestion().getContent())
                .answer(answer.getAnswer())
                .build();
    }


    private List<AnswerDto> getDtoList(List<Answer> result) {
        return result.stream().map(answer -> entityToDTO(answer))
                .collect(Collectors.toList());
    }
}
