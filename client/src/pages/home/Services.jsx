import styled from "styled-components";
import Box from "../../components/Box";
import { SiLinktree } from "react-icons/si";
import { MdAttachMoney } from "react-icons/md";
import { GiCircleForest } from "react-icons/gi";

const Services = () => {
  return (
    <Container id="services">
      <Title>Våre Tjenester</Title>
      <BoxContainer>
        <Box
          height="30em"
          title="Verdier"
          text="Trefellingen utføres på en effektiv og sikker måte."
          point1=""
          point2=""
          point3=""
          pont4=""
          icon={<SiLinktree fontSize={50} />}
        />
        <Box
          height="30em"
          title="Område"
          text="Vi tar oppdrag hovedsaklig i Asker og Bærum. Vi er ansvarsforsikret inntil 10.000.000 Kr."
          point1=""
          point2=""
          point3=""
          pont4=""
          icon={<GiCircleForest fontSize={50} />}
        />
        <Box
          height="30em"
          title="Pris"
          text="Prisen bestemmes av: "
          list="true"
          point1="Type tre, størrelse og antall."
          point2="Tilgjengelighet (hvor står treet, ved vei, i skråning etc)."
          point3="Eventuell bortkjøring av kvist og tømmer."
          point4="Kapping av tømmer osv."
          icon={<MdAttachMoney fontSize={50} />}
        />
      </BoxContainer>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  @media (max-width: 800px) {
    margin-bottom: 2em;
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
