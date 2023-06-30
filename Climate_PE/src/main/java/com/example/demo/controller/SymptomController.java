package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Symptom;
import com.example.demo.service.SymptomService;

@RestController
@RequestMapping("/symptom")
@CrossOrigin(origins = {"http://clinicmates.io.vn/", "http://localhost:3000/"})
public class SymptomController {

	@Autowired
	private SymptomService service;

	@PostMapping("/save")
	public String save(@RequestBody Symptom symtom) {
		service.save(symtom);
		return "success";
	}

	@GetMapping("/list")
	public List<Symptom> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Symptom> getSymptomById(@PathVariable(value = "id") Integer id) {
		Optional<Symptom> symtom = service.findById(id);
		if (symtom.isPresent()) {
			return ResponseEntity.ok().body(symtom.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
