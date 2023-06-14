package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.InternalAccount;

public interface InternalRepository extends JpaRepository<InternalAccount, Integer> {
    InternalAccount findByEmail(String email);
    
//	@Query("select p FROM Appointment p where p.patient.id = :patient_id p.doctorName = :doctorName and "
//	+ "p.examDate = :examDate and p.examTime = :examTime")
//InternalAccount findOne (@Param("patient_id") String patient_id,@Param("doctorName") String doctorName,
//	@Param("examDate") String examDate,@Param("examTime") String examTime);
    
    @Query("select i from InternalAccount i where i.role.name = 'DOCTOR'")
    List<InternalAccount> findAllDoctor();
}
