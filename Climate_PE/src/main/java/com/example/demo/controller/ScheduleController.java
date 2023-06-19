package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.AppointmentDTO;
import com.example.demo.entity.Appointment;
import com.example.demo.entity.Schedule;
import com.example.demo.service.ScheduleService;

@RestController
@RequestMapping("/schedule")
@CrossOrigin("http://localhost:3000/")
public class ScheduleController {

	@Autowired
	private ScheduleService service;

//	@PostMapping("/save")
//	public String Save(@RequestBody AppointmentDTO appointmentDTO) {
//		appointmentService.save(appointmentDTO);
//		return "success";
//	}

	@GetMapping("/list")
	public List<Schedule> getAll() {
		return service.findAll();
	}

	@GetMapping("/list_date/{id}")
	public List<Schedule> getAppointmentById(@PathVariable("id") int id,
			@RequestParam("date") @DateTimeFormat(pattern = "yyyy/MM/dd") String date) {
		System.out.println("- " + id);
		System.out.println("- " + date);
		return service.findAllByInIdAndDate(id, date);
//		return null;
	}
}
