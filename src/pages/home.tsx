import styled from "styled-components";
import HeaderImage from "../assets/curtain.jpg";
import PosterList from "../components/posterList/posterList";


const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;

  display: flex;
  align-item: center
`;

function Home() {
  return (
    <main>
      <Hero>
        <HeroImage src={HeaderImage} alt="WALLYWOOD plakater" />
        
      </Hero>

      <PosterList />
   
    </main>
  );
}

export default Home;