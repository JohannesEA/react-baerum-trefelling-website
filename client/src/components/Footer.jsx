import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Top>
            <Logo>Bærum Trefelling</Logo>
            <Text>Rask og effektiv trefelling</Text>

 
      </Top>

      <Bottom>
      <Text>Website created by mojo-websites.no</Text>
      </Bottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  background-color: #202617;
  color: #f2f2f2;
  flex-direction: column;
  align-items: center;
    justify-content: space-between;
    margin-top: 2em;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;




const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 800;

`;

const Text = styled.p`
  font-size: 1.5rem;

`;

const Bottom = styled.div`
  bottom: 0;
  width: 100%;
  margin: auto 0 0 0;
  background-color: #354024;
  text-align: center;

`;
