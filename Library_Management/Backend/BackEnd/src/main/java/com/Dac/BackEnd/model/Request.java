package com.Dac.BackEnd.model;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
@Table(name = "request")
public class Request {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name="req_id")
	private int req_id;
	private int stud_id;
	private int book_id;
	
	
	
	public Request() {
		super();
	}


	public Request(int req_id) {
		super();
		this.req_id = req_id;
	}


	public Request(int req_id, int stud_id, int book_id) {
		super();
		this.req_id = req_id;
		this.stud_id = stud_id;
		this.book_id = book_id;
	}


	public int getReq_id() {
		return req_id;
	}


	public void setReq_id(int req_id) {
		this.req_id = req_id;
	}


	public int getStud_id() {
		return stud_id;
	}


	public void setStud_id(int stud_id) {
		this.stud_id = stud_id;
	}


	public int getBook_id() {
		return book_id;
	}


	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}


	@Override
	public String toString() {
		return "Request [req_id=" + req_id + ", stud_id=" + stud_id + ", book_id=" + book_id + "]";
	}


	


}
