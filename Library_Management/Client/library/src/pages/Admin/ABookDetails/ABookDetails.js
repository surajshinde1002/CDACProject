import ABookDetails from "./ABookDetails.css";
import { useState, useEffect } from "react";
import { SPRING_URL, URL } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";

export default function BookDetails() {
  const { id, firstName, lastName } = sessionStorage;

  const [books, setBooks] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchBooks = () => {
    const urlNode = `${URL}/admin/viewBooks`;
    const urlSpring = `${SPRING_URL}/admin/viewBooks`;
    axios.get(urlSpring).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] === "success") {
        setBooks(result["data"][0]);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const deleteBook = (book_id) => {
    console.log("book id is :"+book_id);
    const urlNode = `${URL}/admin/deleteBook/${book_id}`;
    const urlSpring = `${SPRING_URL}/admin/deleteBook/${book_id}`;
     

    axios.delete(urlSpring).then((response) => {
      const result = response.data;

      if (result["status"] == "success") {
        toast.success("book deleted");
        searchBooks();
      } else {
        toast.error(result["error"]);
      }
    }).catch(error=>{
      toast.error("Student has requested for the book or has a book issued.")
    });
  };

  useEffect(() => {
    searchBooks();
    console.log("getting called");
  }, []);

  return (
    <div className="container">
      <div className="input-group input-group-sm">
        <input
          className="form-control"
          type="text"
          placeholder="Search....."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <h1>Book Details</h1>
      <table className="table table-hover" id="reqTable">
        <thead>
          <tr>
            <th scope="col">Book Id</th>
            <th scope="col">Book Name</th>
            <th scope="col">Category</th>
            <th scope="col">Author</th>
            <th scope="col">Publisher</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books
            .filter((book) => {
              if (searchTerm == "") {
                return book;
              } else if (
                book.book_name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return book;
              }
            })
            .map((book) => (
              <tr key={book.id}>
                <th scope="row">{book.book_id}</th>
                <td>{book.book_name}</td>
                <td>{book.book_category}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.book_price}</td>
                <td>
                  <button
                    className="btn btn-outline-danger mr-2 btn-sm"
                    onClick={() => deleteBook(book.book_id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
