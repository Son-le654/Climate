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

import com.example.demo.entity.Location;
import com.example.demo.entity.Role;
import com.example.demo.service.LocationService;


@RestController
@RequestMapping("/location")
@CrossOrigin("http://localhost:3000/")
public class LocationController {

	@Autowired
	private LocationService service;

	@PostMapping("/save")
	public String Save(@RequestBody Location location) {
		service.save(location);
		return "success";
	}

	@GetMapping("/list")
	public List<Location> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Location> getAppointmentById(@PathVariable(value = "id") Integer id) {
		Optional<Location> location = service.findById(id);
		if (location.isPresent()) {
			return ResponseEntity.ok().body(location.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
