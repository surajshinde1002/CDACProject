import { useState } from "react";
import "./edit.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { SPRING_URL, URL } from "../../../config";

const UpdateInfo = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { stud_id } = sessionStorage;

  const navigate = useNavigate();

  const save = () => {
    if (first_name.length === 0) {
      toast.warning("please enter first name");
    } else if (last_name.length === 0) {
      toast.warning("please enter last name");
    } else if (email.length === 0) {
      toast.warning("please enter email");
    } else if (mobile.length === 0) {
      toast.warning("please enter mobile");
    } else if (password.length === 0) {
      toast.warning("please enter password");
    } else if (confirmPassword.length === 0) {
      toast.warning("please enter correct password");
    } else {
      const body = {
        first_name,
        last_name,
        email,
        mobile,
        password,
      };

      // url to make signin api call
      const urlNode = `${URL}/student/update/${stud_id}`;
      const urlSpring = `${SPRING_URL}/student/update/${stud_id}`;

      axios.put(urlSpring, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] === "success") {
          toast.success("Profile successfully updated!!!");
          navigate("/SProfile");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div className="container">
      <h1 className="title">Update Information</h1>
      <div className="edit">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-2">
              <label htmlFor="" className="label-control" id="editLab">
                First Name
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="label-control" id="editLab">
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

            <div className="mb-2">
              <label htmlFor="" className="label-control" id="editLab">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="label-control" id="editLab">
                Mobile
              </label>
              <input
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="label-control" id="editLab">
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

            <div className="mb-2">
              <label htmlFor="" className="label-control" id="editLab">
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

            <div className="mb-2">
              <button onClick={save} className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      </div>
      
    </div>
  );
};

export default UpdateInfo;
