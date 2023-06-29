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

import com.example.demo.entity.Appointment;
import com.example.demo.entity.MedicalRecord;
import com.example.demo.service.AppointmentService;
import com.example.demo.service.MedicalRecordService;

@RestController
@RequestMapping("/medicalrecord")
@CrossOrigin(origins = {"http://clinicmates.io.vn/", "http://localhost:3000/"})
public class MedicalRecordController {

	@Autowired
	private MedicalRecordService service;

	@PostMapping("/save")
	public String save(@RequestBody MedicalRecord medicalRecord) {
		service.save(medicalRecord);
		return "success";
	}

	@GetMapping("/list")
	public List<MedicalRecord> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<MedicalRecord> getMedicalRecordById(@PathVariable(value = "id") Integer id) {
		Optional<MedicalRecord> medicalRecords = service.findById(id);
		if (medicalRecords.isPresent()) {
			return ResponseEntity.ok().body(medicalRecords.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
