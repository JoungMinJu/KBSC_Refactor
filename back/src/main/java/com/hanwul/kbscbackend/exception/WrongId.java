package com.hanwul.kbscbackend.exception;

import com.hanwul.kbscbackend.exception.common.ExceptionOccurrencePackages;
import org.springframework.http.HttpStatus;

public class WrongId extends RuntimeException {
    private String occurrencePackages;
    private HttpStatus httpStatus;

    public WrongId(ExceptionOccurrencePackages occurrencePackages, String detailInformation) {
        super("ID에 해당하는 객체가 존재하지 않음. [detail] " + detailInformation);
        this.httpStatus = HttpStatus.NOT_FOUND;
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
