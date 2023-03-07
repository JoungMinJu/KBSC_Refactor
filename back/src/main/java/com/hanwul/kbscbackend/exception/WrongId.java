package com.hanwul.kbscbackend.exception;

import com.hanwul.kbscbackend.exception.common.ExceptionTypes;
import org.springframework.http.HttpStatus;

public class WrongId extends RuntimeException {
    private HttpStatus httpStatus;
    private String hint;

    public WrongId(long id, ExceptionTypes exceptionTypes) {
        super(id + "의 Entity가 존재하지 않습니다.");
        this.hint = exceptionTypes.toString();
        this.httpStatus = HttpStatus.NOT_FOUND;
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
