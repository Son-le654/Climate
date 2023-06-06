package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Appointment;
import com.example.demo.entity.Patient;
import com.example.demo.entity.Specialty;

@Repository
public interface SpeciatlyRepository extends JpaRepository<Specialty, Integer>{

}
