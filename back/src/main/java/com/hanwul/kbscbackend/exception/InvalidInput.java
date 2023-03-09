package com.hanwul.kbscbackend.exception;

import com.hanwul.kbscbackend.exception.common.DetailInformations;
import com.hanwul.kbscbackend.exception.common.ExceptionOccurrencePackages;
import org.springframework.http.HttpStatus;

public class InvalidInput extends RuntimeException{
    private String occurrencePackages;
    private HttpStatus httpStatus;

    public InvalidInput(ExceptionOccurrencePackages occurrencePackages, DetailInformations detailInformation) {
        super("유효하지 않은 입력 값. [detail]" + detailInformation.toString());
        this.httpStatus = HttpStatus.FORBIDDEN;
        this.occurrencePackages = occurrencePackages.toString();
    }

    public int getHttpStatusCode() {
        return httpStatus.value();
    }

    public String getHttpStatusType() {
        return httpStatus.getReasonPhrase();
    }

    public String getOccurrencePackages() {
        return occurrencePackages;
    }
}
