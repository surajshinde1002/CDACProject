package com.Dac.BackEnd.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.Dac.BackEnd.model.*;

public interface StudentDao extends JpaRepository<Student,Integer> {
	Student findById(int id);
	Student findByEmail(String email);
	
	@Modifying
	@Query(value = "delete from student where stud_id = ?1",nativeQuery = true)
	int removeStudent(int studentId);
	
}
