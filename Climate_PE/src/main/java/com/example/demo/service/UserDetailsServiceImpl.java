package com.example.demo.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Doctor;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    DoctorService doctorService;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Doctor doctor = doctorService.getDoctorByEmail(email);
        if (doctor == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }

        return UserDetailsImpl.build(doctor);
    }
}