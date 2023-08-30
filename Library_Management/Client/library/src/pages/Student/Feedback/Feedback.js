import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL,SPRING_URL } from "../../../config";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  
  const { stud_id } = sessionStorage

  const navigate = useNavigate()

  const Submit = () => {
    if (feedback.length == 0) {
      toast.warning("please enter feedback");
    } else {
      const body = {
        feedback, 
      };
      
      const urlNode = `${URL}/student/feedback/${stud_id}`
      const urlSpring = `${SPRING_URL}/student/feedback/${stud_id}`

      axios.post(urlSpring,body).then((response) => {
        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
          toast.success('feedback successfully sent!!!')
          navigate('/SHome')
        } else {
          toast.error(result['error'])
        }
      }).catch(error => {
        toast.error(error.response.data.error)
      })

    }
  };

  const reload = () => {
    window.location.reload(false)
  }

  // useEffect(() => {
  //   feedback()
  //   console.log('getting called')
  // },[])

  return (
    <div className="container">
      <h1 className="title"></h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                <h3> Enter feedback :</h3>
              </label>
              <textarea
                onChange={(e) => {
                  setFeedback(e.target.value);
                }}
                rows="5"
                className="form-control"
              ></textarea>
            </div>

            <div className="mb-3">
              <button
                onClick={Submit}
                className="btn btn-primary btn-lg"
                id="btn1"
                
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default Feedback;
