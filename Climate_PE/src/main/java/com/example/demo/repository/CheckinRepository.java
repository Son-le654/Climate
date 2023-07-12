package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Checkin;

@Repository
public interface CheckinRepository extends JpaRepository<Checkin, Integer> {
//
//	@Query("select p FROM Checkin p where p.patient.id = :patient_id and p.doctorName = :doctorName and "
//			+ "p.examDate = :examDate and p.examTime = :examTime")
//	Checkin findOne(@Param("patient_id") String patient_id, @Param("doctorName") String doctorName,
//			@Param("examDate") String examDate, @Param("examTime") String examTime);

	@Query("select p from Checkin p where p.commandFlag = '0'")
	List<Checkin> getAllIncome();

	@Query("select p from Checkin p where p.commandFlag = '0' and p.doctorId = :doctorId")
	List<Checkin> getAllIncomeWithDoctorid(@Param("doctorId") String doctorId);

	@Query("SELECT a FROM Checkin a WHERE a.patient.id = :patient_id")
	List<Checkin> findByPaintedId(@Param("patient_id") String paintedId);

	@Query("SELECT a FROM Checkin a WHERE a.doctorId = :doctorId")
	List<Checkin> findByDoctorId(@Param("doctorId") String doctorId);
}
