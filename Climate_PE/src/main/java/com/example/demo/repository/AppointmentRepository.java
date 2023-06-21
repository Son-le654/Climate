package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

	@Query("select p FROM Appointment p where p.patient.id = :patient_id and p.doctorName = :doctorName and "
			+ "p.examDate = :examDate and p.examTime = :examTime")
	Appointment findOne(@Param("patient_id") String patient_id, @Param("doctorName") String doctorName,
			@Param("examDate") String examDate, @Param("examTime") String examTime);
}
