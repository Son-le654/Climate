package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Location;
import com.example.demo.entity.Role;
import com.example.demo.entity.Symptom;

public interface LocationRepository extends JpaRepository<Location, Integer> {
	Role findByName(String name);
	
	@Query("select c from Location c where c.commandFlag = 0")
	List<Location> findLocation();
	
	@Query("select c from Location c ")
	List<Location> findLocationForAdmin();
}