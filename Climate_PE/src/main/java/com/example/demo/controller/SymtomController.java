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

import com.example.demo.entity.Symtom;
import com.example.demo.service.SymtomService;


@RestController
@RequestMapping("/symtom")
public class SymtomController {

	@Autowired
	private SymtomService service;

	@PostMapping("/save")
	public String Save(@RequestBody Symtom symtom) {
		service.save(symtom);
		return "success";
	}

	@GetMapping("/list")
	public List<Symtom> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Symtom> getAppointmentById(@PathVariable(value = "id") Integer id) {
		Optional<Symtom> symtom = service.findById(id);
		if (symtom.isPresent()) {
			return ResponseEntity.ok().body(symtom.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
