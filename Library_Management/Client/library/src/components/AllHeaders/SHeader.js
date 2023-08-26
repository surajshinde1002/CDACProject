import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'
import './SHeader.css'

export default function SHeader() {

  const navigate = useNavigate()
  
  const logoutAdmin = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem('stud_id')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('loginStatus')

    // navigate to sign in component
    navigate('/')
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-2">
        <div className="container-fluid">
          <a className="navbar-brand">
            Library Management System
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse "
            id="navbarSupportedContent"
            class="d-flex justify-content-end"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink>
              <li class="nav-item">
                <span>
                  <Link
                    to="/SHome"
                    style={{
                      color: "#FFF",
                      textDecoration: "none",
                      margin: "1rem",
                      // fontSize: "20px"
                    }}
                  >
                    Home
                  </Link>
                </span>
              </li>
              </NavLink>
              <li className="nav-item dropdown " id="dropd">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"

                >
                  View
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/SAllBooks" class="dropdown-item">
                      All Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/SIssuedBooks" class="dropdown-item">
                      Your Books
                    </Link>
                  </li>
                </ul>
              </li>

              <NavLink>
                <li class="nav-item">
                  <span>
                    <Link
                      to="/SProfile"
                      style={{
                        color: "#FFF",
                        textDecoration: "none",
                        margin: "1rem",
                        // fontSize: "20px"
                      }}
                    >
                      Profile
                    </Link>
                  </span>
                </li>

                <li class="nav-item">
                  <span>
                    <Link
                      to="/SFeedback"
                      style={{
                        color: "#FFF",
                        textDecoration: "none",
                        margin: "1rem",
                        // fontSize: "20px"
                      }}
                    >
                      Feedback
                    </Link>
                  </span>
                </li>

                <li class="nav-item">
                  <span><button onClick={logoutAdmin} class="btn btn-link" style={{ color: '#FFF' ,textDecoration: 'none',justifyContent:'center',display:'contents',fontMize:"20px"}}>Logout</button></span>
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
  margin-top: 5px;
  margin-left: 4px;


`;

