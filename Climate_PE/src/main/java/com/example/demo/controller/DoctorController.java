package com.example.demo.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.LoginRequest;
import com.example.demo.mailHelper.MailDetail;
import com.example.demo.mailHelper.MailService;
import com.example.demo.mailHelper.OTP;
import com.example.demo.service.DoctorService;
import com.example.demo.service.JwtResponse;
import com.example.demo.service.JwtTokenUtil;

import net.bytebuddy.utility.RandomString;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class DoctorController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private DoctorService doctorService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	

	@PostMapping(value = "/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
		System.out.println("url: " + loginRequest.getEmail() + loginRequest.getPassword());
		String email = loginRequest.getEmail();
		String password = loginRequest.getPassword();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
		} catch (BadCredentialsException e) {
			return ResponseEntity.ok("Incorrect email or password.");
		}
		final UserDetails userDetails = doctorService.loadUserByUsername(email);
		final String token = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
	}

	
}