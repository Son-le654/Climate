package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "medicalrecord")
public class MedicalRecord {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "MEDICAL_RECORD_ID")
	private int id;

	@Column(name = "RESULT")
	private String result;

	@Column(name = "MEDICINES", columnDefinition = "MEDIUMTEXT")
	private String medicines;

	@Column(name = "DOCTOR_NAME")
	private String doctor;

	@Column(name = "RELEASE_DATE")
	private String date;

	@Column(name = "COMMAND_FLAG")
	private int commandFlag;

	@ManyToOne
	@JoinColumn(name = "PATIENT_ID")
	private Patient patient;

	public MedicalRecord() {
		// TODO Auto-generated constructor stub
	}

	public MedicalRecord(String result, String medicines, String doctor, String date, int commandFlag,
			Patient patient) {
		super();
		this.result = result;
		this.medicines = medicines;
		this.doctor = doctor;
		this.date = date;
		this.commandFlag = 1;
		this.patient = patient;
	}

	public int getCommandFlag() {
		return commandFlag;
	}

	public void setCommandFlag(int commandFlag) {
		this.commandFlag = commandFlag;
	}

	public String getDoctor() {
		return doctor;
	}

	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getMedicines() {
		return medicines;
	}

	public void setMedicines(String medicines) {
		this.medicines = medicines;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

}
