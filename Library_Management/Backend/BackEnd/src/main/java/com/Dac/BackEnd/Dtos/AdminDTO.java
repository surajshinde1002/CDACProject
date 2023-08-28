package com.Dac.BackEnd.Dtos;

public class AdminDTO {

		private int id;
		private String firstName;
		private String lastName;
		private String mobile;
		private String email;
		private String password;
		
		
		public AdminDTO() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		
		public AdminDTO(int id, String firstName, String lastName, String mobile, String email, String password) {
			super();
			this.id = id;
			this.firstName = firstName;
			this.lastName = lastName;
			this.mobile = mobile;
			this.email = email;
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


		public String getMobile() {
			return mobile;
		}


		public void setMobile(String mobile) {
			this.mobile = mobile;
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


		@Override
		public String toString() {
			return "AdminDTO [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", mobile=" + mobile
					+ ", email=" + email + ", password=" + password + "]";
		}




		
		
		
}
