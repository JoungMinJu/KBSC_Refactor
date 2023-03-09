package com.hanwul.kbscbackend.exception.common;

public enum DetailInformations {
    DUPLICATED_USERNAME("중복된 user name"),
    UNKNOWN_USERNAME("등록되지 않은 user name"),
    WRONG_PASSWORD("잘못된 password"),
    QUESTION_EXCEPTION("Question 객체 오류"),
    ANSWER_EXCEPTION("Answer 객체 오류");



    private String information;

    DetailInformations(String information) {
        this.information = information;
    }

    @Override
    public String toString() {
        return this.information;
    }
}
