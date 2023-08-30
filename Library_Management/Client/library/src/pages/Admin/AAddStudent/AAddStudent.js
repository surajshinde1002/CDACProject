import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify'
import { SPRING_URL, URL } from '../../../config'
import { useNavigate } from 'react-router'
import './AAddStudent.css'

function AddStudent() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()

  const addStudent = () =>{
    if (first_name.length === 0) {
      toast.warning('Please enter first name')
    }else if (last_name.length === 0) {
      toast.warning('Please enter last name')
    } else if (email.length === 0) {
      toast.warning('Please enter email')
    }else if (mobile.length === 0) {
      toast.warning('Please enter mobile number')
    } else if (password.length === 0) {
      toast.warning('Please enter password')
    }  else if (password !== confirmPassword) {
      toast.warning('password does not match')
    } else {
      const body = {
        first_name,
        last_name,
        email,
        mobile,
        password,
      }

      const urlNode = `${URL}/admin/addStudent`
      const urlSpring = `${SPRING_URL}/admin/addStudent`

      axios.post(urlSpring, body).then((response) => {

        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
          toast.success('Student successfully added!!!')
          
          navigate('/AdminHome')
        }else {
          toast.error(result['error'])
        }
      }).catch(error=>{
        toast.error(error.response.data.error)
      })
    }
  }
  return (
    <div className="container">
      <h1 className="title">Add Student</h1>

      <div className="row"> 
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label className="label-control">First Name</label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Mobile No.
              </label>
              <input
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <button onClick={addStudent} className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default AddStudent;
