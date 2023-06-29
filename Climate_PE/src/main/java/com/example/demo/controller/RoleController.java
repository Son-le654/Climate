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

import com.example.demo.entity.Role;
import com.example.demo.service.RoleService;


@RestController
@RequestMapping("/role")
@CrossOrigin(origins = {"http://clinicmates.io.vn/", "http://localhost:3000/"})
public class RoleController {

	@Autowired
	private RoleService service;

	@PostMapping("/save")
	public String save(@RequestBody Role role) {
		service.save(role);
		return "success";
	}

	@GetMapping("/list")
	public List<Role> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Role> getRoleById(@PathVariable(value = "id") Integer id) {
		Optional<Role> role= service.findById(id);
		if (role.isPresent()) {
			return ResponseEntity.ok().body(role.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
