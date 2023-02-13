package com.hanwul.kbscbackend.domain.mission.categoryaccount;

import com.hanwul.kbscbackend.domain.account.Account;
import com.hanwul.kbscbackend.domain.mission.category.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CategoryAccountDto {

    private Long id;

    private Account account;

    private Category category;
}
