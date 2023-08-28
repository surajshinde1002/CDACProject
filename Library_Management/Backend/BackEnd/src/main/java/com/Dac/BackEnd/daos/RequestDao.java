package com.Dac.BackEnd.daos;

import java.lang.annotation.Native;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.Dac.BackEnd.model.*;

public interface RequestDao extends JpaRepository<Request, Integer> {
	
	Request findById(int req_id);
	
	
	@Modifying
	@Query(value = "insert into request(book_id, stud_id) values(?1,?2)",nativeQuery = true)
	int sendRequest(int bookId,int studentId);
	
	
//select * from request where book_id = ${book_id} and stud_id = ${stud_id} and status = 0
	
	@Query(value = "select * from request where book_id= ?1 and stud_id=?2 ",nativeQuery = true)
	Request getRequest(int bookId,int studentId);
	
	@Query(value = "select * from request",nativeQuery = true)
	List<Request> getUnAcceptedRequests();
	
	@Query(value = "select * from request where book_id = ?1 and stud_id = ?2",nativeQuery = true)
	Request getRequestByStudIdAndBookId(int book_id, int stud_id);
	
	@Modifying
	@Query(value = "delete from request where stud_id = ?1 and book_id = ?2",nativeQuery = true)
	int deleteRequest(int studentId,int bookId);
	
	@Modifying
	@Query(value = "delete from request where req_id = ?1",nativeQuery = true)
	int deleteByRequestId(int requestId);
	
}
