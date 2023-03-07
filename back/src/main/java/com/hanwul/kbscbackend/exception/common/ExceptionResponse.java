package com.hanwul.kbscbackend.exception.common;

public class ExceptionResponse {
    private String errorCode;
    private String errorCodePhrase;
    private String errorOccurrencePackage;
    private String errorMessage;

    public ExceptionResponse(int errorCode, String errorCodePhrase, String errorOccurrencePackage, String errorMessage) {
        this.errorCode = String.valueOf(errorCode);
        this.errorCodePhrase = errorCodePhrase;
        this.errorOccurrencePackage = errorOccurrencePackage;
        this.errorMessage = errorMessage;
    }
}
