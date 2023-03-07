package com.hanwul.kbscbackend.exception;

import com.hanwul.kbscbackend.exception.common.ExceptionOccurrencePackages;
import org.springframework.http.HttpStatus;

public class InvalidInput extends RuntimeException{
    private String errorOccurrencePackages;
    private HttpStatus httpStatus;

    public InvalidInput(ExceptionOccurrencePackages occurrencePackages, String additionalInformation) {
        super("유효하지 않은 입력 값 " + additionalInformation);
        this.httpStatus = HttpStatus.FORBIDDEN;
        this.errorOccurrencePackages = occurrencePackages.toString();
    }

    public int getHttpStatusCode() {
        return httpStatus.value();
    }

    public String getHttpStatusType() {
        return httpStatus.getReasonPhrase();
    }

    public String getErrorOccurrencePackages() {
        return errorOccurrencePackages;
    }
}
