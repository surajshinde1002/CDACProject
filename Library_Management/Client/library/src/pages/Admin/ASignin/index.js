import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import './index.css'
import axios from 'axios'
import { useState } from 'react'
import { SPRING_URL, URL } from '../../../config'


const AdminSignin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const navigate = useNavigate();
  
    const signinAdmin = () => {
      console.log("email is"+email);
      console.log("pass is"+password);
      if (email.length === 0) {
        toast.warning("please enter email");
        console.log("toast one called");
      } else if (password.length === 0) {
        toast.warning("please enter password");
        console.log("toast one else called");
      } else {
        const body = {
          email,
          password,
        };
  
        // url to make signin api call
        const urlNode = `${URL}/admin/asignin`;
        const urlSpring = `${SPRING_URL}/admin/asignin`;
  
        // make api call using axios
        axios.post(urlSpring, body).then((response) => {
          // get the server result
          const result = response.data;
          console.log("result is "+result['status']);
          if (result["status"] === "success") {
            toast.success("Welcome to the application");
            console.log("toast two called");
  
            // get the data sent by server
            const { id, first_name, last_name } = result["data"];
  
            // persist the logged in user's information for future use
            sessionStorage["id"] = id;
            sessionStorage["firstName"] = first_name;
            sessionStorage["lastName"] = last_name;
            sessionStorage["loginStatus"] = 1;
  
            // navigate to home component
            navigate("/AdminHome");
          } else {
            toast.error("Invalid admin name or password");
          }
        }).catch(error=>{
          toast.error(error.response.data.error)
        });
      }
    };
  
  
    return (
      <div className='signin'>
        <h1 className="title">Admin Signin</h1>
  
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="mb-3">
                <label className="label-control" id='adminLabel'>
                  Email address
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="" className="label-control" id='adminLabel'>
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type="password"
                  className="form-control"
                />
              </div>
  
              <div cd-grid col-12 mx-auto mt-2>
                <button onClick={signinAdmin} className="btn btn-blue" id='Abtn'>
                  Signin
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    )
  }
  
  export default AdminSignin
  