package com.hanwul.kbscbackend.exception;

import com.hanwul.kbscbackend.exception.common.ExceptionOccurrencePackages;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;

public class NoAuthorization extends RuntimeException{
    private HttpStatus httpStatus;
    private String hint;

    public NoAuthorization(long id, HttpMethod method, ExceptionOccurrencePackages exceptionTypes) {
        super(id + "의 Entity에 대한 " + method.name() + " 권한이 없습니다.");
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
