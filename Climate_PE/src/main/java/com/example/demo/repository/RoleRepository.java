package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	Role findByName(String name);

	@Query("select c from Role c where c.commandFlag = 0")
	List<Role> findAll();
}