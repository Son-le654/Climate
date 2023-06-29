package com.example.demo.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
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

import com.example.demo.DTO.LoginRequest;
import com.example.demo.DTO.RegisterRequest;
import com.example.demo.mailHelper.MailDetail;
import com.example.demo.mailHelper.MailService;
import com.example.demo.mailHelper.OTP;
import com.example.demo.service.JwtResponse;
import com.example.demo.service.JwtTokenUtil;
import com.example.demo.service.PatientService;

import net.bytebuddy.utility.RandomString;

@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = {"http://clinicmates.io.vn/", "http://localhost:3000/"})
public class PatientController {
	@Autowired
	private MailService mailService;

	private static List<OTP> otps = new ArrayList<OTP>();

	@Autowired
	private PatientService service;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@PostMapping(value = "/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
		System.out.println("url: " + loginRequest.getEmail() + loginRequest.getPassword());
		System.out.println("patient");
		String email = loginRequest.getEmail();
		String password = loginRequest.getPassword();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
		} catch (BadCredentialsException e) {
			return ResponseEntity.ok("Incorrect email or password.");
		}
		final UserDetails userDetails = service.loadUserByUsername(email);
		final String token = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
	}

	@PostMapping(value = "/register")
	public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
		System.out.println("url: " + request.getEmail() + request.getPassword());

		String result = service.register(request);
		if (result.equals("success")) {
			try {
				String OTP = generateOneTimePassword(request.getEmail());
				MailDetail m = new MailDetail(request.getEmail(), "OTP",
						"The OTP is : " + OTP + ". This OTP will be expired after 2 minutes");
				mailService.sendMail(m);
			} catch (UnsupportedEncodingException | MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return ResponseEntity.ok(result);

	}
	@PostMapping(value = "/update")
	public ResponseEntity<?> update(@RequestBody RegisterRequest request) {
		
		String result = service.update(request);
	
		
		return ResponseEntity.ok(result);
		
	}

	/**
	 * Check OTP of a user.
	 *
	 * @param EnteredOtp the entered otp
	 * @param email      the email
	 * 
	 * @return the string
	 */
	@GetMapping("/checkotp")
	public String checkOTP(@RequestParam("otp") String EnteredOtp, @RequestParam("email") String email) {
		OTP o1 = null;
		for (OTP otp : otps) {
			if (otp.getEmail().equals(email) && otp.getContent().equals(EnteredOtp)) {
				o1 = otp;
			}
		}

		if (null == o1) {
			return "Fail to check otp";
		}

		boolean exp = checkTimeOTP(o1.getExpiredTime());
		System.out.println("before remove");
		for (OTP otp : otps) {
			System.out.println(otp.getEmail());
		}
		otps.remove(o1);

		System.out.println("after remove");
		for (OTP otp : otps) {
			System.out.println(otp.getEmail());
		}
		if (!exp) {
			// otp right
			service.otpVerify(email);
			return "verify success";
		} else {
			return "OTP expired!!";
		}
	}

	/**
	 * Generate OTP for an user with user's email.
	 *
	 * @param email the email
	 * 
	 * @return the OTP string
	 * @throws UnsupportedEncodingException the unsupported encoding exception
	 * @throws MessagingException           the messaging exception
	 */
	public String generateOneTimePassword(String email) throws UnsupportedEncodingException, MessagingException {
		String OTP = RandomString.make(8);
		long expireAt = getOtpExpiredTime();
		OTP otp2 = new OTP(email, OTP, expireAt);

		int index = -1;
		for (OTP otpFind : otps) {
			if (otpFind.getEmail().equals(email)) {
				index = otps.indexOf(otpFind);
			}
		}

		if (index > -1) {
			otps.set(index, otp2);
		} else {
			otps.add(otp2);
		}
		return OTP;
	}

	/**
	 * Gets the otp expired time.
	 *
	 * @return the otp expired time
	 */
	public long getOtpExpiredTime() {
		long expiredAt = new Date().getTime() + TimeUnit.MINUTES.toMillis(2);
		return expiredAt;
	}

	/**
	 * Check OTP is expired or not.
	 *
	 * @param expiredAt the expired at
	 * @return true if time is expired
	 */
	public boolean checkTimeOTP(long expiredAt) {
		long currentTime = new Date().getTime();
		if (expiredAt - currentTime > 0) {
			return false;
		}
		return true;
	}

}
