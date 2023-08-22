package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.InternalAccount;
import com.example.demo.entity.Location;
import com.example.demo.repository.LocationRepository;
import com.example.demo.service.LocationService;

@RestController
@RequestMapping("/location")
@CrossOrigin(origins = { "http://clinicmates.io.vn/", "http://localhost:3000/" })
public class LocationController {

	@Autowired
	private LocationService service;

	@Autowired
	private LocationRepository repository;
	 @CacheEvict(value = "location, locationAdmin", key = "#id")
	@PostMapping("/save")
	public String save(@RequestBody Location location) {
		service.save(location);
		return "success";
	}
	@Cacheable("location")
	@GetMapping("/list")
	public List<Location> getAll() {
		return service.findAll();
	}
	@Cacheable("locationAdmin")
	@GetMapping("/listadmin")
	public List<Location> getAllForAdmin() {
		return service.findAllForAdmin();
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

	@GetMapping("/block")
	public String blockLocation(@RequestParam(value = "id") String id) {
		System.out.println(id);
		Location acc = null;
		int idc = Integer.parseInt(id);
		acc = repository.getLoById(idc);
		if (acc != null) {
			String result = service.blockLocation(acc);
			if (result.equals("success")) {

				return "Block success";
			} else {
				return "Block fail";
			}
		} else {
			return "Not found location in system";
		}
	}
}
