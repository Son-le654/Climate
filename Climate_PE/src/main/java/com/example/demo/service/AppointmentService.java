package com.example.demo.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.AppointmentDTO;
import com.example.demo.entity.Appointment;
import com.example.demo.entity.InternalAccount;
import com.example.demo.entity.Patient;
import com.example.demo.entity.Schedule;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.PatientRepository;
import com.example.demo.repository.ScheduleRepository;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository repository;

	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private ScheduleRepository scheduleRepository;

	public String save(AppointmentDTO appointmentDTO) {
		Appointment app = null;
		Appointment appSearch = null;
		Patient p = null;
		Schedule s = null;

		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
		LocalDateTime dateTime = LocalDateTime.parse(appointmentDTO.getBookDate(), inputFormatter);
		ZoneId utcZone = ZoneId.of("UTC");
		ZonedDateTime zonedDateTime = ZonedDateTime.of(dateTime, utcZone);
		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
		String outputDateString = zonedDateTime.format(outputFormatter);

		// check patient
		p = patientRepository.findByIDAndName(appointmentDTO.getIdC(), appointmentDTO.getName());
		if (p == null) {
			return ("cannot find patient");
		}

		// check appointment
		appSearch = repository.findOne(p.getId(), appointmentDTO.getDoctorName(), outputDateString,
				appointmentDTO.getBookTime());
		if (appSearch != null) {
			return "You already book appointment at this time";
		}

		// check schedule
		s = scheduleRepository.findByInNameAndDateTime(appointmentDTO.getDoctorName(), outputDateString,
				appointmentDTO.getBookTime());
		System.out.println(s);
		if (s != null) {
			return "This doctor is busy at this time";
		}

		app = new Appointment(p, appointmentDTO.getDoctorName(), outputDateString, appointmentDTO.getBookTime(),
				appointmentDTO.getDescription(), appointmentDTO.getSpec(), appointmentDTO.getSymtom(),
				appointmentDTO.getName(), appointmentDTO.getBirthday(), appointmentDTO.getGender(),
				appointmentDTO.getPhone(), appointmentDTO.getBookPlace());
		repository.save(app);
		return "success";

	}

	public String saveGuest(AppointmentDTO appointmentDTO) {
		Appointment app = null;
		Schedule s = null;
		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
		LocalDateTime dateTime = LocalDateTime.parse(appointmentDTO.getBookDate(), inputFormatter);
		ZoneId utcZone = ZoneId.of("UTC");
		ZonedDateTime zonedDateTime = ZonedDateTime.of(dateTime, utcZone);
		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
		String outputDateString = zonedDateTime.format(outputFormatter);
		System.out.println("out put date: " + outputDateString);
		// check schedule
		s = scheduleRepository.findByInNameAndDateTime(appointmentDTO.getDoctorName(), outputDateString,
				appointmentDTO.getBookTime());
		System.out.println(s);
		if (s != null) {
			return "This doctor is busy at this time";
		}

		app = new Appointment(appointmentDTO.getDoctorName(), outputDateString, appointmentDTO.getBookTime(),
				appointmentDTO.getDescription(), appointmentDTO.getSpec(), appointmentDTO.getSymtom(),
				appointmentDTO.getName(), appointmentDTO.getBirthday(), appointmentDTO.getGender(),
				appointmentDTO.getPhone(), appointmentDTO.getBookPlace());
		repository.save(app);
		return "success";

	}

	public Appointment update(Appointment appointment) {
		Appointment c = repository.findById(appointment.getId())
				.orElseThrow(() -> new EntityNotFoundException("Appointment not found with id " + appointment.getId()));

		return repository.save(appointment);
	}

	public List<Appointment> findAll() {
		return repository.findAll();
	}

	public List<Appointment> findAllNotApprove() {
		return repository.getAllIncome();
	}

	public Optional<Appointment> findById(Integer id) {
		return repository.findById(id);
	}

	public List<Appointment> findByPaintedId(String paintedId) {
		return repository.findByPaintedId(paintedId);
	}

	public void saveAppointment(Appointment appointment) {
		repository.save(appointment);
	}
}
