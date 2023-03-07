package com.hanwul.kbscbackend.exception;

import com.hanwul.kbscbackend.exception.common.ExceptionOccurrencePackages;
import org.springframework.http.HttpStatus;

public class InvalidInput extends RuntimeException{
    private HttpStatus httpStatus;
    private String hint;

    public InvalidInput(String target, String reason, ExceptionOccurrencePackages exceptionTypes) {
        super("유효하지 않은 " + target + " 값. [이유] " + reason);
        this.hint = exceptionTypes.toString();
        this.httpStatus = HttpStatus.FORBIDDEN;
    }

    public int getHttpStatusCode() {
        return httpStatus.value();
    }

    public String getHttpStatusType() {
        return httpStatus.getReasonPhrase();
    }

    public String getHint() {
        return hint;
    }
}
