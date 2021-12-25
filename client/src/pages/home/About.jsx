import styled from "styled-components"
import Button from "../../components/Button"
import useWindowDimensions from "../../responsive/Dimentions";
const About = () => {
    const { width } = useWindowDimensions();

    return (
        <Container id="about" >
        <Left>
            <Title >Om Oss</Title>
            {width > 800 && (
                <TextAndButtonContainer>
                   <Text >Beskrivelse</Text>
                        <Button
                    text={"Kontakt Oss"}
                    bc="color-2"

                    >
    
                    </Button>
    
                </TextAndButtonContainer>
            )}
        </Left>

        <Right>
            <Image
                src="assets/images/img2.jpg"
                alt="about-img"
            />
            {width < 800 && (
                <TextAndButtonContainer>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Accusamus temporibus totam a eum voluptates
                        molestias sint asperiores pariatur ex tenetur!
                    </Text>{" "}
      
                        <Button
                    text={"Kontakt Oss"}
                    bc="color-2"

                    >
    
                    </Button>
                 
                </TextAndButtonContainer>
            )}
        </Right>
    </Container>
    )
}

export default About

const Container = styled.div`
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    left: 0;
    right: 0;
    width: 100%;
    height: 80vh;
    background-color: white;
    @media (max-width: 800px) {
        flex-direction: column;
        height: auto;
    }
`;

const TextAndButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Title = styled.h1`
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
    font-size: 1.3rem;
    padding: 3rem 0;
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
    max-height: 70vh;
    max-width: 50vh;
    border-radius: 1em;
    @media (max-width: 800px) {
        max-height: 60vh;
        max-width: 50vh;
    }
    @media (max-width: 400px) {
        min-width: 15em;
        max-height: 20em;
    }
`;