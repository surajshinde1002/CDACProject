package com.Dac.BackEnd.model;


import java.util.Date;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
@Table(name = "feedback")
public class Feedback {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name="sr_no")
	private int id;
	
	private int stud_id;
	private String feedback;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(insertable = false,name="timestamp")
	private Date timestamp;
	
	
	public Feedback() {
		super();
	}


	public Feedback(int id) {
		super();
		this.id = id;
	}


	public Feedback(int id, int stud_id, String feedback, Date createdTimestamp) {
		super();
		this.id = id;
		this.stud_id = stud_id;
		this.feedback = feedback;
		this.timestamp = createdTimestamp;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
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
		return "Feedback [id=" + id + ", stud_id=" + stud_id + ", feedback=" + feedback + ", createdTimestamp="
				+ timestamp + "]";
	}
		
		
		
}
