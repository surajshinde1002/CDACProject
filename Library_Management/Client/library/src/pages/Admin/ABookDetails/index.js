import React from "react";
import AHeader from "../../../components/AllHeaders/AHeader";
import BookDetails from "./ABookDetails";
import styled from "styled-components";

export default function ABookDetails() {
  return (
    <Container>
      <AHeader />
      <Background>
        <img src="/images/AB.jpg" />
      </Background>
      <BookDetails /> 
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
  }
`;
