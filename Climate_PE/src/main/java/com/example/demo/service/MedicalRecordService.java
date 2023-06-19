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
}
