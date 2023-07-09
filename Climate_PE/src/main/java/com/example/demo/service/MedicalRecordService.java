package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Appointment;
import com.example.demo.entity.MedicalRecord;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.MedicalRecordRepository;

@Service
public class MedicalRecordService {

	@Autowired
	private MedicalRecordRepository repository;
	
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

    public MedicalRecord createMedicalRecord(MedicalRecord medicalRecord) {
        return repository.save(medicalRecord);
    }

    public MedicalRecord updateMedicalRecord(MedicalRecord medicalRecord) {
        return repository.save(medicalRecord);
    }

    public void deleteMedicalRecord(int id) {
    	repository.deleteById(id);
    }
}
