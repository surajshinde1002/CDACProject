import React from "react";
import SHeader from "../../../components/AllHeaders/SHeader";
import Feedback from "./Feedback";
import styled from "styled-components";

export default function SFeedback() {
  return (
    <Container>
      <SHeader />
      <Background>
        <img src="/images/LM3.png" />
      </Background>
      <Feedback />
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
