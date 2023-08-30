import AStudentDetails from "./AStudentDetails.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { SPRING_URL, URL } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";

export default function StudentDetails() {
  const [students, setStudents] = useState([]);

  const searchStudents = () => {
    const urlNode = `${URL}/admin/allStudents`;
    const urlSpring = `${SPRING_URL}/admin/allStudents`;
    
    axios.get(urlSpring).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        setStudents(result["data"][0]);
      } else {
        toast.error(result["error"]);
      }

    }).catch(error=>{
      toast.error(error.response.data.error)
    });
  };

  const deleteStudent = (stud_id) => {
    console.log("id is :"+stud_id);
    const urlNode = `${URL}/admin/deleteStudent/${stud_id}`
    const urlSpring = `${SPRING_URL}/admin/deleteStudent/${stud_id}`
  
    axios.delete(urlSpring).then((response) => {
      const result = response.data
      console.log(result)
        if (result['status'] == 'success') {
          toast.success(`student having id ${stud_id} deleted`)
          searchStudents()
        } else {
          toast.error(result['error'])
        }
    })
  }

  useEffect(() => {
    searchStudents();
    console.log("getting called");
  }, []);
  return (
    <div className="container">
      <h1>STUDENTS DETAILS</h1>
      <table class="table table-hover" id="reqTable">
        <thead>
          <tr>
            <th scope="col">Student id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <th scope="row">{student.id}</th>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.mobile}</td>
              <td>{student.password}</td>
              <td><button class="btn btn-outline-danger mr-2 btn-sm" onClick={() => deleteStudent(student.id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
