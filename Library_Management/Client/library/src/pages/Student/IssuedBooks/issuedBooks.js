import { Link } from "react-router-dom";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { URL } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import { formatDate } from "../../../utils";
import "./issuedBooks.css";

export default function IssuedBook() {
  const { stud_id } = sessionStorage;
  console.log("student id :"+stud_id);
  // const { state } = useLocation();
  const navigate = useNavigate();
  const [issuedBooks, setIssuedBooks] = useState([]);
  const searchIssuedBooks = () => {
    const url = `${URL}/student/viewIssuedBooks/${stud_id}`;
    console.log("url is : "+url);

    axios.get(url).then((response) => {
      const result = response.data;
      console.log("result is :"+result);
      console.log(result);
      if (result["status"] === "success") {
        setIssuedBooks(result["data"]);
        console.log("result data is"+result["data"][0]);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const returnBook = (book_id) => {
    const url = `${URL}/student/returnBook/${stud_id}/${book_id}`;
    console.log("the stud_id:"+stud_id);
    console.log("the book_id:"+book_id);
    axios.delete(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        toast.success("book successfully returned!!!");
        searchIssuedBooks();
      } else {
        toast.error(result["error"]);
      }
    });
  };

  useEffect(() => {
    searchIssuedBooks();
    console.log("getting called");
  }, []);

  return (
    <div className="container" id="YBC">
      <h1 id="YBID">Your Books</h1>
      <table class="table table-hover" id="reqTable">
        <thead>
          <tr className="YBTR">
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
              <th scope="row">{issuedBook.book_id}</th>
              <td id="ybs">{issuedBook.book_name}</td>
              <td id="ybs">{issuedBook.book_category}</td>
              <td id="ybs">{formatDate(issuedBook.start_date)}</td>
              <td id="ybs">{formatDate(issuedBook.end_date)}</td>
              <td id="ybs">
                <button
                  className="btn btn-success btn-sm"
                  id="vbtn"
                  onClick={() => {
                    navigate("/pdfPage", {
                      state: { pdf: issuedBook.book_pdf },
                    });
                    console.log(issuedBook.book_pdf);
                  }}
                >
                  VIEW
                </button>
                <button
                  className="btn btn-danger mr-5 btn-sm"
                  id="rbtn"
                  onClick={() => returnBook(issuedBook.book_id)}
                >
                  RETURN
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
