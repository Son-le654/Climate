package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Symptom;
import com.example.demo.repository.SymptomRepository;

@Service
public class SymptomService {

	@Autowired
	private SymptomRepository repository;

	public Symptom save(Symptom symtom) {
		return repository.save(symtom);
	}

	public List<Symptom> findAll() {
		return repository.findSymtom();
	}

	public Optional<Symptom> findById(Integer id) {
		return repository.findById(id);
	}
}
