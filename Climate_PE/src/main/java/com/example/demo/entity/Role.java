package com.example.demo.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class Role implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ROLE_ID")
	private int id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "COMMAND_FLAG")
	private int commandFlag;

	@OneToOne(mappedBy = "role", fetch = FetchType.LAZY)
	private InternalAccount inaccounts;

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

	public int getCommandFlag() {
		return commandFlag;
	}

	public InternalAccount getInaccounts() {
		return inaccounts;
	}

	public void setInaccounts(InternalAccount inaccounts) {
		this.inaccounts = inaccounts;
	}

	public void setCommandFlag(int commandFlag) {
		this.commandFlag = commandFlag;
	}

	public Role() {
		// constructor mặc định không có tham số
	}

	public Role(String name, int commandFlag) {
		super();
		this.name = name;
		this.commandFlag = 1;
	}

}
