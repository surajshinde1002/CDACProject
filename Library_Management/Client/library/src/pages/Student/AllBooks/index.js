import React from "react";
import SHeader from "../../../components/AllHeaders/SHeader";
import AllBooks from "./AllBooks";
import styled from "styled-components";

const SALLBooks = () => {
  return (
    <Container>
      <SHeader />
      <Background>
        <img src="/images/LM3.png" />
      </Background>
      <AllBooks />
    </Container>
  );
};

export default SALLBooks;

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity: ;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
    }
`