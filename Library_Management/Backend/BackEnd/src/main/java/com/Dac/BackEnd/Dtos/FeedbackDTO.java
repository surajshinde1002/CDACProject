package com.Dac.BackEnd.Dtos;

import java.util.Date;


public class FeedbackDTO {
	private int stud_id;
	private String feedback;
	private Date timestamp;
	
	
	public FeedbackDTO() {
		super();
	}
	
	public FeedbackDTO(int stud_id, String feedback, Date timestamp) {
		super();
		this.stud_id = stud_id;
		this.feedback = feedback;
		this.timestamp = timestamp;
	}
	
	public int getStud_id() {
		return stud_id;
	}
	public void setStud_id(int stud_id) {
		this.stud_id = stud_id;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	public Date getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	@Override
	public String toString() {
		return "FeedbackDTO [stud_id=" + stud_id + ", feedback=" + feedback + ", timestamp=" + timestamp
				+ "]";
	}
	
	
	
}
