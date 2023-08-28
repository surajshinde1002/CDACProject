package com.Dac.BackEnd.Dtos;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.Dac.BackEnd.model.Admin;
import com.Dac.BackEnd.model.Book;
import com.Dac.BackEnd.model.Feedback;
import com.Dac.BackEnd.model.IssuedBooks;
import com.Dac.BackEnd.model.Request;
import com.Dac.BackEnd.model.Student;



	@Component
	public class DtoEntityConverter {
		public StudentDTO toStudentDTO(Student dbStudent) {
			StudentDTO dto = new StudentDTO();
			dto.setId(dbStudent.getId());
			dto.setfirst_name(dbStudent.getFirstName());
			dto.setlast_name(dbStudent.getLastName());
			dto.setEmail(dbStudent.getEmail());
			dto.setMobile(dbStudent.getMobile());
			dto.setPassword(dbStudent.getPassword());
			return dto;
		}
		
		
		public Student toStudentEntity(StudentDTO dto) {
			Student entity = new Student();
			entity.setId(dto.getId());
			entity.setFirstName(dto.getfirst_name());
			entity.setLastName(dto.getlast_name());
			entity.setEmail(dto.getEmail());
			entity.setMobile(dto.getMobile());
			entity.setPassword(dto.getPassword());
			return entity;
		}
		
		
		public List<Object> toStudentDtoList(List<Student> studentList){
			List<Object> dto = new ArrayList<>();
			dto.add(studentList);
			return dto;
		}
		
		
		public FeedbackDTO toFeedbackDTO(Feedback feedback) {
			FeedbackDTO feed = new FeedbackDTO();
			feed.setStud_id(feedback.getStud_id());
			feed.setFeedback(feedback.getFeedback());
			return feed;
			
		}
		
		public Feedback toFeedbackEntity(FeedbackDTO dto) {
			Feedback entity = new Feedback();
			entity.setStud_id(dto.getStud_id());
			entity.setFeedback(dto.getFeedback());
			entity.setTimestamp(dto.getTimestamp());
			return entity;
			
		}
		
		public List<Object> toFeedbackDtoList(List<Feedback> feedbackList){
			List<Object> dto = new ArrayList<>();
			dto.add(feedbackList);
			return dto;
		}
		
		
		
		public BookDTO toBookDTO(Book book) {
			BookDTO books = new BookDTO();
			books.setBook_id(book.getBook_id());
			books.setBook_name(book.getBook_name());
			books.setBook_category(book.getBook_category());
			books.setAuthor(book.getAuthor());
			books.setPublisher(book.getPublisher());
			books.setBook_price(book.getBook_price());
			books.setBook_image(book.getBook_image());
			books.setBook_pdf(book.getBook_pdf());
			books.setDescription(book.getDescription());
			return books;
		}
		
		
		public Book toBookEntity(BookDTO dto) {
			Book entity = new Book();
			entity.setBook_name(dto.getBook_name());
			entity.setBook_category(dto.getBook_category());
			entity.setAuthor(dto.getAuthor());
			entity.setPublisher(dto.getPublisher());
			entity.setBook_price(dto.getBook_price());
			entity.setBook_image(dto.getBook_image());
			entity.setBook_pdf(dto.getBook_pdf());
			entity.setDescription(dto.getDescription());
			return entity;
			
		}
		
		public List<Object> toBookDtoList(List<Book> bookList){
			List<Object> dto = new ArrayList<>();
			dto.add(bookList);
			return dto;
		}
		
		public RequestDTO toRequestDTO(Request request) {
			RequestDTO dto = new RequestDTO();
			dto.setStud_id(request.getStud_id());
			dto.setBook_id(request.getBook_id());
			
			return dto;
		}
		
		
		public Request toRequestEntity(RequestDTO dto) {
			Request entity = new Request();
			entity.setStud_id(dto.getStud_id());
			entity.setBook_id(dto.getBook_id());
			
			return entity;
		}
		
		public List<Object> toRequestDtoList(List<Request> RequestList){
			List<Object> dto = new ArrayList<>();
			dto.add(RequestList);
			return dto;
		}
		
		
		
		public AdminDTO toAdminDTO(Admin admin) {
			AdminDTO dto = new AdminDTO();
			dto.setFirstName(admin.getFirstName());
			dto.setLastName(admin.getLastName());
			dto.setEmail(admin.getEmail());
			dto.setMobile(admin.getMobile());
			dto.setPassword(admin.getPassword());
			return dto;
		}
		
		
		public Admin toAdminEntity(AdminDTO dto) {
			Admin entity = new Admin();
			entity.setFirstName(dto.getFirstName());
			entity.setLastName(dto.getLastName());
			entity.setEmail(dto.getEmail());
			entity.setMobile(dto.getMobile());
			entity.setPassword(dto.getPassword());
			return entity;
		}
		
		public IssuedBooksDTO toIssuedBookDTO(IssuedBooks issue ) {
			IssuedBooksDTO dto = new IssuedBooksDTO();
			dto.setStud_id(issue.getStud_id());
			dto.setBook_id(issue.getBook_id());
			dto.setStart_date(issue.getStart_date());
			dto.setEnd_date(issue.getEnd_date());
			return dto;
		}
		
		
		public IssuedBooks toIssuedBookEntity(IssuedBooksDTO dto ) {
			IssuedBooks entity = new IssuedBooks();
			entity.setStud_id(dto.getStud_id());
			entity.setBook_id(dto.getBook_id());
			entity.setStart_date(dto.getStart_date());
			entity.setEnd_date(dto.getEnd_date());
			return entity;
		}
		
		public List<Object> toIssuedBookDtoList(List<IssuedBooks> issuedBookList){
			List<Object> dto = new ArrayList<>();
			dto.add(issuedBookList);
			return dto;
		}
		
	
		
		
		
	}

