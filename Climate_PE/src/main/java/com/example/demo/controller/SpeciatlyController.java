package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Specialty;
import com.example.demo.entity.Symtom;
import com.example.demo.service.SpeciatlyService;
import com.example.demo.service.SymtomService;


@RestController
@RequestMapping("/spec")
public class SpeciatlyController {

	@Autowired
	private SpeciatlyService service;

	@PostMapping("/save")
	public String Save(@RequestBody Specialty specialty) {
		service.save(specialty);
		return "success";
	}

	@GetMapping("/list")
	public List<Specialty> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Specialty> getAppointmentById(@PathVariable(value = "id") Integer id) {
		Optional<Specialty> specialty= service.findById(id);
		if (specialty.isPresent()) {
			return ResponseEntity.ok().body(specialty.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
