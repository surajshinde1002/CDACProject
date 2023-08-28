package com.Dac.BackEnd.Dtos;

public class BookDTO {
	
	private int book_id;
	private String book_name;
	private String book_category;
	private String author;
	private String publisher;
	private int book_price;
	private String book_image;
	private String book_pdf;
	private String description;
	
	public BookDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookDTO(int book_id, String book_name, String book_category, String author, String publisher, int book_price,
			String book_image, String book_pdf, String description) {
		super();
		this.book_id = book_id;
		this.book_name = book_name;
		this.book_category = book_category;
		this.author = author;
		this.publisher = publisher;
		this.book_price = book_price;
		this.book_image = book_image;
		this.book_pdf = book_pdf;
		this.description = description;
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

	public int getBook_price() {
		return book_price;
	}

	public void setBook_price(int book_price) {
		this.book_price = book_price;
	}

	public String getBook_image() {
		return book_image;
	}

	public void setBook_image(String book_image) {
		this.book_image = book_image;
	}

	public String getBook_pdf() {
		return book_pdf;
	}

	public void setBook_pdf(String book_pdf) {
		this.book_pdf = book_pdf;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "BookDTO [book_id=" + book_id + ", book_name=" + book_name + ", book_category=" + book_category
				+ ", author=" + author + ", publisher=" + publisher + ", book_price=" + book_price + ", book_image="
				+ book_image + ", book_pdf=" + book_pdf + ", description=" + description + "]";
	}
	
	
	
	
	
	
	
}
