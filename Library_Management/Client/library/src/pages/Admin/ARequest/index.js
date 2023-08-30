import index from "./index.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import { SPRING_URL, URL } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";

export default function ARequest() {
  const [requests, setRequests] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    searchRequests();
    console.log("getting called");
  }, []);

  const searchRequests = () => {
    const urlNode = `${URL}/admin/allRequests`;
    const urlSpring = `${SPRING_URL}/admin/allRequests`;
    
      axios.get(urlSpring).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        setRequests(result['data'][0]);
      } else {
        toast.error(result["error"]);
      }
    }).catch(error=>{
      toast.error(error.response.data.error)
    });
  }


  return (
    <div className="container">
      <table class="table table-hover" id="reqTable">
        <thead>
          <tr>
            <th scope="col">Request id</th>
            <th scope="col">Book id</th>
            <th scope="col">Student id</th>
            {/* <th scope="col">Action </th> */}
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr>
            <th scope="row">{request.req_id}</th>
            <td id='AR'>{request.book_id}</td>
            <td id='AR'>{request.stud_id}</td>
            {/* <td><button class="btn btn-outline-success mr-2" onClick={() => accept(request.req_id)}>Accept</button></td> */}
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <div>
    //   <h1>hiii</h1>
    // </div>
  );
}
