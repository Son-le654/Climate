package com.example.demo.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "specialty")
public class Specialty  {

	/**
	 * 
	 */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SPEC_ID")
	private int id;

	@Column(name = "SPEC_NAME", nullable = false)
	private String name;

	@Column(name = "SPEC_DESCRIPTION")
	private String description;

	@Column(name = "COMMAND_FLAG", columnDefinition = "DEFAULT '0'")
	private int commandflag;

	@OneToMany(mappedBy = "specialty", fetch = FetchType.EAGER)
	private List<Symtom> symtoms;

	@OneToMany(mappedBy = "specialty", fetch = FetchType.EAGER)
	private List<Doctor> doctors;

//////////////////////////////

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getCommandflag() {
		return commandflag;
	}

	public void setCommandflag(int commandflag) {
		this.commandflag = commandflag;
	}

	public List<Symtom> getSymtoms() {
		return symtoms;
	}

	public void setSymtoms(List<Symtom> symtoms) {
		this.symtoms = symtoms;
	}

	public List<Doctor> getDoctors() {
		return doctors;
	}

	public void setDoctors(List<Doctor> doctors) {
		this.doctors = doctors;
	}

}
