package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Specialty;
import com.example.demo.repository.SpeciatlyRepository;

@Service
public class SpeciatlyService {

	@Autowired
	private SpeciatlyRepository repository;

	public Specialty save(Specialty specialty) {
		return repository.save(specialty);
	}
	public Specialty update(Specialty specialty) {
		Specialty c = repository.findById(specialty.getId())
				.orElseThrow(() -> new EntityNotFoundException("Specialty not found with id " + specialty.getId()));

		return repository.save(specialty);
	}

	public List<Specialty> findAll() {
		return repository.findAll();
	}

	public Optional<Specialty> findById(Integer id) {
		return repository.findById(id);
	}
}
