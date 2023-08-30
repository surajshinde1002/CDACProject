import React from "react";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { URL, SPRING_URL } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import './AllBooks.css'


const AllBooks = () => {
  // const { id, firstName, lastName } = sessionStorage;
 
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);


  const searchBooks = () => {
    const urlSpring = `${SPRING_URL}/student/viewBooks`;
    const urlNode = `${URL}/student/viewBooks`;

    axios.get(urlSpring).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        setBooks(result["data"][0]);
      } else {
        toast.error(result["error"]);
      }
    }).catch(error => {
      toast.error(error.response.data.error)
    });
  };

  useEffect(() => {
    searchBooks();
    // searchBooksSpring();
    console.log("getting called");
  }, []);
  return (
    <div className="container">
      <div>
        <h1 className="title">All Books</h1>
      </div>

      {books.map((book) => (
        <div class="d-flex align-items-center">
          <div className="imgDiv">
            <div class="flex-shrink-0">
              <img src={'http://localhost:8080/student/image/' + book.book_image} alt="..."  className="bookImg"/>
            </div>
          </div>

          <div class="flex-grow-1 ms-3 " className="col">
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Book ID:
                <span class="badge bg-primary rounded-pill">
                  {book.book_id}
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Book Name:
                <span class="badge bg-primary ">{book.book_name}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Book Category:
                <span class="badge bg-primary rounded-pill">
                  {book.book_category}
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Book Author:
                <span class="badge bg-primary rounded-pill">{book.author}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Book Publisher:  
                <span class="badge bg-primary rounded-pill">
                  {book.publisher}
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Book Price:
                <span class="badge bg-primary rounded-pill">
                  {book.book_price}
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <p className="desc">{book.description}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBooks;
