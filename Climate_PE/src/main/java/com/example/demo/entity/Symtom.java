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
@Table(name = "symtom")
public class Symtom {

	/**
	 * 
	 */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SYMTOM_ID")
	private int id;

	@Column(name = "SYMTOM_NAME", nullable = false)
	private String name;

	@Column(name = "SYMTOM_DESCRIPTION")
	private String description;

	@Column(name = "COMMAND_FLAG")
	private int commandFlag;

	@ManyToOne
	@JoinColumn(name = "SPEC_ID")
	private Specialty specialty;

	public Symtom() {
		// TODO Auto-generated constructor stub
	}

	public Symtom(String name, String description, Specialty specialty) {
		super();
		this.name = name;
		this.description = description;
		this.commandFlag = 1;
		this.specialty = specialty;
	}

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

	public int getCommandFlag() {
		return commandFlag;
	}

	public void setCommandFlag(int commandFlag) {
		this.commandFlag = commandFlag;
	}

	public Specialty getSpecialty() {
		return specialty;
	}

	public void setSpecialty(Specialty specialty) {
		this.specialty = specialty;
	}

}
