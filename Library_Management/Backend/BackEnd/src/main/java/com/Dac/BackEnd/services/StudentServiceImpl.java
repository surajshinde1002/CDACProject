package com.Dac.BackEnd.services;

import jakarta.transaction.Transactional;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.*;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.Dac.BackEnd.Dtos.BookDTO;
import com.Dac.BackEnd.Dtos.Credentials;
import com.Dac.BackEnd.Dtos.DtoEntityConverter;
import com.Dac.BackEnd.Dtos.FeedbackDTO;
import com.Dac.BackEnd.Dtos.IssuedDTO;
import com.Dac.BackEnd.Dtos.RequestDTO;
import com.Dac.BackEnd.Dtos.Response;
import com.Dac.BackEnd.Dtos.StudentDTO;
import com.Dac.BackEnd.daos.Bookdao;
import com.Dac.BackEnd.daos.FeedbackDao;
import com.Dac.BackEnd.daos.IssuedBooksDao;
import com.Dac.BackEnd.daos.RequestDao;
import com.Dac.BackEnd.daos.StudentDao;
import com.Dac.BackEnd.model.Book;
import com.Dac.BackEnd.model.Feedback;
import com.Dac.BackEnd.model.IssuedBooks;
import com.Dac.BackEnd.model.Request;
import com.Dac.BackEnd.model.Student;
import java.util.AbstractMap.SimpleEntry;
import java.text.ParseException;
import java.text.SimpleDateFormat;



@Transactional
@Service
public class StudentServiceImpl implements FileService {
	
	@Autowired
	private StudentDao studentDao;
	
	@Autowired
	private RequestDao requestDao;
	
	@Autowired
	private FeedbackDao feedbackdao;
	
	@Autowired
	private IssuedBooksDao issuedBooksdao;
	
	@Autowired
	private Bookdao bookdao;
	
	@Autowired
	private DtoEntityConverter converter;
	
	@Value("${project.image}")
	private String pathImage;
	
	@Value("${project.pdf}")
	private String pathPdf;
	
	
	public StudentDTO findStudentById(int studentId) {
//		System.out.println("Something is happening");
		Student student = studentDao.findById(studentId);
		if(student != null ) {
			return converter.toStudentDTO(student);
		}
		else {
			return null;
		}
//		System.out.println("the student is "+student.toString());
		
	}
	
	public StudentDTO findStudentByEmail(String email) {
		Student student = studentDao.findByEmail(email);
		return converter.toStudentDTO(student);
	}
	
	public ResponseEntity<?> findStudentByEmailAndPassword(Credentials cred) {
		
		Student dbStudent = studentDao.findByEmail(cred.getEmail());
		
		if(dbStudent != null && dbStudent.getPassword().equals(cred.getPassword())) {
			StudentDTO result = converter.toStudentDTO(dbStudent);
			result.setPassword("**************");
			return Response.success(result);
		}
		else {
			return Response.error("user not found");
		}
	}
	
	
	public  StudentDTO updateProfile(int stud_id,StudentDTO studentdto) {
		Student dbStudent = studentDao.findById(stud_id);
		
		StudentDTO studentDto = null;
		
		if(dbStudent != null) {
			dbStudent.setFirstName(studentdto.getfirst_name());
			dbStudent.setLastName(studentdto.getlast_name());
			dbStudent.setEmail(studentdto.getEmail());
			dbStudent.setMobile(studentdto.getMobile());
			dbStudent.setPassword(studentdto.getPassword());
			
			studentDao.save(dbStudent);
			
			studentDto = converter.toStudentDTO(dbStudent);
			
			return studentDto;
			
		}else {
			return null;
		}
			
	}
	
	public FeedbackDTO feedback(int stud_id,FeedbackDTO feedbackdto) {
		if(feedbackdto != null) {
			Date currentDate = new Date();
			Feedback feedback = converter.toFeedbackEntity(feedbackdto);
			feedbackdao.insertFeedback(stud_id,feedbackdto.getFeedback(),currentDate);
			FeedbackDTO feedbackdtos = converter.toFeedbackDTO(feedback);
			feedbackdtos.setTimestamp(currentDate);
			feedbackdtos.setStud_id(stud_id);
			return feedbackdtos;
		}
		else {
			return null;
		}
	}
	
	
	public  ResponseEntity<?> requestForBook(int stud_id,RequestDTO dto) {
		Request request = requestDao.getRequest(dto.getBook_id(), stud_id);
		if(request == null) {
			IssuedBooks issuedBook = issuedBooksdao.getIssuedBook(dto.getBook_id(), stud_id);
			if(issuedBook == null ) {
				requestDao.sendRequest(dto.getBook_id(), stud_id);
				
				Request requestAfter = requestDao.getRequestByStudIdAndBookId(dto.getBook_id(), stud_id);
				
				RequestDTO requestdto = converter.toRequestDTO(requestAfter);
				requestdto.setId(requestAfter.getId());
				
			
				
				return Response.success(requestdto);
			}
			else {
				return Response.error("book you are trying to request is already issued to you!!");
			}
		}
		else {
			return Response.error("book you are trying to request is already requested!!");
		}
		
	}
	
	
	
	public List<Object> viewingBooks() {
		List<Book> books = bookdao.findAll();
		if(!books.isEmpty()) {
			List<Object> dto = converter.toBookDtoList(books) ;
			return dto;
		}
		else {
			return null;
		}
	}
	
	public List<IssuedDTO> viewIssuedBooks(int stud_id) {
		System.out.println("student id is :"+stud_id);
		List<Object[]> issuedBooksData = issuedBooksdao.viewIssuedBooks(stud_id);
		List<IssuedDTO> issuedBooks = new ArrayList<>();
		System.out.println("issued books are "+issuedBooks.toString());
		if(!issuedBooksData.isEmpty()) {
			for (Object[] data : issuedBooksData) {
			    IssuedDTO issuedDTO = new IssuedDTO(
			        (int) data[0],
			        (int) data[1],
			        (String) data[2],
			        (String) data[3],
			        (String) data[4],
			        (String) data[5],
			        (String) data[6],
			         (String)data[7],
			         (Date)data[8],
			        (Date) data[9]
			    );
			    issuedBooks.add(issuedDTO);
			}
			return issuedBooks;
		}
		else {
			System.out.println("in else block");
			return null;
		}
	}
	
	private Date parseDate(String dateString) {
	    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	    try {
	        return dateFormat.parse(dateString);
	    } catch (ParseException e) {
	        e.printStackTrace();
	        return null;
	    }
	}
	
	public Boolean returnBook(int stud_id,int book_id) {
		int flag = issuedBooksdao.returnBook(stud_id, book_id);
		if(flag == 1) {
			return true;
		}
		else {
			return false;
		}
	}
	
	public InputStream getImage(String book_image_name) throws FileNotFoundException {
		return getResource(pathImage, book_image_name);
	}
	
	public InputStream getPdf(String pdf_name) throws FileNotFoundException {
		return getResource(pathPdf, pdf_name);
	}


	@Override
	public InputStream getResource(String path, String fileName) throws FileNotFoundException {
		String fullPath = path+File.separator+fileName;
		
		InputStream is = new FileInputStream(fullPath);
		return is;
	}

	@Override
	public String uploadImage(String path, MultipartFile file) throws IOException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String uploadPdf(String path, MultipartFile file) throws IOException {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	
}
