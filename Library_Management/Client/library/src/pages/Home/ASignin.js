import { styled } from "styled-components";
import HNavbar from "../../components/AllHeaders/HNavbar";
import AdminSignin from "../Admin/ASignin/index";



const ASignin = () => {
    return (
      <Container>
        {/* <Header/> */}
        <HNavbar />
        <Background>
          <img src="/images/LM1.jpg" />
        </Background>
        <AdminSignin />
      </Container> 
    );
  };
  
  export default ASignin;
  
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
    opacity: ;
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;