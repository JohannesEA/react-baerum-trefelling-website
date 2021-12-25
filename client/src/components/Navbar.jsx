import {useState} from "react"
import styled from "styled-components";
import useWindowDimensions from "../responsive/Dimentions";
import { Cross as Hamburger } from 'hamburger-react';
import { Link } from "react-scroll";




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useWindowDimensions();



  return (
    <Container>
      <Logo>Bærum Trefelling</Logo>

      {width < 930 && (
                <HamBurderContainer>   <Hamburger
                    color="white"
                    onToggle={() => {
                        setIsOpen(!isOpen);
                    }}
                />
               </HamBurderContainer>
                
            )}

      <Menu isOpen={isOpen}>
        <MenuItem>Hjem</MenuItem>
        <MenuItem>Om Oss</MenuItem>
        <MenuItem>Våre Tjenester</MenuItem>
        <MenuItem>Kontakt Oss</MenuItem>
      </Menu>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  z-index: 100;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
const Logo = styled.h1`
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 930px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const MenuItem = styled.p`
  padding: 0 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #eeeeee;
  font-size: 1.2rem;
  display: inline-block;
  position: relative;

  &:hover {
    color: #FFF;

  }
`;
const HamBurderContainer = styled.div`
   display: flex;
    justify-content: space-between;
    align-items: center;
`;