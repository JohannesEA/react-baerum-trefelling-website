import styled from "styled-components";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <Container>
      <Navbar />
       <Hero />
         <About/>

      {/* <Services />
      <Contact />
      <Footer />  */}
    </Container>
  );
};

export default Home;

const Container = styled.div`
width: 100%;

`;
