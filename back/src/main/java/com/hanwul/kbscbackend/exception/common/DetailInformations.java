package com.hanwul.kbscbackend.exception.common;

public enum DetailInformations {
    DUPLICATED_USERNAME("중복된 user name"),
    UNKNOWN_USERNAME("등록되지 않은 user name"),
    WRONG_PASSWORD("잘못된 password");


    private String information;

    DetailInformations(String information) {
        this.information = information;
    }

    @Override
    public String toString() {
        return this.information;
    }
}
