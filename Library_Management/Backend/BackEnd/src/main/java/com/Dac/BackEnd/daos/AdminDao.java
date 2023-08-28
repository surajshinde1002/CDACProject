package com.Dac.BackEnd.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Dac.BackEnd.model.*;

public interface AdminDao extends JpaRepository<Admin, Integer> {
	Admin findById(int id);

	Admin findByEmail(String email);
}
