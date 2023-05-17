package com.example.demo.service;

import java.util.Collection;
import java.util.Collections;

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

@Service
public class DoctorService implements UserDetailsService {

	@Autowired
	private DoctorRepository doctorRepository;

	private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Role role) {
		return Collections.singleton(new SimpleGrantedAuthority(role.getName()));
	}

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Doctor doctor = doctorRepository.findByEmail(username);
		if (doctor == null) {
			throw new UsernameNotFoundException("Invalid email or password.");
		}
		return new org.springframework.security.core.userdetails.User(doctor.getEmail(), doctor.getPassword(),
				mapRolesToAuthorities(doctor.getRole()));

	}
}