package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {

//	@Query("select p FROM Appointment p where p.patient.id = :patient_id p.doctorName = :doctorName and "
//	+ "p.examDate = :examDate and p.examTime = :examTime")
//InternalAccount findOne (@Param("patient_id") String patient_id,@Param("doctorName") String doctorName,
//	@Param("examDate") String examDate,@Param("examTime") String examTime);

	List<Schedule> findAll();

	@Query("select i from Schedule i where i.inaccounts.id = :id and i.examDate = :examDate")
	List<Schedule> findAllByInIdAndDate(@Param(value = "id") int id, @Param(value = "examDate") String examDate);

	@Query("select i from Schedule i where i.inaccounts.name = :name and i.examDate = :examDate and i.examTime = :examTime")
	Schedule findByInNameAndDateTime(@Param(value = "name") String name, @Param(value = "examDate") String examDate,
			@Param(value = "examTime") String examTime);

	List<Schedule> findByInaccountsEmailOrderByExamDateAscExamTimeAsc(String email);

}
