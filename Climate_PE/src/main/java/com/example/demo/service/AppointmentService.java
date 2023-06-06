package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Appointment;
import com.example.demo.repository.AppointmentRepository;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository repository;
	
	public Appointment save(Appointment appointment) {
		return repository.save(appointment);
	}
	public List<Appointment> findAll() {
        return repository.findAll();
    }
	public Optional<Appointment> findById(Integer id) {
        return repository.findById(id);
    }
}
