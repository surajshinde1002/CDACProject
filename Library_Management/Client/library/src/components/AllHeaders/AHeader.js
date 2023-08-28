import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function AHeader() {
  const navigate = useNavigate();

  const logoutAdmin = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("loginStatus");

    // navigate to sign in component
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <a className="navbar-brand">Library Management System</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
             className="d-flex justify-content-end"
            id="navbarSupportedContent"
           
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/AdminBookDetails" className="dropdown-item">
                      All Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/AdminIssuedBooks" className="dropdown-item">
                      Issued Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/AdminStudentDetails" className="dropdown-item">
                      Students Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/AdminFeedbacks" className="dropdown-item">
                      Feedbacks
                    </Link>
                  </li>
                  <li>
                    <Link to="/AdminHome" className="dropdown-item">
                      Requests
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Add
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/AddBook" className="dropdown-item">
                      Add Book
                    </Link>
                  </li>
                  <li>
                    <Link to="/AddStudent" className="dropdown-item">
                      Add Student
                    </Link>
                  </li>
                </ul>
              </li>

              <NavLink>
                <li className="nav-item">
                  <span>
                    <Link
                      to="/AdminIssueBook"
                      style={{
                        color: "#FFF",
                        textDecoration: "none",
                        marginRight: "1rem",
                      }}
                    >
                      IssueBook
                    </Link>
                  </span>
                </li>

                <li className="nav-item">
                  <span>
                    <button
                      onClick={logoutAdmin}
                      class="btn btn-link"
                      style={{
                        color: "#FFF",
                        textDecoration: "none",
                        justifyContent: "center",
                        display: "contents",
                      }}
                    >
                      Logout
                    </button>
                  </span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const NavLink = styled.li`
  display: flex;
  margin-top: 8px;
  margin-left: 4px;
  margin-right: 6px;


`;


