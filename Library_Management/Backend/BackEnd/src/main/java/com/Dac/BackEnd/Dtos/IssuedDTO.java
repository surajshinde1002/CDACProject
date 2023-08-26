package com.Dac.BackEnd.Dtos;

import java.util.Date;

public class IssuedDTO {
	
	private int stud_id;
	private int book_id;
	private String book_name;
	private String book_category;
	private String author;
	private String publisher ;
	private String book_pdf;
	private Date start_date;
	private Date end_date;
	private String book_image;
	
	public IssuedDTO(int stud_id, int book_id, String book_name, String book_category, String author, String publisher,
			String book_pdf,String book_image, Date start_date, Date end_date) {
		super();
		this.stud_id = stud_id;
		this.book_id = book_id;
		this.book_name = book_name;
		this.book_category = book_category;
		this.author = author;
		this.publisher = publisher;
		this.book_pdf = book_pdf;
		this.start_date = start_date;
		this.end_date = end_date;
		this.book_image = book_image;
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

	public String getBook_name() {
		return book_name;
	}

	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}

	public String getBook_category() {
		return book_category;
	}

	public void setBook_category(String book_category) {
		this.book_category = book_category;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getBook_pdf() {
		return book_pdf;
	}

	public void setBook_pdf(String book_pdf) {
		this.book_pdf = book_pdf;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public String getBook_image() {
		return book_image;
	}

	public void setBook_image(String book_image) {
		this.book_image = book_image;
	}

	@Override
	public String toString() {
		return "IssuedDTO [stud_id=" + stud_id + ", book_id=" + book_id + ", book_name=" + book_name
				+ ", book_category=" + book_category + ", author=" + author + ", publisher=" + publisher + ", book_pdf="
				+ book_pdf + ", start_date=" + start_date + ", end_date=" + end_date + ", book_image=" + book_image
				+ "]";
	}
	
	
	
	
	
	
	
	
	
	
	

}
