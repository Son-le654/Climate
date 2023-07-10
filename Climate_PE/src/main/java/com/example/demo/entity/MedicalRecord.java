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

@Entity
@Table(name = "medicalrecord")
public class MedicalRecord {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "MEDICAL_RECORD_ID")
	private int id;

	@Column(name = "DOCTOR_ID")
	private String doctorId;

	@Column(name = "RELEASE_DATE")
	private String releaseDate;

	@Column(name = "COMMAND_FLAG")
	private int commandFlag;

	@JoinColumn(name = "APPOINTMENT_ID", referencedColumnName = "APPOINTMENT_ID")
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	private Appointment appointment;

	@Column(name = "CLINIC_PROCESS", columnDefinition = "LONGTEXT")
	private String clinicProcess;

	@Column(name = "SUMARY_RESULT", columnDefinition = "LONGTEXT")
	private String sumaryResult;

	@Column(name = "TREATMENT", columnDefinition = "LONGTEXT")
	private String treatment;

	public MedicalRecord() {
		// TODO Auto-generated constructor stub
	}

	public MedicalRecord(int id, String doctorId, int commandFlag, Appointment appointment, String clinicProcess,
			String sumaryResult, String treatment,String releaseDate) {
		super();
		this.id = id;
		this.doctorId = doctorId;
		this.releaseDate = timeNow();
		this.commandFlag = commandFlag;
		this.appointment = appointment;
		this.clinicProcess = clinicProcess;
		this.sumaryResult = sumaryResult;
		this.treatment = treatment;
	}


	public String timeNow() {
		LocalDateTime currentDateTime = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss:SSS");
		String formattedDateTime = currentDateTime.format(formatter);
		return formattedDateTime;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(String doctorId) {
		this.doctorId = doctorId;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public int getCommandFlag() {
		return commandFlag;
	}

	public void setCommandFlag(int commandFlag) {
		this.commandFlag = commandFlag;
	}

	public Appointment getAppointment() {
		return appointment;
	}

	public void setAppointment(Appointment appointment) {
		this.appointment = appointment;
	}

	public String getClinicProcess() {
		return clinicProcess;
	}

	public void setClinicProcess(String clinicProcess) {
		this.clinicProcess = clinicProcess;
	}

	public String getSumaryResult() {
		return sumaryResult;
	}

	public void setSumaryResult(String sumaryResult) {
		this.sumaryResult = sumaryResult;
	}

	public String getTreatment() {
		return treatment;
	}

	public void setTreatment(String treatment) {
		this.treatment = treatment;
	}

}
