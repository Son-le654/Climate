package com.example.demo.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "internal_account")
public class InternalAccount {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "INTERNAL_ID")
	private int id;

	@Column(name = "EMAIL")
	private String email;

	@Column(name = "PASSWORD", nullable = false, columnDefinition = "LONGTEXT")
	private String password;

	@Column(name = "NAME")
	private String name;

	@Column(name = "BIRTHDATE")
	private LocalDate birthDate;

	@Column(name = "GENDER")
	private String gender;

	@Column(name = "PHONE")
	private String phone;

	@Column(name = "YEAR_OF_EXP")
	private int yearOfExp;

	@Column(name = "STATUS")
	private int status;

	@Column(name = "EDUCATION")
	private String education;

	@Column(name = "COMMAND_FLAG")
	private int commandFlag;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "LOCATION", referencedColumnName = "LOCATION_ID")
	private Location workingPlace;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "ROLE", referencedColumnName = "ROLE_ID")
	private Role role;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "SPECIATLY", referencedColumnName = "SPEC_ID")
	private Specialty specialty;

	@OneToMany( mappedBy="inaccounts")
	private List<Schedule> schedule;

/////////////////////////////////

	public InternalAccount() {
		// constructor mặc định không có tham số
	}

	public InternalAccount(String email, String password, String name, LocalDate birthDate, String gender, String phone,
			int yearOfExp, int status, String education, int commandFlag, Location workingPlace, Role role,
			Specialty specialty) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.birthDate = birthDate;
		this.gender = gender;
		this.phone = phone;
		this.yearOfExp = yearOfExp;
		this.status = status;
		this.education = education;
		this.commandFlag = 1;
		this.workingPlace = workingPlace;
		this.role = role;
		this.specialty = specialty;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public List<Schedule> getSchedule() {
		return schedule;
	}

	public void setSchedule(List<Schedule> schedule) {
		this.schedule = schedule;
	}

	public void setYearOfExp(int yearOfExp) {
		this.yearOfExp = yearOfExp;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
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

	public Location getWorkingPlace() {
		return workingPlace;
	}

	public void setWorkingPlace(Location workingPlace) {
		this.workingPlace = workingPlace;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Specialty getSpecialty() {
		return specialty;
	}

	public void setSpecialty(Specialty specialty) {
		this.specialty = specialty;
	}

}
