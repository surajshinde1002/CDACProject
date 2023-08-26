import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";


const HNavbar = () => {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark py-2">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">Library Management System</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" class="d-flex justify-content-end fs-4">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavMenu>
                <li>
                  <span><Link to="/Stud-Signin" style={{ color: '#FFF' ,textDecoration: 'none' }}>Student</Link></span>
                </li>
                <li>
                  <span><Link to="/Admin-Signin" style={{ color: '#FFF',textDecoration: 'none' }}>Admin</Link></span>
                </li>
              </NavMenu>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default HNavbar


const NavMenu = styled.span`
  display:flex;

  li{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;


    span {
        font-size: 20px;
        color: white;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: red;
            position: absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transfer-origin: left center;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform: scaleX(0);
        }
    }

    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
}`
