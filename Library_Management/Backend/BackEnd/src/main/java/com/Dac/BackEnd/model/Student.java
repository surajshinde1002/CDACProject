package com.Dac.BackEnd.model;

import java.util.List;

import jakarta.persistence.*;


@Entity
@Table(name = "student")
public class Student {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "stud_id")
	private int id;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	private String email;
	private String mobile;
	private String password;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="stud_id", referencedColumnName="stud_id")
	private List<Request> requests ;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="stud_id", referencedColumnName="stud_id")
	private List<Feedback> feedbacks ;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="stud_id", referencedColumnName="stud_id")
	private List<IssuedBooks> issuedBooks ;
	
	
	public Student() {
		super();
	}

	public Student(int id, String firstName, String lastName, String email, String mobile, String password) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", mobile=" + mobile + ", password=" + password + "]";
	}

	
	
	
	
}
