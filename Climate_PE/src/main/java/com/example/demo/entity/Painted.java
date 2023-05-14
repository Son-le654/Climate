package com.example.demo.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "painted")
public class Painted  implements Serializable{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @Column(name = "PAINTED_ID")
    private String id;

    @Column(name = "Name")
    private String name;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "BIRTHDATE")
    private LocalDate birthdate;

    @Column(name = "REGISTRATION_DATE")
    private LocalDate registrationDate;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
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

	public Painted(String id, String name, String password, String phone,
			LocalDate birthdate, LocalDate registrationDate) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.phone = phone;
		this.birthdate = birthdate;
		this.registrationDate = registrationDate;
	}
	public Painted() {
        // constructor mặc định không có tham số
    }
    
}