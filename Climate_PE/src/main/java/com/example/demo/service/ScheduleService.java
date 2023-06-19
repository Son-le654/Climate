package com.example.demo.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Schedule;
import com.example.demo.repository.ScheduleRepository;

@Service
public class ScheduleService {

	@Autowired
	private ScheduleRepository repository;

//	public Appointment save(AppointmentDTO appointmentDTO) {
//		Appointment app = null;
//		Patient p = patientRepository.findByName(appointmentDTO.getName());
//		String symptoms = Arrays.toString(appointmentDTO.getSymtom()).replace("[", "").replace("]", "");
//
//		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
//		LocalDateTime dateTime = LocalDateTime.parse(appointmentDTO.getBookDate(), inputFormatter);
//		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
//		String outputDateString = dateTime.format(outputFormatter);
//
//		System.out.println(p.getName());
//		if (!p.equals(null)) {
//			app = new Appointment(appointmentDTO.getDescription(), appointmentDTO.getBookTime(), outputDateString,
//					appointmentDTO.getSpec(), appointmentDTO.getDoctorName(), p, symptoms);
//		}
//
//		return repository.save(app);
//	}

	public List<Schedule> findAll() {
		return repository.findAll();
	}
	public List<Schedule> findAllByInIdAndDate(int id, String date) {
		
		return repository.findAllByInIdAndDate(id, date);
	}

	public Optional<Schedule> findById(Integer id) {
		return repository.findById(id);
	}
}
