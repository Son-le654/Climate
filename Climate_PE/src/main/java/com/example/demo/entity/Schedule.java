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
@Table(name = "schedule")
public class Schedule {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SCHEDULE_ID")
	private int id;

	@Column(name = "RELEASE_TIME")
	private String releaseTime;

	@Column(name = "EXAM_DATE")
	private String examDate;

	@Column(name = "EXAM_TIME")
	private String examTime;

	@Column(name = "COMMAND_FLAG")
	private int commandFlag;

	@ManyToOne
	@JoinColumn(name = "internal_id")
	private InternalAccount inaccounts;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "appointment_id")
	private Appointment appointment;

	public Schedule() {
		// TODO Auto-generated constructor stub
	}

	public Schedule(String releaseTime, InternalAccount inaccounts, Appointment appointment) {
		super();
		this.releaseTime = releaseTime;
		this.commandFlag = 1;
		this.inaccounts = inaccounts;
		this.appointment = appointment;
	}

	public Schedule(int id, String examDate, String examTime, InternalAccount inaccounts, Appointment appointment) {
		super();
		this.id = id;
		this.releaseTime = timeNow();
		this.examDate = examDate;
		this.examTime = examTime;
		this.commandFlag = 1;
		this.inaccounts = inaccounts;
		this.appointment = appointment;
	}

	public String timeNow() {
		LocalDateTime currentDateTime = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		String formattedDateTime = currentDateTime.format(formatter);
		return formattedDateTime;
	}

	public String getExamDate() {
		return examDate;
	}

	public void setExamDate(String examDate) {
		this.examDate = examDate;
	}

	public String getExamTime() {
		return examTime;
	}

	public void setExamTime(String examTime) {
		this.examTime = examTime;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getReleaseTime() {
		return releaseTime;
	}

	public void setReleaseTime(String releaseTime) {
		this.releaseTime = releaseTime;
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

	public InternalAccount getInaccounts() {
		return inaccounts;
	}

	public void setInaccounts(InternalAccount inaccounts) {
		this.inaccounts = inaccounts;
	}
}
