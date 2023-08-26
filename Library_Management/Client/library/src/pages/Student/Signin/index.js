import { useState } from 'react'
import { toast } from 'react-toastify'
import './index.css'
import axios from 'axios'
import { URL } from '../../../config'
import { useNavigate } from 'react-router'



const SSignin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const signinUser = () => {
    console.log("hello")
    if (email.length == 0) {
      toast.warning("please enter email");
    }else if (password.length == 0) {
      toast.warning("please enter password");
    }else{
      const body = {
        email,
        password,
      };

      const url = `${URL}/student/signin`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // console.log("hello")
        // get the server result
        const result = response.data;
        console.log(result)
        console.log(result);
        if (result.success === true) {
          toast.success("Welcome to the application",{ autoClose:1500});
          navigate('/SHome')

          // get the data sent by server
          // const { id, firstName, lastName } = result["data"];

          // persist the logged in user's information for future use
          // sessionStorage["stud_id"] = id;
          // sessionStorage["firstName"] = firstName;
          // sessionStorage["lastName"] = lastName;
          // sessionStorage["loginStatus"] = 1;

          // navigate to home component
          // navigate("/home");
        } else {
          toast.error("Invalid user name or password");
        }
      });
    }
  };


  return (
    <div className='signin'>
      <h1 className="title" id='Stitle'>Student Signin</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label className="label-control" id='lab1'>
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
              <label htmlFor="" className="label-control" id='lab1'>
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

            <div cd-grid col-12 mx-auto mt-2 >
              <button onClick={signinUser} className="btn btn-blue" id='signinbtn1'>
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

export default SSignin
