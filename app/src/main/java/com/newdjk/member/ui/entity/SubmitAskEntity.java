package com.newdjk.member.ui.entity;

public class SubmitAskEntity {
    /**
     * Code : 0
     * Message : 成功
     * Data : true
     */

    private int Code;
    private String Message;
    private boolean Data;

    public int getCode() {
        return Code;
    }

    public void setCode(int Code) {
        this.Code = Code;
    }

    public String getMessage() {
        return Message;
    }

    public void setMessage(String Message) {
        this.Message = Message;
    }

    public boolean isData() {
        return Data;
    }

    public void setData(boolean Data) {
        this.Data = Data;
    }
}
