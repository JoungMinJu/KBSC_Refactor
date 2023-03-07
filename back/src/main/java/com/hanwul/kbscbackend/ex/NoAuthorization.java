package com.hanwul.kbscbackend.ex;

import com.hanwul.kbscbackend.ex.common.ExceptionTypes;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;

public class NoAuthorization extends RuntimeException{
    private HttpStatus httpStatus;
    private String hint;

    public NoAuthorization(long id, HttpMethod method, ExceptionTypes exceptionTypes) {
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
