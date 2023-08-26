import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import { URL } from '../../../config'
import axios from 'axios'
import { formatDate } from "../../../utils";
import { toast } from 'react-toastify'



export default function AIssuedBook() {

  const navigate = useNavigate()

  const [issuedBooks, setIssuedBooks] = useState([])

  const searchIssuedBooks = () => {
    const url = `${URL}/admin/allIssuedBooks`

    axios.get(url).then((response) => { 
      const result = response.data
      if (result['status'] === 'success') {
        setIssuedBooks(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }


  const retrieveBook = (stud_id,book_id) => {

    const url = `${URL}/admin/retrieve/${stud_id}/${book_id}`

    axios.delete(url).then((response) => {
      const result = response.data
        if (result['status'] == 'success') {
          toast.success('book successfully retrieve!!!')
          searchIssuedBooks()
        } else {
          toast.error(result['error'])
        }
    })
  }

  useEffect(() => {
    searchIssuedBooks()
    console.log('getting called')
  },[])

  return (
    <div className="container">
      <table class="table table-hover" id="reqTable">
        <thead>
          <tr>
            <th scope="col">Student Id</th>
            <th scope="col">Book Id</th>
            <th scope="col">Book Name</th>
            <th scope="col">Book Category</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {issuedBooks.map((issuedBook) => (
            <tr>
            <th scope="row">{issuedBook.stud_id}</th>
            <td>{issuedBook.book_id}</td>
            <td>{issuedBook.book_name}</td>
            <td>{issuedBook.book_category}</td>
            <td>{formatDate(issuedBook.start_date)}</td>
            <td>{formatDate(issuedBook.end_date)}</td>
            <td><button class="btn btn-outline-danger mr-2 btn-sm" onClick={() => retrieveBook(issuedBook.stud_id,issuedBook.book_id)}>RETRIEVE</button></td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}
