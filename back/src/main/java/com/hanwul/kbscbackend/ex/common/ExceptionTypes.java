package com.hanwul.kbscbackend.ex.common;

public enum ExceptionTypes {
    ACCOUNT_LOGIN("Account Login"),
    ACCOUNT_SIGNUP("Account Signup"),
    ANSWER("Answer"),
    CHAT("Chat"),
    EMOTION("Emotion"),
    MISSION("Mission"),
    QUESTION("Question");

    private String exceptionClass;

    ExceptionTypes(String exceptionClass) {
        this.exceptionClass = exceptionClass;
    }


    @Override
    public String toString() {
        return exceptionClass + " Exception. ";
    }
}
