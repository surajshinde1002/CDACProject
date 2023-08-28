package com.Dac.BackEnd.controller;


import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.Dac.BackEnd.Dtos.AdminDTO;
import com.Dac.BackEnd.Dtos.BookDTO;
import com.Dac.BackEnd.Dtos.Credentials;
import com.Dac.BackEnd.Dtos.FeedbackDTO;
import com.Dac.BackEnd.Dtos.IssuedBooksDTO;
import com.Dac.BackEnd.Dtos.IssuedDTO;
import com.Dac.BackEnd.Dtos.RequestDTO;
import com.Dac.BackEnd.Dtos.Response;
import com.Dac.BackEnd.Dtos.StudentDTO;
import com.Dac.BackEnd.services.AdminServiceImpl;
import com.Dac.BackEnd.services.StudentServiceImpl;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:3000/")
public class AdminController {
	
	@Autowired
	private AdminServiceImpl adminService ; 
	
	
	//AdminSignIn
		@PostMapping("/asignin")
		public ResponseEntity<?> signIn(@RequestBody Credentials cred) {
			AdminDTO adminDto = adminService.findAdminByEmailAndPassword(cred);
			if(adminDto == null) {
				return Response.error("user not found");
			}else {
				return Response.success(adminDto);
			}
		}
	
	
	//Inserting feedback
	@PostMapping("/addBook")
	public ResponseEntity<?> addBook(
			@RequestParam("book_image") MultipartFile image,
			@RequestParam("book_pdf") MultipartFile pdf,
			@RequestParam("book_name") String book_name,
			@RequestParam("book_category") String book_category,
			@RequestParam("author") String author,
			@RequestParam("publisher") String publisher,
			@RequestParam("book_price") int book_price,
			@RequestParam("description") String description) throws IOException {
		try {
			BookDTO requestdto = new BookDTO(book_price, book_name, book_category, author, publisher, book_price, publisher, book_category, description);
			BookDTO bookdtos = adminService.addBook(image,pdf,requestdto);
			if(bookdtos == null) {
				return Response.error("book is not inserted");
			}else {
				return Response.success(bookdtos);
			}
		} catch (IOException e) {
			e.printStackTrace();
			return Response.error("book is not inserted");
		}
	}
	
	
	@PostMapping("/addStudent")
	public ResponseEntity<?> addStudent(@RequestBody StudentDTO studentdto) {
		System.out.println("Student dto s"+studentdto);
		StudentDTO studentDto = adminService.saveStudent(studentdto);
		
		if(studentDto == null) {
			return Response.error("user not found");
		}else {
			return Response.successCustomMessage("Student added successfully.");
		}
	}
	
	
	
	@GetMapping("/viewBooks")
	public ResponseEntity<?> viewAllBooks() {
		List<Object> bookdtos = adminService.viewingBooks();
		if(bookdtos == null) {
			return Response.error("request is not inserted");
		}else {
			return Response.success(bookdtos);
		}
	}

	
	@GetMapping("/allStudents")
	public ResponseEntity<?> viewAllStudents() {
		List<Object> studentdtos = adminService.viewingStudents();
		if(studentdtos == null) {
			return Response.error("request is not inserted");
		}else {
			return Response.success(studentdtos);
		}
	}
	
	
	@DeleteMapping("/deleteStudent/{stud_id}")
	public ResponseEntity<?> deleteStudent(@PathVariable ("stud_id") int stud_id) {
		System.out.println("id is :"+stud_id);
		 try {
			Boolean flag = adminService.removingStudent(stud_id);
			 System.out.println("flag is "+flag);
			if(flag == null || flag == false){
				return Response.error("No Student is their to remove or wrong student id");
			}else {
				return Response.success(flag);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return Response.error("Student has a ongoing request or has a book issued.");
		}
		
	}
	
	
	@DeleteMapping("/deleteBook/{book_id}")
	public ResponseEntity<?> deleteBook(@PathVariable ("book_id") int book_id) {
		 try {
			Boolean flag = adminService.removingBook(book_id);
			if(flag == null || flag == false){
				return Response.error("No book is their with this id");
			}else {
				return Response.success(flag);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return Response.error("Student requested this book or book is issued to a student.");
		}
	}
	
	
	@GetMapping("/allIssuedBooks")
	public ResponseEntity<?> viewAllIssuedBooks() {
		List<IssuedDTO> issuedBooksdtos = adminService.viewAllIssuedBooks(0);
		if(issuedBooksdtos == null) {
			return Response.error("request is not inserted");
		}else {
			return Response.success(issuedBooksdtos);
		}
	}
	
	
	
	@DeleteMapping("/acceptRequest/{req_id}")
	public ResponseEntity<?> acceptRequest( @PathVariable ("req_id") int req_id) {
		boolean flag = adminService.acceptRequest(req_id);
		
		if(flag == false) {
			return Response.error("Not able to accept");
		}
		else {
			return Response.successCustomMessage("Book accepted successfully. ");
		}
	}
	
	
	@GetMapping("/allRequests")
	public ResponseEntity<?> viewAllRequests() {
		System.out.println("viewAllRequests api called");
		List<Object> requestdtos = adminService.viewingAllRequests();
		if(requestdtos == null) {
			return Response.error("request is not inserted");
		}else {
			System.out.println(requestdtos.toString());
			return Response.success(requestdtos);
		}
	}
	
	
	@GetMapping("/feedback")
	public ResponseEntity<?> viewFeedbacks() {
		List<Object> feedbackdtos = adminService.viewingAllFeedbacks();
		if(feedbackdtos == null) {
			return Response.error("request is not inserted");
		}else {
			return Response.success(feedbackdtos);
		}
	}
	
	
	
	@DeleteMapping("/retrieve/{stud_id}/{book_id}")
	public ResponseEntity<?> retrieveBook(@PathVariable("stud_id") int stud_id,@PathVariable("book_id") int book_id) {
		Boolean flag = adminService.retrieveBook(stud_id, book_id);
		
		if(!flag) {
			return Response.error("Book not retrieved!!");
		}
		else {
			return Response.success(flag);
		}
	}
	
	
	
	@PostMapping("/issueBook")
	public ResponseEntity<?> issueBook(@RequestBody IssuedBooksDTO issuedBookdto) {
		System.out.println("issued book dto"+issuedBookdto);
		IssuedBooksDTO issuedDto = adminService.issueBook(issuedBookdto);
		if(issuedDto == null) {
			return Response.error("book not issued");
		}else {
			return Response.success(issuedDto);
		}
	}
	
	
	
	
	
	
	
	
}