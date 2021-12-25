import styled from "styled-components";
import Box from "../../components/Box";
import { CgProfile } from "react-icons/cg"; 
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";


const Contact = () => {
  return (
    <Container id="contact">
      <Title>Kontakt oss</Title>

      <BoxContainer>
        <Box
          height="10em"
          title="Epost"
          text="post@baerumtrefelling.no"
          icon={<AiOutlineMail fontSize={50} />}
        />
        <Box
          height="10em"
          title="Skui kontakt"
          text="Atle Korsmo"
          icon={<CgProfile fontSize={50} />}
        />
        <Box
          height="10em"
          title="Telefon"
          text="+47 90 66 32 54"
          icon={<AiOutlinePhone fontSize={50} />}
        />
      </BoxContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  background-color: white;
  margin-top: 2em;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

const Title = styled.h1`
  flex: 1;
  color: black;
  font-size: 2rem;
  font-weight: bold;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 98%;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;
