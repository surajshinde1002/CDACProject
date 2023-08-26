package com.Dac.BackEnd.daos;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.Dac.BackEnd.model.*;
public interface FeedbackDao extends JpaRepository<Feedback, Integer> {
	Feedback findById(int id);
	
	@Modifying
	@Query(value = "insert into feedback(stud_id, feedback,timestamp) values(?1,?2,?3)",nativeQuery = true)
	int insertFeedback(int studId,String feedback,Date timestamp);
}
