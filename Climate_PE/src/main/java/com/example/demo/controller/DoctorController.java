package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.LoginRequest;
import com.example.demo.service.DoctorService;
import com.example.demo.service.JwtResponse;
import com.example.demo.service.JwtTokenUtil;

@RestController
@RequestMapping("/api")
public class DoctorController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping(path = "/login", consumes = {MediaType.APPLICATION_JSON_VALUE,"application/json"})
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest,@PathVariable("config") final String config,final String configuration,
            @RequestPart(value = "file") final MultipartFile aFile) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Incorrect email or password.");
        }

        final UserDetails userDetails = doctorService.loadUserByUsername(loginRequest.getEmail());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }
}