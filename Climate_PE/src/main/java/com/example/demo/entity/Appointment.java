package com.example.demo.entity;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "appointment")
public class Appointment {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7657686804467804181L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "APPOINTMENT_ID")
	private int id;

	@Column(name = "NOTE")
	private String note;

	@Column(name = "EXAM_TIME", nullable = false)
	private String examTime;

	@Column(name = "EXAM_DATE", nullable = false)
	private String examDate;

	@Column(name = "SPECIATLY", nullable = false)
	private String speciatly;

	@Column(name = "DOCTOR_NAME", nullable = false)
	private String doctorName;

	@Column(name = "PATIENT_NAME", nullable = false)
	private String patientName;

	@Column(name = "REGISTER_TIME")
	private String registerTime;

	@ManyToOne
	@JoinColumn(name = "PATIENT_ID")
	private Patient patient;

	@JsonIgnore
	@OneToOne(mappedBy = "appointment")
	private Schedule schedule;

	@Column(name = "SYMPTOM")
	private String symptom;

	@Column(name = "COMMAND_FLAG")
	private int commandFlag;

	public Appointment() {
		// TODO Auto-generated constructor stub
	}

	//for user
	public Appointment(String note, String examTime, String examDate, String speciatly, String doctorName,
			String patientName, Patient patient, String symptom) {
		super();
		this.note = note;
		this.examTime = examTime;
		this.examDate = examDate;
		this.speciatly = speciatly;
		this.doctorName = doctorName;
		this.patientName = patientName;
		this.patient = patient;
		this.symptom = symptom;
		this.registerTime = timeNow();
		this.commandFlag = 0;
	}

	//for guest
	public Appointment(String note, String examTime, String examDate, String speciatly, String doctorName,
			String patientName, String symptom) {
		super();
		this.note = note;
		this.examTime = examTime;
		this.examDate = examDate;
		this.speciatly = speciatly;
		this.doctorName = doctorName;
		this.patientName = patientName;
		this.registerTime = timeNow();
		this.symptom = symptom;
		this.commandFlag = 0;
	}

	public String timeNow() {
		LocalDateTime currentDateTime = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		String formattedDateTime = currentDateTime.format(formatter);
		return formattedDateTime;
	}

	public String getRegisterTime() {
		return registerTime;
	}

	public void setRegisterTime(String registerTime) {
		this.registerTime = registerTime;
	}

	public Schedule getSchedule() {
		return schedule;
	}

	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getExamTime() {
		return examTime;
	}

	public void setExamTime(String examTime) {
		this.examTime = examTime;
	}

	public String getExamDate() {
		return examDate;
	}

	public void setExamDate(String examDate) {
		this.examDate = examDate;
	}

	public String getSpeciatly() {
		return speciatly;
	}

	public void setSpeciatly(String speciatly) {
		this.speciatly = speciatly;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public String getSymptom() {
		return symptom;
	}

	public void setSymptom(String symptom) {
		this.symptom = symptom;
	}

	public int getCommandFlag() {
		return commandFlag;
	}

	public void setCommandFlag(int commandFlag) {
		this.commandFlag = commandFlag;
	}

}
