package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "appointment")
public class Appointment implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7657686804467804181L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "APPOINTMENT_ID")
	private int id;

	@Column(name = "NOTE",nullable=false)
	private String note;

//	@Column(name = "FOREIGN",columnDefinition = "BIT DEFAULT FALSE", nullable = false)
//	private boolean foreign;

	@Column(name = "EXAMTIME", nullable = false)
	private String examtime;

	@Column(name = "EXAMDATE", nullable = false)
	private String examdate;

	@Column(name = "SPECIATLY",nullable=false)
	private int speciatly;

	@Column(name = "DOCTORNAME",nullable=false)
	private String doctorname;

	@ManyToOne
	@JoinColumn(name="PATIENT_ID")
	private Patient patient;

	@Column(name = "SYMTOM")
	private String[] symtom;

	@Column(name = "COMMAND_FLAG")
	private int commandflag;

	public Appointment() {
		// TODO Auto-generated constructor stub
	}

	public Appointment( String note, String examtime, String examdate, int speciatly,
			String doctorname, Patient patient, String[] symtom, int commandflag) {
		super();
		this.note = note;
//		this.foreign = foreign;
		this.examtime = examtime;
		this.examdate = examdate;
		this.speciatly = speciatly;
		this.doctorname = doctorname;
		this.patient = patient;
		this.symtom = symtom;
		this.commandflag = commandflag;
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

//	public boolean isForeign() {
//		return foreign;
//	}
//
//	public void setForeign(boolean foreign) {
//		this.foreign = foreign;
//	}

	public String getExamtime() {
		return examtime;
	}

	public void setExamtime(String examtime) {
		this.examtime = examtime;
	}

	public String getExamdate() {
		return examdate;
	}

	public void setExamdate(String examdate) {
		this.examdate = examdate;
	}

	public int getSpeciatly() {
		return speciatly;
	}

	public void setSpeciatly(int speciatly) {
		this.speciatly = speciatly;
	}

	public String getDoctorname() {
		return doctorname;
	}

	public void setDoctorname(String doctorname) {
		this.doctorname = doctorname;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public String[] getSymtom() {
		return symtom;
	}

	public void setSymtom(String[] symtom) {
		this.symtom = symtom;
	}

	public int getCommandflag() {
		return commandflag;
	}

	public void setCommandflag(int commandflag) {
		this.commandflag = commandflag;
	}

	

}
