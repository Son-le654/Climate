package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.LoginRequest;
import com.example.demo.entity.InternalAccount;
import com.example.demo.entity.Symptom;
import com.example.demo.service.InternalService;
import com.example.demo.service.JwtResponse;
import com.example.demo.service.JwtTokenUtil;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class InternalController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private InternalService internalService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@PostMapping(value = "/login")
	public ResponseEntity<?> DoLogin(@RequestBody LoginRequest loginRequest) {
		System.out.println("url: " + loginRequest.getEmail() + loginRequest.getPassword());
		String email = loginRequest.getEmail();
		String password = loginRequest.getPassword();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
		} catch (BadCredentialsException e) {
			return ResponseEntity.ok("Incorrect email or password.");
		}
		final UserDetails userDetails = internalService.loadUserByUsername(email);
		final String token = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	@PostMapping("/save")
	public String save(@RequestBody InternalAccount account) {
		internalService.save(account);
		return "success";
	}

	@GetMapping("/list")
	public List<InternalAccount> getAll() {
		return internalService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<InternalAccount> getInternalById(@PathVariable(value = "id") Integer id) {
		Optional<InternalAccount> acc = internalService.findById(id);
		if (acc.isPresent()) {
			return ResponseEntity.ok().body(acc.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping(value="/doctors")
	public List<InternalAccount> listAccDoctor(){
		return internalService.findAllDoctor();
	}

	@GetMapping("/list_lo/{location}")
	public List<InternalAccount> getAllByLocation(@PathVariable int location) {
		return internalService.findAllDoctorWithLocation(location);
	}
}