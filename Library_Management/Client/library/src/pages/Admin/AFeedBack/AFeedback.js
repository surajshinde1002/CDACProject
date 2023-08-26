import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState, useEffect, React } from "react";
import { URL } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import AFeedback from "./AFeedback.css";

export default function Feedback() {
  const [feedbacks, setfeedbacks] = useState([]);

  const searchFeedbacks = () => {
    const url = `${URL}/admin/viewFeedbacks`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        setfeedbacks(result["data"][0]);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  useEffect(() => {
    searchFeedbacks();
    console.log("getting called");
  }, []);
  return (
    <div className="container">
      <h1>Students Feedbacks</h1>
      <table className="table table-hover vertical-align: middle;" id="reqTable">
        <thead>
          <tr>
            <th scope="col">Student Id</th>
            <th scope="col">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr>
              <th scope="row">{feedback.stud_id}</th>
              <td>{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
