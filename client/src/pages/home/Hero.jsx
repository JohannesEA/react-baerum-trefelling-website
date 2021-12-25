import styled from "styled-components";
import { Link } from "react-scroll";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <Container id="hero">
      <Left>
        <Title>Bærum Trefelling</Title>
        <Text>Rask og effektiv trefelling</Text>
        <Text>Vi kommer på gratis befaring</Text>

        <ButtonContainer>

        <Link to="services" spy={true} smooth={true} offset={0} duration={500} >
        <Button text={"Våre Tjenester"} bc="color-2"></Button>
        </Link>

        <Link to="contact" spy={true} smooth={true} offset={0} duration={500} >
        <Button text={"Kontakt Oss"} bc="color-1"></Button>
        </Link>
        </ButtonContainer>
      </Left>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  transition: all 0.3s ease;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background: url("/assets/images/img2.jpg") no-repeat;
  background-size: cover;
  background-position: 100%;
  left: 0;
  right: 0;
  width: 100%;
  height: 80vh;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 70vh;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 2.8em;
  font-weight: bold;
  margin: 0;
`;

const Text = styled.p`
  color: black;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0.2em;

`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align:center;
  width: 90%;
  margin: auto 0 0 0;
  background-color: white;
  border-radius: .5em .5em 0 0;
  box-shadow: 0px 15px 10px 0px #F2F2F2;
padding-bottom: 1em;

@media (max-width: 800px) {
  width: 95%;

  }

`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  text-align: center;
  width: 30%;
  min-width: 16em;
  bottom: 0;
  top: auto;
  margin-top: .5em;
  
`;


