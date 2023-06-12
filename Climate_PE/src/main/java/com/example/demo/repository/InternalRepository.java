package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.InternalAccount;

public interface InternalRepository extends JpaRepository<InternalAccount, Integer> {
    InternalAccount findByEmail(String email);
}
