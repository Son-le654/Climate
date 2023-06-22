package com.example.demo.controller;

import com.example.demo.DTO.ApiResponse;
import com.example.demo.entity.Schedule;
import com.example.demo.repository.ScheduleRepository;
import com.example.demo.service.RoleService;
import com.example.demo.service.ScheduleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/schedule")
@CrossOrigin("http://localhost:3000/")
public class ScheduleController {

	private final ScheduleService scheduleService;

	@Autowired
	ScheduleController(ScheduleService scheduleService) {
		this.scheduleService = scheduleService;
	}

	// API để lấy danh sách Schedule theo ngày
	@GetMapping("/date/{examDate}")
	public ResponseEntity<?> getByDate(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate examDate) {
		Optional<List<Schedule>> schedules = scheduleService.getByDateScheduledate(examDate);
		if (schedules.isPresent() && !schedules.get().isEmpty()) {
			return ResponseEntity.ok(schedules);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ApiResponse("The doctor is free today and has no appointment"));
		}
	}

	// API để lấy danh sách Schedule theo giờ phút giây
	@GetMapping("/time/{examTime}/{releaseTime}")
	public ResponseEntity<?> getByTime(@PathVariable @DateTimeFormat(pattern = "HH:mm:ss") LocalTime examTime,
			@PathVariable @DateTimeFormat(pattern = "HH:mm:ss") LocalTime releaseTime) {
		Optional<List<Schedule>> schedules = scheduleService.getByDateSchedulehour(examTime, releaseTime);
		if (schedules.isPresent() && !schedules.get().isEmpty()) {
			return ResponseEntity.ok(schedules);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ApiResponse("The doctor is free today and has no appointment"));
		}
	}
}