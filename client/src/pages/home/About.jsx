import styled from "styled-components";
import Button from "../../components/Button";
import useWindowDimensions from "../../responsive/Dimentions";
import { Link } from "react-scroll";

const About = () => {
  const { width } = useWindowDimensions();

  const listOfThings = [
    "Sett bedre tider",
    "Blitt for stort",
    "Plassmangel sykdom/ skade",
    "Står i veien for bygninger og/ eller kabler",
  ];

  return (
    <Container id="about">
      <h1 className="about__title ">Om Oss</h1>
      <div className="about__container">
        <div className="about__text-and__button__container">
          <div className="point__container ">
            <h2>
              Vi er spesialister på presisjonsfelling av trær som må felles
              fordi treet har:
            </h2>
            {listOfThings.map((x) => (
              <ul key={x}>
                <li>
                  <p>{x}</p>
                </li>
              </ul>
            ))}
          </div>
          <Link
            className="about__button"
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
          >
            <Button text={"Kontakt Oss"} bc="color-2"></Button>
          </Link>
        </div>

        <img
          className="about__img"
          src="assets/images/atle.png"
          alt="about-img"
        />
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  .about__container {
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
      flex-direction: column-reverse;
    }
  }

  .about__text-and__button__container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .about__title {
    margin: 2em auto 1em auto;
    text-align: center;
  }

  .point__container {
    margin: 0 auto 80px auto;
    width: 90%;
    max-width: 600px;
  }

  .point__container ul li {
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    list-style-type: none;
    display: flex;
    align-items: center;

    @media (max-width: 400px) {
      margin-left: 0;
    }
  }

  .point__container ul li:before {
    content: "🌲";
    width: "10px";
    margin-right: 0.5em;
  }

  .about__img {
    max-width: 30em;
    border-radius: 0.5em;

    @media (max-width: 600px) {
      max-width: 25em;
    }

    @media (max-width: 450px) {
      max-width: 20em;
    }

    @media (max-width: 350px) {
      max-width: 18em;
    }
  }
`;
