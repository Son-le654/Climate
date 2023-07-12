package com.example.demo.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Checkin;
import com.example.demo.entity.MedicalRecord;
import com.example.demo.repository.MedicalRecordRepository;

@Service
public class MedicalRecordService {

	@Autowired
	private MedicalRecordRepository repository;

	@Autowired
	private CheckinService checkinService;

	@Autowired
	private InternalService internalService;

	public MedicalRecord save(MedicalRecord medicalRecord) {
		return repository.save(medicalRecord);
	}

	public List<MedicalRecord> findAll() {
		return repository.findAll();
	}

	public Optional<MedicalRecord> findById(Integer id) {
		return repository.findById(id);
	}

	public List<MedicalRecord> getAllMedicalRecords() {
		return repository.findAll();
	}

	public Optional<MedicalRecord> getMedicalRecordById(int id) {
		return repository.findById(id);
	}

	public MedicalRecord findMedicalRecordByCheckinId(int checkinId) {
		return repository.findByCheckinId(checkinId);
	}

	public String timeNow() {
		LocalDateTime currentDateTime = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss:SSS");
		String formattedDateTime = currentDateTime.format(formatter);
		return formattedDateTime;
	}

	public MedicalRecord createMedicalRecord(MedicalRecord medicalRecord) {

		Optional<Checkin> optionalCheckin = checkinService.findById(medicalRecord.getCheckin().getId());
		Checkin appoint = optionalCheckin.orElse(null);
		medicalRecord.setCheckin(appoint);
		medicalRecord.setCommandFlag(0);
		medicalRecord.setReleaseTime(timeNow());
		return repository.save(medicalRecord);
	}

	public MedicalRecord updateMedicalRecord(MedicalRecord medicalRecord) {
		return repository.save(medicalRecord);
	}

	public void deleteMedicalRecord(int id) {
		repository.deleteById(id);
	}
}
