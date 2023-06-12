package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Symtom;
import com.example.demo.repository.SymtomRepository;

@Service
public class SymtomService {

	@Autowired
	private SymtomRepository repository;

	public Symtom save(Symtom symtom) {
		return repository.save(symtom);
	}

	public List<Symtom> findAll() {
		return repository.findSymtom();
	}

	public Optional<Symtom> findById(Integer id) {
		return repository.findById(id);
	}
}
