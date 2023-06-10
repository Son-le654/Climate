package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Appointment;
import com.example.demo.entity.MedicalRecord;
import com.example.demo.entity.Patient;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Integer>{

}
