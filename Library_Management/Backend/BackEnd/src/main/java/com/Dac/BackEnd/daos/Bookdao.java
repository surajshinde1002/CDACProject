package com.Dac.BackEnd.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.Dac.BackEnd.model.*;
public interface Bookdao extends JpaRepository<Book, Integer> {
	
	@Modifying
	@Query(value = "delete from book where book_id = ?1",nativeQuery = true)
	int removeBook(int bookId);
}
