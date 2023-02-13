package com.hanwul.kbscbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BasicResponseDto<T> {

    private int code;
    private String message;
    private T data;

}
