import styled from "styled-components";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Container>
      <Top>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <Logo src="/assets/images/logo2.jpg" />
        </Link>{" "}
        <Text>Rask og effektiv trefelling</Text>
      </Top>

      <Bottom>
        <Text
          onClick={() => (window.location.href = "https://mojo-websites.no")}
        >
          Website created by mojo-websites.no
        </Text>
      </Bottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 20em;
  display: flex;
  background-color: #3e5916;
  color: #f2f2f2;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;
  cursor: pointer;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 10em;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  height: 3em;
  width: 100%;
  margin: auto 0 0 0;
  background-color: #f28705;
  text-align: center;
`;
