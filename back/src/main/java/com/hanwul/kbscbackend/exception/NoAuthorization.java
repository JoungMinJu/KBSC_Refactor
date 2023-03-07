package com.hanwul.kbscbackend.exception;

import com.hanwul.kbscbackend.exception.common.ExceptionOccurrencePackages;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;

public class NoAuthorization extends RuntimeException{
    private String errorOccurrencePackages;
    private HttpStatus httpStatus;
    private String hint;

    public NoAuthorization(ExceptionOccurrencePackages occurrencePackages, String additionalInformation) {
        super("요청에 대한 권한이 없음 " + additionalInformation);
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
