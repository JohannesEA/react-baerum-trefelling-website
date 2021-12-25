import styled from "styled-components";
import Button from "../../components/Button";
import useWindowDimensions from "../../responsive/Dimentions";
import { Link } from "react-scroll";

const About = () => {
  const { width } = useWindowDimensions();

  return (
    <Container id="about">
      <Left>
        <Title>Om Oss</Title>
        {width > 800 && (
          <TextAndButtonContainer>
            <Text>
              Vi er spesialister på presisjonsfelling av trær som må felles
              fordi treet har:
            </Text>
            <PointBox>
              {" "}
              <Point>Sett bedre tider</Point>
              <Point>Blitt for stort</Point>
              <Point>Plassmangel sykdom/ skade</Point>
              <Point>Står i veien for bygninger og/ eller kabler</Point>
            </PointBox>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Button text={"Kontakt Oss"} bc="color-2"></Button>
            </Link>
          </TextAndButtonContainer>
        )}
      </Left>

      <Right>
        <Image src="assets/images/atle.png" alt="about-img" />
        {width < 800 && (
          <TextAndButtonContainer>
            <Text>
              Vi er spesialister på presisjonsfelling av trær som må felles
              fordi treet har:
            </Text>
            <PointBox>
              {" "}
              <Point>Sett bedre tider</Point>
              <Point>Blitt for stort</Point>
              <Point>Plassmangel sykdom/ skade</Point>
              <Point>Står i veien for bygninger og/ eller kabler</Point>
            </PointBox>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Button text={"Kontakt Oss"} bc="color-2"></Button>
            </Link>{" "}
          </TextAndButtonContainer>
        )}
      </Right>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  width: 100%;
  height: 80vh;
  background-color: white;
  margin-top: 2em;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 2em;
  }
`;

const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  flex: 1;
  color: black;
  font-size: 2rem;
  font-weight: 800;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Text = styled.p`
  color: black;
  font-weight: 400;
  font-size: 1.5rem;
  padding: 2px 0;
`;

const PointBox = styled.ul`
  flex-direction: column;
  text-align: left;
  margin-bottom: 4em;

  @media (max-width: 800px) {
    margin-bottom: 2em;
  }
`;
const Point = styled.li`
  list-style-type: circle;
  color: black;
  font-weight: 400;
  font-size: 1.5rem;
  padding: 2px 0;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Image = styled.img`
  max-height: 60vh;
  max-width: 50vh;
  border-radius: 0.5em;
  @media (max-width: 800px) {
    max-height: 50vh;
    max-width: 40vh;
  }
  @media (max-width: 400px) {
    min-width: 15em;
    max-height: 20em;
  }

  @media (max-width: 300px) {
    max-width: 12em;
    max-height: 28em;
  }

  @media (max-width: 250px) {
    max-width: 8em;
  }
`;
