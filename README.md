# KBSC_Refactor


### Develop Pattern
1. Issue에 작업 내용 작성
2. 브랜치 파기 <br>
  -> 새로운 기능 제작 = feature/{issue_num} <br>
  -> 제작한 기능 수정 = fix/{issue_num} <br>
  => Commit 메세지 = {feature or fix}#{issue_num}:{커밋내용} <br>
3. Main 브랜치에 PR <br>
  -> 내용에 close #{issue_num}


### Commit Message Rule

| 이름 | 정의 |
|--|--|
|feat | 새로운 기능에 대한 커밋|
|fix | 버그 수정에 대한 커밋|
|build |빌드 관련 파일 수정에 대한 커밋|
|chore | 그 외 자잘한 수정에 대한 커밋|
|ci | CI관련 설정 수정에 대한 커밋|
|docs | 문서 수정에 대한 커밋|
|style | 코드 스타일 혹은 포맷 등에 관한 커밋|
|refactor |  코드 리팩토링에 대한 커밋|
|test | 테스트 코드 수정에 대한 커밋|
