package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Symptom;

@Repository
public interface SymptomRepository extends JpaRepository<Symptom, Integer> {

	@Query("select c from Symptom c")
	List<Symptom> findSymtom();
}
