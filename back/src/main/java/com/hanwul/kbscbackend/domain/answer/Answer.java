package com.hanwul.kbscbackend.domain.answer;

import com.hanwul.kbscbackend.common.BaseEntity;
import com.hanwul.kbscbackend.domain.account.Account;
import com.hanwul.kbscbackend.domain.questionanswer.question.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "answer")
@Builder
@Entity
public class Answer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = Question.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne(targetEntity = Account.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private Account account;

    private String answer;

    public void changeAnswer(String answer) {
        this.answer = answer;
    }
}



