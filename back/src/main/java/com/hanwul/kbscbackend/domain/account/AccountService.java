package com.hanwul.kbscbackend.domain.account;

import com.hanwul.kbscbackend.domain.mission.Mission;
import com.hanwul.kbscbackend.domain.mission.MissionRepository;
import com.hanwul.kbscbackend.domain.mission.missionaccount.MissionAccount;
import com.hanwul.kbscbackend.domain.mission.missionaccount.MissionAccountRepository;
import com.hanwul.kbscbackend.domain.mission.success.Success;
import com.hanwul.kbscbackend.domain.mission.success.SuccessRepository;
import com.hanwul.kbscbackend.ex.InvalidInput;
import com.hanwul.kbscbackend.ex.common.ExceptionTypes;
import com.hanwul.kbscbackend.exception.UserException;
import com.hanwul.kbscbackend.exception.WrongInputException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class AccountService {

    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;
    private final MissionAccountRepository missionAccountRepository;
    private final MissionRepository missionRepository;
    private final SuccessRepository successRepository;

    //회원 가입
    @Transactional
    public Account save(SignUpDto signUpDto) {
        String username = signUpDto.getUsername();
        if (accountRepository.findByUsername(username).isPresent()) {
            throw new InvalidInput("username", "중복된 user name", ExceptionTypes.ACCOUNT_SIGNUP);
        }
        Account account = accountRepository.save(toEntity(signUpDto));
        List<Mission> missions = missionRepository.findAll();
        missions.forEach(mission -> {
            MissionAccount build = MissionAccount.builder()
                    .account(account)
                    .mission(mission)
                    .build();
            missionAccountRepository.save(build);
        });
        Success success = Success.builder()
                .account(account)
                .count(0L)
                .build();
        successRepository.save(success);
        log.info("{}", signUpDto);
        return account;
    }

    // 로그인
    public void check(LoginDto loginDto) {
        // 입력받은 password
        String password = loginDto.getPassword();
        Account member = accountRepository.findByUsername(loginDto.getUsername())
                .orElseThrow(() -> new InvalidInput("username", "등록되지 않은 username", ExceptionTypes.ACCOUNT_LOGIN));
        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new InvalidInput("password", "잘못된 password", ExceptionTypes.ACCOUNT_LOGIN);
        }
    }

    //로그아웃
    public void finish() {

    }

    public Account toEntity(SignUpDto signUpDto) {
        return Account.builder()
                .username(signUpDto.getUsername())
                .password(passwordEncoder.encode(signUpDto.getPassword()))
                .nickname(signUpDto.getNickname())
                .build();
    }

}
