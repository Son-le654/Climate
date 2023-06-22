package com.example.demo.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Schedule;
import com.example.demo.repository.ScheduleRepository;

@Service
public class ScheduleService {

	@Autowired
	private ScheduleRepository scheduleRepository;

	public Optional<List<Schedule>> getByDateScheduledate(LocalDate date) {
		String startDateTime = date.atStartOfDay().toString();
		String endDateTime = date.atTime(LocalTime.MAX).toString();
		Optional<List<Schedule>> schedules = scheduleRepository.findByReleaseTimeBetween(startDateTime, endDateTime);
		return schedules;
	}

	public Optional<List<Schedule>> getByDateSchedulehour(LocalTime examTime, LocalTime releaseTime) {
		String startDateTime = LocalDateTime.of(LocalDate.now(), examTime).toString();
		String endDateTime = LocalDateTime.of(LocalDate.now(), releaseTime).toString();
		Optional<List<Schedule>> schedules = scheduleRepository.findByReleaseTimeBetween(startDateTime, endDateTime);
		return schedules;
	}
}
