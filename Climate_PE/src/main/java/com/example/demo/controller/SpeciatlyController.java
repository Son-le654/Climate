package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Specialty;
import com.example.demo.service.SpeciatlyService;

@RestController
@RequestMapping("/spec")
@CrossOrigin(origins = { "http://clinicmates.io.vn/", "http://localhost:3000/" })
public class SpeciatlyController {

	@Autowired
	private SpeciatlyService service;

	@PostMapping("/save")
	public String save(@RequestBody Specialty specialty) {
		service.save(specialty);
		return "success";
	}

	@PutMapping("/update")
	public String update(@RequestBody Specialty specialty) {
		service.update(specialty);
		return "success";
	}

	@GetMapping("/list")
	public List<Specialty> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Specialty> getSpecById(@PathVariable(value = "id") Integer id) {
		Optional<Specialty> specialty = service.findById(id);
		if (specialty.isPresent()) {
			return ResponseEntity.ok().body(specialty.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
