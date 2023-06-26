package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.InternalAccount;

public interface InternalRepository extends JpaRepository<InternalAccount, Integer> {
	InternalAccount findByEmail(String email);

//	@Query("select p FROM Appointment p where p.patient.id = :patient_id p.doctorName = :doctorName and "
//	+ "p.examDate = :examDate and p.examTime = :examTime")
//InternalAccount findOne (@Param("patient_id") String patient_id,@Param("doctorName") String doctorName,
//	@Param("examDate") String examDate,@Param("examTime") String examTime);

	@Query("select i from InternalAccount i where i.role.name = 'DOCTOR'")
	List<InternalAccount> findAllDoctor();

	@Query("select i from InternalAccount i where i.role.name = 'DOCTOR' and i.workingPlace.id = :location")
	List<InternalAccount> findAllDoctorByLocation(@Param(value = "location") int id);

	@Query("SELECT ia FROM InternalAccount ia JOIN ia.specialty s WHERE ia.name LIKE %:name% AND s.name LIKE %:specialty%")
	Optional<List<InternalAccount>> findByNameAndSpecialty(@Param("name") String name,
			@Param("specialty") String specialty);

	@Query("SELECT ia FROM InternalAccount ia JOIN ia.specialty s WHERE ia.name LIKE %:name%")
	Optional<List<InternalAccount>> findByName(@Param(value = "name") String name);

	@Query("SELECT ia FROM InternalAccount ia JOIN ia.specialty s WHERE s.name LIKE %:specialty%")
	Optional<List<InternalAccount>> findBySpecialty(@Param(value = "specialty") String specialty);

}
