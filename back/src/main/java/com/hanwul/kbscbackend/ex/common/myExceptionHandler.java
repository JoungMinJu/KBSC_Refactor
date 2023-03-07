package com.hanwul.kbscbackend.ex.common;

import com.hanwul.kbscbackend.ex.InvalidInput;
import com.hanwul.kbscbackend.ex.NoAuthorization;
import com.hanwul.kbscbackend.ex.WrongId;
import com.hanwul.kbscbackend.ex.common.ExceptionResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class myExceptionHandler {

    @ExceptionHandler(value = WrongId.class)
    public ExceptionResponse wrongIdExceptionHandler(WrongId e) {
        return new ExceptionResponse(e.getHttpStatusCode(), e.getHttpStatusType(), e.getHint(), e.getMessage());
    }

    @ExceptionHandler(value = NoAuthorization.class)
    public ExceptionResponse noAuthorizationExceptionHandler(NoAuthorization e) {
        return new ExceptionResponse(e.getHttpStatusCode(), e.getHttpStatusType(), e.getHint(), e.getMessage());
    }

    @ExceptionHandler(value = InvalidInput.class)
    public ExceptionResponse invalidInputExceptionHandler(InvalidInput e) {
        return new ExceptionResponse(e.getHttpStatusCode(), e.getHttpStatusType(), e.getHint(), e.getMessage());
    }
}
