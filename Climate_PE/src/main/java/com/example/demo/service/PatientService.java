package com.example.demo.service;

import java.util.Collection;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.RegisterRequest;
import com.example.demo.entity.Patient;
import com.example.demo.repository.PatientRepository;

@Service
public class PatientService implements UserDetailsService {

	@Autowired
	private PatientRepository repository;

	private Collection<? extends GrantedAuthority> mapRolesToAuthorities(String role) {
		return Collections.singleton(new SimpleGrantedAuthority(role));
	}

	public User loadUserByUsername(String username) throws UsernameNotFoundException {

		Patient painted = repository.findByEmail(username);
		if (painted == null) {
			throw new UsernameNotFoundException("Invalid email or password.");
		}
		return new org.springframework.security.core.userdetails.User(painted.getEmail(), painted.getPassword(),
				mapRolesToAuthorities(painted.getRole()));

	}

	public String register(RegisterRequest request) {

		if (checkNameExists(request.getName()) != null) {
			return "Name already exists";
		}
		if (checkEmailExists(request.getEmail()) != null) {
			return "Email already exists";
		}
		if (checkIDExists(request.getId()) != null) {
			return "ID already exists";
		}

		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(request.getPassword());
//		LocalDate date = LocalDate.parse(request.getBirthdate(), DateTimeFormatter.ofPattern("yyyy/MM/dd"));

		Patient p = new Patient(request.getId(), request.getName(), request.getEmail(), hashedPassword,
				request.getBirthdate());

		repository.save(p);
		return "Create success";
	}

	public String update(RegisterRequest request) {

		if (checkIDExists(request.getId()) == null) {
			return "Patient not exists";
		}

		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(request.getPassword());
//		LocalDate date = LocalDate.parse(request.getBirthdate(), DateTimeFormatter.ofPattern("yyyy/MM/dd"));

		Patient p = new Patient(request.getId(), request.getName(), request.getEmail(), hashedPassword,
				request.getBirthdate());

		repository.save(p);
		return "Update success";
	}

	public String updatePassword(String email, String password) {
		Patient p = null;
		if (checkEmailExists(email) == null) {
			return "Patient not exists";
		}
		p = checkEmailExists(email);
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(password);
		p.setPassword(hashedPassword);
		repository.save(p);
		return "Update success";
	}

	public String otpVerify(String email) {

		Patient painted = checkEmailExists(email);
		if (painted == null) {
			return "Email not exists";
		}
		painted.setCommandFlag(1);
		repository.save(painted);
		return "success";
	}

	public Patient findByEmail(String email) {
		return checkEmailExists(email);
	}

//	public String updatePatient(String email) {
//Painted painted = checkEmailExists(email);
//		if (painted == null) {
//			return "Email not exists";
//		}
//		painted.set
//		repository.save(painted);
//		return "success";
//	}

	private Patient checkEmailExists(String email) {
		return repository.findByEmail(email);
	}

	private Patient checkNameExists(String name) {
		return repository.findByName(name);
	}

	private Patient checkIDExists(String id) {
		return repository.findByID(id);
	}
}
