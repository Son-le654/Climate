package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "specialty")
public class Specialty {

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

	@Column(name = "COMMAND_FLAG")
	private int commandFlag;

	@OneToOne(mappedBy = "specialty")
	private InternalAccount internal;

//////////////////////////////

	public Specialty() {
		// TODO Auto-generated constructor stub
	}

	public Specialty(String name, String description) {
		super();
		this.name = name;
		this.description = description;
		this.commandFlag = 1;
	}

	public InternalAccount getInternal() {
		return internal;
	}

	public void setInternal(InternalAccount internal) {
		this.internal = internal;
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

}
