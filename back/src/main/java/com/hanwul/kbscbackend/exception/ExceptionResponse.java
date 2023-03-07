package com.hanwul.kbscbackend.exception;

public class ExceptionResponse {
    private String errorCode;
    private String errorCodePhrase;
    private String errorHint;
    private String errorMessage;

    public ExceptionResponse(int errorCode, String errorCodePhrase, String errorHint, String errorMessage) {
        this.errorCode = String.valueOf(errorCode);
        this.errorCodePhrase = errorCodePhrase;
        this.errorHint = errorHint;
        this.errorMessage = errorMessage;
    }
}
