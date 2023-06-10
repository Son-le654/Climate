package com.example.demo.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "patient")
public class Patient {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "PAINTED_ID", nullable = false) // cccd
	private String id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "EMAIL", nullable = false)
	private String email;

	@Column(name = "PASSWORD", nullable = false, columnDefinition = "LONGTEXT")
	private String password;

	@Column(name = "ADDRESS")
	private String address;

	@Column(name = "PHONE")
	private String phone;

	@Column(name = "BIRTHDATE")
	private LocalDate birthdate;

	@Column(name = "REGISTRATION_DATE")
	private LocalDate registrationDate;

	@Column(name = "STATUS")
	private int status;

	@Column(name = "COMMAND_FLAG")
	private int commandFlag;

	@Column(name = "ROLE")
	private String role;


	/////////////////////////////////
	

	public void setRole(String role) {
		this.role = role;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public String getRole() {
		return role;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public LocalDate getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}

	public LocalDate getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(LocalDate registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getCommandFlag() {
		return commandFlag;
	}

	public void setCommandFlag(int commandFlag) {
		this.commandFlag = commandFlag;
	}

	public Patient() {
		// constructor mặc định không có tham số
	}

	public Patient(String id, String name, String email, String password, String address, String phone,
			LocalDate birthdate) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.address = address;
		this.phone = phone;
		this.birthdate = birthdate;
		this.registrationDate = LocalDate.now();
		this.status = 1;
		this.commandFlag = 0;
		this.role = "USER";
	}

	public Patient(String id, String name, String email, String password, LocalDate birthdate) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.birthdate = birthdate;
		this.registrationDate = LocalDate.now();
		this.status = 1;
		this.commandFlag = 0;
		this.role = "USER";
	}

}