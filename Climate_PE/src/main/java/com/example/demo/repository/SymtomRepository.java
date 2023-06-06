package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Symtom;

@Repository
public interface SymtomRepository extends JpaRepository<Symtom, Integer>{
	
	@Query("select c from Symtom c")
	List<Symtom> findSymtom();
}
