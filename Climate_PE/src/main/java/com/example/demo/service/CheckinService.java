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

import com.example.demo.DTO.CheckinDTO;
import com.example.demo.entity.Appointment;
import com.example.demo.entity.Checkin;
import com.example.demo.entity.Patient;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.CheckinRepository;
import com.example.demo.repository.PatientRepository;

@Service
public class CheckinService {

	@Autowired
	private CheckinRepository repository;

	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private AppointmentRepository appointmentRepository;

	public String save(CheckinDTO checkinDTO) {
		Patient p = null;
		Appointment app = null;

//		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
//		LocalDateTime dateTime = LocalDateTime.parse(checkinDTO.getBookDate(), inputFormatter);
//		ZoneId utcZone = ZoneId.of("UTC");
//		ZonedDateTime zonedDateTime = ZonedDateTime.of(dateTime, utcZone);
//		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
//		String outputDateString = zonedDateTime.format(outputFormatter);

		// for user and booking
		if (checkinDTO.getIdC() != null && checkinDTO.getIdA() != null) {
			p = patientRepository.findByID(checkinDTO.getIdC());
			app = appointmentRepository.findByID(Integer.parseInt(checkinDTO.getIdA()));

			if (p == null || app == null) {
				return "Patient or Appointment is not available in system";
			}

			Checkin ci = new Checkin(checkinDTO.getSpec(), checkinDTO.getSymtom(), checkinDTO.getBookPlace(),
					checkinDTO.getDescription(), checkinDTO.getDoctorId(), checkinDTO.getIdA(), checkinDTO.getName(),
					checkinDTO.getPhone(), checkinDTO.getBirthday(), checkinDTO.getGender(), p);
			repository.save(ci);
			return "success";

		}
		;

		// for user not book
		if (checkinDTO.getIdC() != null && checkinDTO.getIdA() == null) {
			p = patientRepository.findByID(checkinDTO.getIdC());

			if (p == null) {
				return "Patient is not available in system";
			}

			Checkin ci = new Checkin(checkinDTO.getSpec(), checkinDTO.getSymtom(), checkinDTO.getBookPlace(),
					checkinDTO.getDescription(), checkinDTO.getDoctorId(), checkinDTO.getName(), checkinDTO.getPhone(),
					checkinDTO.getBirthday(), checkinDTO.getGender(), p);
			repository.save(ci);
			return "success";

		}
		;

		// for guess booking
		if (checkinDTO.getIdC() == null && checkinDTO.getIdA() != null) {
			app = appointmentRepository.findByID(Integer.parseInt(checkinDTO.getIdA()));

			if (app == null) {
				return "Appointment is not available in system";
			}

			Checkin ci = new Checkin(checkinDTO.getSpec(), checkinDTO.getSymtom(), checkinDTO.getBookPlace(),
					checkinDTO.getDescription(), checkinDTO.getDoctorId(), checkinDTO.getIdA(), checkinDTO.getName(),
					checkinDTO.getPhone(), checkinDTO.getBirthday(), checkinDTO.getGender());

			repository.save(ci);
			return "success";

		}
		;

		// for guess not book
		if (checkinDTO.getIdC() == null && checkinDTO.getIdA() == null) {
			Checkin ci = new Checkin(checkinDTO.getSpec(), checkinDTO.getSymtom(), checkinDTO.getBookPlace(),
					checkinDTO.getDescription(), checkinDTO.getDoctorId(), checkinDTO.getName(), checkinDTO.getPhone(),
					checkinDTO.getBirthday(), checkinDTO.getGender());
			repository.save(ci);
			return "success";
		}
		;
		return null;
	}

	public Checkin update(Checkin checkin) {
		Checkin c = repository.findById(checkin.getId())
				.orElseThrow(() -> new EntityNotFoundException("Checkin not found with id " + checkin.getId()));

		return repository.save(checkin);
	}

	public List<Checkin> findAll() {
		return repository.findAll();
	}

	public List<Checkin> findAllNotApprove() {
		return repository.getAllIncome();
	}

	public Optional<Checkin> findById(Integer id) {
		return repository.findById(id);
	}

	public List<Checkin> findByPaintedId(String paintedId) {
		return repository.findByPaintedId(paintedId);
	}

	public List<Checkin> findByDoctorId(String doctorId) {
		return repository.findByDoctorId(doctorId);
	}

	public List<Checkin> findIncomeByDoctorId(String doctorId) {
		return repository.getAllIncomeWithDoctorid(doctorId);
	}

	public void saveCheckin(Checkin appointment) {
		repository.save(appointment);
	}
}
