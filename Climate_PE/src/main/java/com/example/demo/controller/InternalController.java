package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.ApiResponse;
import com.example.demo.DTO.InternalAccountDTO;
import com.example.demo.DTO.LoginRequest;
import com.example.demo.entity.InternalAccount;
import com.example.demo.entity.Specialty;
import com.example.demo.service.InternalService;
import com.example.demo.service.JwtResponse;
import com.example.demo.service.JwtTokenUtil;
import com.example.demo.service.SpeciatlyService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = { "http://clinicmates.io.vn/", "http://localhost:3000/" })
public class InternalController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private InternalService internalService;

	@Autowired
	private SpeciatlyService speciatlyService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private InternalService doctorService;

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
		Optional<InternalAccount> interacc = doctorService.findByEmail(email);
		if (!interacc.isPresent()) {
			return ResponseEntity.ok("Not found accout.");
		}
		final UserDetails userDetails = internalService.loadUserByUsername(email);
		final String token = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
	}

	@PostMapping("/save")
	public String save(@RequestBody InternalAccount account) {
		System.out.println("enter save: " + account.toString());
		internalService.save(account);
		return "success";
	}
	
	@PutMapping("/update")
	public String update(@RequestBody InternalAccount account) {
		System.out.println("enter save: " + account.toString());
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

	@GetMapping(value = "/doctors")
	public List<InternalAccount> listAccDoctor() {
		return internalService.findAllDoctor();
	}

	@GetMapping(value = "/doctors/specialty")
	public List<InternalAccountDTO> listAccDoctorwithSpecialty() {
		List<InternalAccountDTO> responseList = new ArrayList<>();
		List<Specialty> specials = speciatlyService.findAll();
		for (Specialty special : specials) {
			Optional<List<InternalAccount>> doctors = internalService.findDoctorBySpecialty(special.getName());
			List<InternalAccount> doctorList = doctors.get();
			int count = doctorList.size();
			InternalAccountDTO response = new InternalAccountDTO(special.getName(), count, doctorList);
			responseList.add(response);

		}
		return responseList;
	}

	@GetMapping("/list_lo/{location}")
	public List<InternalAccount> getAllByLocation(@PathVariable int location) {
		return internalService.findAllDoctorWithLocation(location);
	}

	@GetMapping("/internal-accounts/search")
	public ResponseEntity<?> searchInternalAccounts(@RequestParam(value = "name", required = false) String name,
			@RequestParam(value = "specialty", required = false) String specialty) {
		String role = "DOCTOR";
		Optional<List<InternalAccount>> accounts = internalService.searchInternalAccounts(name, specialty);
		if (accounts.isPresent() && !accounts.get().isEmpty()) {
			return ResponseEntity.ok(accounts);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("No doctor information found"));
		}
	}
}