import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import { SPRING_URL, URL } from '../../../config'
import { useNavigate } from 'react-router'
import './index.css'



function AIssueBook() {
  const [requestId, setRequestId] = useState("");
  const [stud_id, setStudentId] = useState("");
  const [book_id, setBookId] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");

  const navigate = useNavigate()

  const issueBook = () =>{
    if (stud_id.length === 0) {
      toast.warning('Please enter student id')
    }else if (book_id.length === 0) {
      toast.warning('Please enter book id')
    } else if (start_date.length === 0) {
      toast.warning('Please enter start date')
    }else if (end_date.length === 0) {
      toast.warning('Please enter end date')
    } else {
      const body = {
        stud_id,
        book_id,
        start_date,
        end_date,
      } 

     
      // const url = `${URL}/issueBook`




      // axios.put(url, body).then((response) => {

      //   const result = response.data
      //   console.log(result)
      //   if (result['status'] === 'success') {
      //     toast.success(' book issued to Student!!!')
          
      //     navigate('/AdminHome')
      //   }else {
      //     toast.error(result['error'])
      //   }
      // })

      const urlNodeIssue = `${URL}/admin/issueBook`
      const urlSpringIssue = `${SPRING_URL}/admin/issueBook`

      const urlNodeAccept = `${URL}/admin/acceptRequest/${requestId}`
      const urlSpringAccept = `${SPRING_URL}/admin/acceptRequest/${requestId}`

      const requestOne = axios.post(urlSpringIssue,body);
      const requestTwo = axios.delete(urlSpringAccept);

      axios.all([requestOne, requestTwo])
      .then(
        axios.spread((...results) => {
          if (results[0].status === 200) {
            toast.success('book issued to Student!!!')
            navigate("/AdminIssuedBooks")
          }

          if (results[1].status === 200) {
            console.log('request accepted!!!!!!!')
           
          }
        })
      ).catch(error=>{
        toast.error(error.response.data.error)
      });
    }
  }


  return (
    <div className="AdminIssueBook">
      <h1 className="title">Issue Book</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">

          <div className="mb-3">
              <label className="label-control">Request ID</label>
              <input
                onChange={(e) => {
                  setRequestId(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="label-control">Student ID</label>
              <input
                onChange={(e) => {
                  setStudentId(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Book ID
              </label>
              <input
                onChange={(e) => {
                  setBookId(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Start Date
              </label>
              <input
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                type="date"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                End Date
              </label>
              <input
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                type="date"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <button onClick={issueBook} className="btn btn-primary">Issue</button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default AIssueBook;
