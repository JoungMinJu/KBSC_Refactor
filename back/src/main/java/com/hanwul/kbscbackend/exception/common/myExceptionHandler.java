package com.hanwul.kbscbackend.exception.common;

import com.hanwul.kbscbackend.exception.InvalidInput;
import com.hanwul.kbscbackend.exception.NoAuthorization;
import com.hanwul.kbscbackend.exception.WrongId;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class myExceptionHandler {

    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    @ExceptionHandler(value = WrongId.class)
    public ExceptionResponse wrongIdExceptionHandler(WrongId e) {
        return new ExceptionResponse(e.getHttpStatusCode(), e.getHttpStatusType(), e.getOccurrencePackages(), e.getMessage());
    }

    @ResponseStatus(value = HttpStatus.FORBIDDEN)
    @ExceptionHandler(value = NoAuthorization.class)
    public ExceptionResponse noAuthorizationExceptionHandler(NoAuthorization e) {
        return new ExceptionResponse(e.getHttpStatusCode(), e.getHttpStatusType(), e.getOccurrencePackages(), e.getMessage());
    }

    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = InvalidInput.class)
    public ExceptionResponse invalidInputExceptionHandler(InvalidInput e) {
        return new ExceptionResponse(e.getHttpStatusCode(), e.getHttpStatusType(), e.getOccurrencePackages(), e.getMessage());
    }
}
