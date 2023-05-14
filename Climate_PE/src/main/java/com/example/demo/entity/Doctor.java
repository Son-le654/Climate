package com.example.demo.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "doctor")
public class Doctor implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DOCTOR_ID")
    private int id;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "Name")
    private String name;

    @Column(name = "BIRTHDATE")
    private LocalDate birthdate;

    @Column(name = "GENDER")
    private String gender;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "YEAR_OF_EXP")
    private Integer yearOfExp;

    @Column(name = "EDUCATION")
    private String education;

    @Column(name = "SCHEDULE")
    private String schedule;

    @Column(name = "FREE_TIME")
    private String freeTime;

    @Column(name = "Status")
    private Boolean status;

    @Column(name = "COMMAND_FLAGS")
    private Boolean commandFlags;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ROLE_ID")
    private Role role;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Integer getYearOfExp() {
		return yearOfExp;
	}

	public void setYearOfExp(Integer yearOfExp) {
		this.yearOfExp = yearOfExp;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getSchedule() {
		return schedule;
	}

	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}

	public String getFreeTime() {
		return freeTime;
	}

	public void setFreeTime(String freeTime) {
		this.freeTime = freeTime;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Boolean getCommandFlags() {
		return commandFlags;
	}

	public void setCommandFlags(Boolean commandFlags) {
		this.commandFlags = commandFlags;
	}
	
	public Role getRole() {
		return role;
	}

	
	public void setRole(Role role) {
		this.role = role;
	}

	public Doctor(int id, String email, String password, String name,
			LocalDate birthdate, String gender, String phone, Integer yearOfExp,
			String education, String schedule, String freeTime, Boolean status,
			Boolean commandFlags, Role role) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.birthdate = birthdate;
		this.gender = gender;
		this.phone = phone;
		this.yearOfExp = yearOfExp;
		this.education = education;
		this.schedule = schedule;
		this.freeTime = freeTime;
		this.status = status;
		this.commandFlags = commandFlags;
		this.role = role;
	}
	 public Doctor() {
	        // constructor mặc định không có tham số
	    }
	

    
}
