package com.example.demo.DTO;

import com.example.demo.entity.Role;

public class CreateAccountDTO {
	private String name;
	private String email;
	private String password;
	private String role;
	private String specialty;
	private String location;
	private String avatar;

	public CreateAccountDTO() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getSpecialty() {
		return specialty;
	}

	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public CreateAccountDTO(String name, String email, String password, String role, String specialty, String location,
			String avatar) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.specialty = specialty;
		this.location = location;
		this.avatar = avatar;
	}

}
