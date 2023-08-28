package com.Dac.BackEnd.Dtos;

public class StudentDTO {
	private int id;
	private String first_name;
	private String last_name;
	private String email;
	private String password;
	private String mobile;
	
	
	public StudentDTO() {
		super();
	}


	

	public StudentDTO(int id, String first_name, String last_name, String email, String password, String mobile) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
	}




	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getfirst_name() {
		return first_name;
	}


	public void setfirst_name(String first_name) {
		this.first_name = first_name;
	}


	public String getlast_name() {
		return last_name;
	}


	public void setlast_name(String last_name) {
		this.last_name = last_name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}
	
	
	

	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}

	
	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}




	@Override
	public String toString() {
		return "StudentDTO [id=" + id + ", first_name=" + first_name + ", last_name=" + last_name + ", email=" + email
				+ ", password=" + password + ", mobile=" + mobile + "]";
	}


	
}
