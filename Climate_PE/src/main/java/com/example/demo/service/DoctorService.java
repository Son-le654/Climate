package com.example.demo.service;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Doctor;
import com.example.demo.entity.Role;
import com.example.demo.repository.DoctorRepository;
import com.example.demo.repository.RoleRepository;

@Service
public class DoctorService implements UserDetailsService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Doctor doctor = doctorRepository.findByEmail(email);
        if (doctor == null) {
            throw new UsernameNotFoundException("Invalid email or password.");
        }
        return new org.springframework.security.core.userdetails.User(doctor.getEmail(), doctor.getPassword(),
                mapRolesToAuthorities(doctor.getRole()));
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Role role) {
        return Collections.singleton(new SimpleGrantedAuthority(role.getName()));
    }

    public Doctor save(Doctor doctor) {
    	Role role = roleRepository.findByName("ROLE_USER");
        doctor.setRole(role);
        return doctorRepository.save(doctor);
    }
    public Doctor getDoctorByEmail(String email) {
        return doctorRepository.findByEmail(email);
    }
    public Optional<Doctor> getDoctorByID(int id) {
        return doctorRepository.findById(id);
    }
}