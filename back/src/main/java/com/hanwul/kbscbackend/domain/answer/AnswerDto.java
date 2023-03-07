package com.hanwul.kbscbackend.domain.answer;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AnswerDto {

    private Long id;
    private Long answer_id;
    private Long question_id;
    private String question_content;
    private String answer;

    @Builder
    public AnswerDto(Long id, Long answer_id, Long question_id, String question_content, String answer) {
        this.id = id;
        this.answer_id = answer_id;
        this.question_id = question_id;
        this.question_content = question_content;
        this.answer = answer;
    }
}
