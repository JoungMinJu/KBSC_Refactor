package com.hanwul.kbscbackend.domain.emotion;

import com.hanwul.kbscbackend.common.BaseEntity;
import com.hanwul.kbscbackend.domain.account.Account;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "emotion")
@Builder
@Entity
public class Emotion extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne(targetEntity = Account.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private Account account;

    private Long count;

    public void changeStatus(Status status) {
        this.status = status;
    }

    public void changeContent(String content) {
        this.content = content;
    }

    public void deleteLike() {
        this.count--;
    }

    public void addLike() {
        this.count++;
    }
}
