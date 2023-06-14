package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Role;
import com.example.demo.repository.RoleRepository;

@Service
public class RoleService {

	@Autowired
	private RoleRepository repository;
	
	public Role save(Role role) {
		return repository.save(role);
	}
	public List<Role> findAll() {
        return repository.findAll();
    }
	public Optional<Role> findById(Integer id) {
        return repository.findById(id);
    }
}
