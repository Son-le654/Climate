package com.example.demo.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.AppointmentDTO;
import com.example.demo.entity.Appointment;
import com.example.demo.entity.Patient;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.PatientRepository;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository repository;

	@Autowired
	private PatientRepository patientRepository;

	public String save(AppointmentDTO appointmentDTO) {
		Appointment app = null;
		Patient p = patientRepository.findByName(appointmentDTO.getName());
//		String symptoms = Arrays.toString(appointmentDTO.getSymtom()).replace("[", "").replace("]", "");

		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
		LocalDateTime dateTime = LocalDateTime.parse(appointmentDTO.getBookDate(), inputFormatter);
		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
		String outputDateString = dateTime.format(outputFormatter);

		if (p != null) {
//			System.out.println(p.getName());
			app = new Appointment(appointmentDTO.getDescription(), appointmentDTO.getBookTime(), outputDateString,
					appointmentDTO.getSpec(), appointmentDTO.getDoctorName(), p, appointmentDTO.getSymtom());
			repository.save(app);
			return "success";
		} else {

			return ("cannot find patient");
		}

	}

	public List<Appointment> findAll() {
		return repository.findAll();
	}

	public Optional<Appointment> findById(Integer id) {
		return repository.findById(id);
	}
}
