import { useEffect } from 'react';
import styled from 'styled-components';
import FillerComponent from '../components/FillerComponent';
import Footer from '../components/Footer';
import HeroVideo from '../components/HeroVideo';
import ScrollSectionComponent from '../components/Scrollcake';
import ScrollSectionComponentMobile from '../components/ScrollcakeMobile';
import SocialMedia from '../components/SocialMedia';
import useMobile from '../hooks/UseMobile';
import { useScrollToTop } from '../hooks/useScrollToTop';

function HomePage() {
  // Checks if the screen is mobile and sets the state and breakpoint
  const isMobile = useMobile(730);
  // Sets the page title
  useEffect(() => {
    document.title = 'Love Story Cakes';
  }, []);

  useScrollToTop();
  return (
    <>
      <HeroVideo />
      {isMobile ? <ScrollSectionComponentMobile /> : <ScrollSectionComponent />}
      <Wrapper>
        <FillerComponent />
        <SocialMedia />
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 700px) {
    gap: 0rem;
  }
`;

export default HomePage;
