package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Specialty;

@Repository
public interface SpeciatlyRepository extends JpaRepository<Specialty, Integer> {
	@Query("select c from Specialty c where c.commandFlag = 0")
	List<Specialty> findSpecialty();
	
	@Query("select c from Specialty c ")
	List<Specialty> findSpecialtyForAdmin();
}
