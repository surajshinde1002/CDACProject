package com.Dac.BackEnd.Dtos;

public class RequestDTO {
	
	private int id;
	private int stud_id;
	private int book_id;
	
	
	public RequestDTO() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	
	


	public RequestDTO(int id, int stud_id, int book_id) {
		super();
		this.id = id;
		this.stud_id = stud_id;
		this.book_id = book_id;
	}







	public RequestDTO(int stud_id, int book_id) {
		super();
		this.stud_id = stud_id;
		this.book_id = book_id;
	
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


	public int getBook_id() {
		return book_id;
	}


	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}







	@Override
	public String toString() {
		return "RequestDTO [id=" + id + ", stud_id=" + stud_id + ", book_id=" + book_id + "]";
	}


	


	
	
	
	
	
}
