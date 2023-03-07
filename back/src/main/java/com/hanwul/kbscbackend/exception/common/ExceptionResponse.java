package com.hanwul.kbscbackend.exception.common;

import lombok.Getter;

@Getter
public class ExceptionResponse {
    private String statusCode;
    private String statusCodePhrase;
    private String occurrencePackage;
    private String message;

    public ExceptionResponse(int statusCode, String statusCodePhrase, String occurrencePackage, String message) {
        this.statusCode = String.valueOf(statusCode);
        this.statusCodePhrase = statusCodePhrase;
        this.occurrencePackage = occurrencePackage;
        this.message = message;
    }
}
