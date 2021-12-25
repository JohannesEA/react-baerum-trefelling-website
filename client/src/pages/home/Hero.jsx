import styled from "styled-components"
import Link from "react-scroll";
import Button from "../../components/Button";

const Hero = () => {
    return (
        <Container id="hero" >
        <Left>
        <Title>Bærum Trefelling</Title>
            <ButtonContainer>
        
                    {" "}
                    <Button
                     text={"Våre Tjenester"}
                     bc="color-2"
                    >
                    </Button>
     
       
                    {" "}
                    <Button
                    text={"Kontakt Oss"}
                    bc="color-1"

                    >
    
                    </Button>
    
            </ButtonContainer>
        </Left>

        {/* <Right>
            <Text>Rask og effektiv trefelling</Text>
           
        </Right> */}
    </Container>
    )
}

export default Hero;

const Container = styled.div`
padding: 1em;
    display: flex;
    transition: all 0.3s ease;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    background: url("/assets/images/img1.jpg") no-repeat;
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
    font-weight: 300;
    font-family: "Montserrat", cursive;
`;

const Left = styled.div`
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(200, 200, 200, 0.05);
    backdrop-filter: blur(5px);
    padding: 1rem;
    border-radius: 1em;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 800px) {
        background-color: transparent;
        backdrop-filter: blur(3px);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 40%;
    min-width: 17em;

    @media (max-width: 370px) {
        background-color: transparent;
        backdrop-filter: blur(3px);
        min-width: 13em;

    }
`;


const Right = styled.div`
    flex: 1;
    min-height: 36vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
`;

const Text = styled.p`
`;