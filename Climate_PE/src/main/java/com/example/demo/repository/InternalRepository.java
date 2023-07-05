package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.InternalAccount;

public interface InternalRepository extends JpaRepository<InternalAccount, Integer> {
	InternalAccount findByEmail(String email);

	@Query("select i from InternalAccount i where i.role.name = 'DOCTOR'")
	List<InternalAccount> findAllDoctor();
	
	@Query("select i from InternalAccount i where i.role.name = 'DOCTOR' AND i.name = :name and CONCAT(i.workingPlace.name, ' - ', i.workingPlace.description) = :location")
	InternalAccount findDoctor(@Param(value = "name") String name, @Param(value = "location") String location);

	@Query("select i from InternalAccount i where i.role.name = 'DOCTOR' and i.workingPlace.id = :location")
	List<InternalAccount> findAllDoctorByLocation(@Param(value = "location") int id);

	@Query("SELECT ia FROM InternalAccount ia JOIN ia.specialty s WHERE ia.name LIKE %:name% AND ia.role.name = 'DOCTOR' AND s.name LIKE %:specialty%")
	Optional<List<InternalAccount>> findByNameAndSpecialty(@Param("name") String name,
			@Param("specialty") String specialty);

	@Query("SELECT ia FROM InternalAccount ia JOIN ia.specialty s WHERE ia.name LIKE %:name% AND ia.role.name = 'DOCTOR'")
	Optional<List<InternalAccount>> findByName(@Param(value = "name") String name);

	@Query("SELECT ia FROM InternalAccount ia WHERE ia.specialty.name LIKE %:specialty% AND ia.role.name = 'DOCTOR'")
	Optional<List<InternalAccount>>  findBySpecialty(@Param(value = "specialty") String specialty);

}
