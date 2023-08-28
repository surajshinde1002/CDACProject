import React from "react";
import { styled } from "styled-components";

function Header(){
    <Nav>
    <Title><span>Library Management System</span></Title>
    <NavMenu>
        <a>
            <span>Student</span>
        </a>
        <a>
            <span>Admin</span>
        </a>
    </NavMenu>
</Nav>
}

export default Header;


const Title = styled.span`
    color: white;
    display: flex;
    flex:1;
    align-items: center;
    font-size: 20px;

`

const Nav = styled.nav`
    height: 70px;
    background: black;
    display: flex;
    justify-content: right;
    align-items:center;
    padding: 0 36px;
    overflow-x: hidden;

`


const NavMenu = styled.div`
    display: flex;

    margin-left: 25px;
    align-items: center;
    

    a{
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
    }


`
