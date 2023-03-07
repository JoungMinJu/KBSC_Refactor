package com.hanwul.kbscbackend.exception.common;

public enum ExceptionOccurrencePackages {
    ACCOUNT_LOGIN("Account Login"),
    ACCOUNT_SIGNUP("Account Signup"),
    ANSWER("Answer"),
    CHAT("Chat"),
    EMOTION("Emotion"),
    MISSION("Mission"),
    QUESTION("Question");

    private String occurrencePackageName;

    ExceptionOccurrencePackages(String occurrencePackageName) {
        this.occurrencePackageName = occurrencePackageName;
    }


    @Override
    public String toString() {
        return occurrencePackageName + " package Exception. ";
    }
}
