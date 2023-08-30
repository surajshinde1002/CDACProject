package com.Dac.BackEnd.services;

import jakarta.transaction.Transactional;
import jakarta.websocket.RemoteEndpoint.Async;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.Dac.BackEnd.Dtos.AdminDTO;
import com.Dac.BackEnd.Dtos.BookDTO;
import com.Dac.BackEnd.Dtos.Credentials;
import com.Dac.BackEnd.Dtos.DtoEntityConverter;
import com.Dac.BackEnd.Dtos.IssuedBooksDTO;
import com.Dac.BackEnd.Dtos.IssuedDTO;
import com.Dac.BackEnd.Dtos.RequestDTO;
import com.Dac.BackEnd.Dtos.StudentDTO;
import com.Dac.BackEnd.daos.AdminDao;
import com.Dac.BackEnd.daos.Bookdao;
import com.Dac.BackEnd.daos.FeedbackDao;
import com.Dac.BackEnd.daos.IssuedBooksDao;
import com.Dac.BackEnd.daos.RequestDao;
import com.Dac.BackEnd.daos.StudentDao;
import com.Dac.BackEnd.model.Admin;
import com.Dac.BackEnd.model.Book;
import com.Dac.BackEnd.model.Feedback;
import com.Dac.BackEnd.model.IssuedBooks;
import com.Dac.BackEnd.model.Request;
import com.Dac.BackEnd.model.Student;



@Transactional
@Service
public class AdminServiceImpl  implements FileService{
	
//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private StudentDao studentDao;
	
	@Autowired
	private Bookdao bookDao;
	
	@Autowired
	private IssuedBooksDao issuedBookdao;
	
	@Autowired
	private RequestDao requestdao;
	
	@Autowired
	private FeedbackDao feedbackdao;
	
	@Autowired
	private DtoEntityConverter converter;
	
	@Value("${project.image}")
	private String pathImage;
	
	@Value("${project.pdf}")
	private String pathPdf;
	
	
	public AdminDTO findAdminByEmailAndPassword(Credentials cred) {
		Admin dbAdmin = adminDao.findByEmail(cred.getEmail());
		
		if(dbAdmin != null && dbAdmin.getPassword().equals(cred.getPassword())) {
			AdminDTO result = converter.toAdminDTO(dbAdmin);
			result.setId(dbAdmin.getId());
			result.setPassword("**************");
			return result;
		}
		else {
			return null;
		}
	}
	
	
	public StudentDTO saveStudent(StudentDTO studentDto) {
		
		Student student = converter.toStudentEntity(studentDto);
		//Password encoding is here
		
		//student.setPassword(this.bCryptPasswordEncoder.encode(student.getPassword()));
		student = studentDao.save(student);
		studentDto = converter.toStudentDTO(student);
		studentDto.setPassword("************");
		return studentDto;
	}
	
	
	public BookDTO addBook(MultipartFile image,MultipartFile pdf,BookDTO bookDto) throws IOException {
		
		String book_image = uploadImage(pathImage, image);
		
		String book_pdf = uploadPdf(pathPdf, pdf);
		
		Book book = converter.toBookEntity(bookDto);
		book.setBook_image(book_image);
		book.setBook_pdf(book_pdf);
		
		bookDao.save(book);
		
		BookDTO bookDtos = converter.toBookDTO(book);
		
		return bookDtos;
	}




	
	
	

	public List<Object> viewingBooks() {
		List<Book> books = bookDao.findAll();
		if(!books.isEmpty()) {
			List<Object> dto = converter.toBookDtoList(books) ;
			return dto;
		}
		else {
			return null;
		}
	}
	
	
	public List<Object> viewingStudents() {
		List<Student> students = studentDao.findAll();
		if(!students.isEmpty()) {
			List<Object> dto = converter.toStudentDtoList(students) ;
			return dto;
		}
		else {
			return null;
		}
	}
	
	
	public Boolean removingStudent(int stud_id) {
		System.out.println("Student id in impl is: "+stud_id);
		int flag = studentDao.removeStudent(stud_id);
		System.out.println("flag in impl is "+flag);
		if(flag == 1) {
			return true;
		}
		else {
			return false;
		}
	}
	
	public Boolean removingBook(int book_id) {
		int flag = bookDao.removeBook(book_id);
		if(flag == 1) {
			return true;
		}
		else {
			return false;
		}
	}
	
	
	
	public List<IssuedDTO> viewAllIssuedBooks(int stud_id) {
		System.out.println("student id is :"+stud_id);
		List<Object[]> issuedBooksData = issuedBookdao.viewAllIssuedBooks(stud_id);
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
	
	
	public Boolean acceptRequest(int req_id) {
		int dbRequest = requestdao.deleteByRequestId(req_id);
		
		if(dbRequest != 0) {
			return true;
			
		}else {
			return false;
		}
	}
	
	
	
	
	public List<Object> viewingAllRequests() {
		List<Request> requests = requestdao.getUnAcceptedRequests();
		if(!requests.isEmpty()) {
			List<Object> dto = converter.toRequestDtoList(requests) ;
			return dto;
		}
		else {
			return null;
		}
	}
	
	
	public List<Object> viewingAllFeedbacks() {
		List<Feedback> feedbacks = feedbackdao.findAll();
		if(!feedbacks.isEmpty()) {
			List<Object> dto = converter.toFeedbackDtoList(feedbacks) ;
			return dto;
		}
		else {
			return null;
		}
	}
	
	public Boolean retrieveBook(int stud_id,int book_id) {
		int flag = issuedBookdao.retrieveBook(stud_id,book_id);
		int flag2 = requestdao.deleteRequest(stud_id, book_id);
		if(flag == 1 && flag2 ==1) {
			return true;
		}
		else {
			return false;
		}
	}
	
	public IssuedBooksDTO issueBook(IssuedBooksDTO issueBookDto) {
		
		IssuedBooks issueBook = converter.toIssuedBookEntity(issueBookDto);
		
		System.out.println("issueBoot entity is "+issueBook);
		IssuedBooksDTO issueBookDtos = null;
		
		if(issueBook != null) {
//			int flag = issuedBookdao.addIssueBookIntable(issueBook.getStud_id(),issueBook.getBook_id(),issueBook.getStart_date(),issueBook.getEnd_date());
			
			issuedBookdao.save(issueBook);
			IssuedBooks issueBookAfter = issuedBookdao.getIssuedBook(issueBook.getBook_id(),issueBook.getStud_id());
			
			issueBookDtos = converter.toIssuedBookDTO(issueBookAfter);
			
			return issueBookDtos;
			
		}
		else {
			return null;
		}
	
	}
	
	
	@Override
	public String uploadImage(String path, MultipartFile file) throws IOException {
		//File name
		
		String name = file.getOriginalFilename();
		
		
		
		String randomID = UUID.randomUUID().toString();
		String fileName1 = randomID.concat(name.substring(name.lastIndexOf(".")));
		
		//Full path
		
		String filePath = path+ File.separator+fileName1;
		
		//create folder if not exist
		File f = new File(path);
		
		if(!f.exists()) {
			f.mkdir();
		}
		
		//file copy
		Files.copy(file.getInputStream(), Paths.get(filePath));
		return fileName1;
	}
	
	@Override
	public String uploadPdf(String path, MultipartFile file) throws IOException {
		//File name
		
		String name = file.getOriginalFilename();
		
		String randomID = UUID.randomUUID().toString();
		String fileName1 = randomID.concat(name.substring(name.lastIndexOf(".")));
		
		//Full path
		
		String filePath = path+ File.separator+fileName1;
		
		//create folder if not exist
		File f = new File(path);
		
		if(!f.exists()) {
			f.mkdir();
		}
		
		//file copy
		Files.copy(file.getInputStream(), Paths.get(filePath));
		return fileName1;
	}


	@Override
	public InputStream getResource(String path, String fileName) throws FileNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	
	
	
}
