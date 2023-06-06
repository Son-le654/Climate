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
@Table(name = "symtom")
public class Symtom{

	/**
	 * 
	 */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SYMTOM_ID")
	private int id;
	
	@Column(name="SYMTOM_NAME", nullable = false)
	private String name;
	
	@Column(name="SYMTOM_DESCRIPTION")
	private String description;
	
	@Column(name="COMMAND_FLAG",columnDefinition="DEFAULT '0'")
	private int commandflag;
	
	@ManyToOne
	@JoinColumn(name = "SPEC_ID")
	private Specialty specialty;

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

	public Specialty getSpecialty() {
		return specialty;
	}

	public void setSpecialty(Specialty specialty) {
		this.specialty = specialty;
	}
	
	
}
