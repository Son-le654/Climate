package com.example.demo.service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.entity.InternalAccount;
import com.example.demo.entity.Role;
import com.example.demo.repository.InternalRepository;

@Service
public class InternalService implements UserDetailsService {

	@Autowired
	private InternalRepository internalRepository;

	private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Role role) {
		return Collections.singleton(new SimpleGrantedAuthority(role.getName()));
	}

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<InternalAccount> internal = internalRepository.findByEmail(username);
		if (internal == null) {
			throw new UsernameNotFoundException("Invalid email or password.");
		}
		return new org.springframework.security.core.userdetails.User(internal.get().getEmail(),
				internal.get().getPassword(), mapRolesToAuthorities(internal.get().getRole()));
	}

	public List<InternalAccount> findAllDoctor() {
		return internalRepository.findAllDoctor();
	}

	public List<InternalAccount> findAllDoctorWithLocation(int id) {
		return internalRepository.findAllDoctorByLocation(id);
	}

	public InternalAccount save(InternalAccount account) {
		System.out.println(account.toString());
		return internalRepository.save(account);
	}

	public InternalAccount update(InternalAccount account) {
		System.out.println(account.toString());
		InternalAccount c = internalRepository.findById(account.getId())
				.orElseThrow(() -> new EntityNotFoundException("User not found with id " + account.getId()));

		c.setEmail(account.getEmail());
		c.setPassword(account.getPassword());
		c.setName(account.getName());
		c.setBirthDate(account.getBirthDate());
		c.setGender(account.getGender());
		c.setPhone(account.getPhone());
		c.setYearOfExp(account.getYearOfExp());
		c.setEducation(account.getEducation());
		c.setAvatar(account.getAvatar());
		c.setIntroduct(account.getEducation());
		c.setAvatar(account.getAvatar());
		c.setWorkingPlace(account.getWorkingPlace());
		c.setRole(account.getRole());
		c.setSpecialty(account.getSpecialty());

		return internalRepository.save(c);
	}

	public List<InternalAccount> findAll() {
		return internalRepository.findAll();
	}

	public Optional<InternalAccount> findByEmail(String email) {
		return internalRepository.findByEmail(email);
	}

	public Optional<InternalAccount> findById(Integer id) {
		return internalRepository.findById(id);
	}

	public InternalAccount findByName(String doctorName, String location) {
		return internalRepository.findDoctor(doctorName, location);
	}

	public Optional<List<InternalAccount>> findDoctorBySpecialty(String specialty) {
		return internalRepository.findBySpecialty(specialty);
	}

	public Optional<List<InternalAccount>> searchInternalAccounts(String name, String specialty) {
		if (name != null && specialty != null) {
			return internalRepository.findByNameAndSpecialty(name, specialty);
		} else if (name != null) {
			return internalRepository.findByName(name);
		} else if (specialty != null) {
			return internalRepository.findBySpecialty(specialty);
		} else {
			return Optional.of(internalRepository.findAllDoctor());
		}
	}
}