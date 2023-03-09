package com.hanwul.kbscbackend.domain.account;

import com.hanwul.kbscbackend.domain.mission.Mission;
import com.hanwul.kbscbackend.domain.mission.MissionRepository;
import com.hanwul.kbscbackend.domain.mission.missionaccount.MissionAccount;
import com.hanwul.kbscbackend.domain.mission.missionaccount.MissionAccountRepository;
import com.hanwul.kbscbackend.domain.mission.success.Success;
import com.hanwul.kbscbackend.domain.mission.success.SuccessRepository;
import com.hanwul.kbscbackend.exception.InvalidInput;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.hanwul.kbscbackend.exception.common.DetailInformations.*;
import static com.hanwul.kbscbackend.exception.common.ExceptionOccurrencePackages.ACCOUNT;

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
            throw new InvalidInput(ACCOUNT, DUPLICATED_USERNAME);
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
                .orElseThrow(() -> new InvalidInput(ACCOUNT, UNKNOWN_USERNAME));
        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new InvalidInput(ACCOUNT, WRONG_PASSWORD);
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
