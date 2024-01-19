import { useEffect } from 'react';
import Footer from '../components/Footer';
import HeroVideo from '../components/HeroVideo';
import ScrollSectionComponent from '../components/Scrollcake';
import ScrollSectionComponentMobile from '../components/ScrollcakeMobile';
import useMobile from '../hooks/UseMobile';
import { useScrollToTop } from '../hooks/useScrollToTop';

function HomePage() {
  // Checks if the screen is mobile and sets the state and breakpoint
  const isMobile = useMobile(730);
  // Sets the page title
  useEffect(() => {
    document.title = 'Home';
  }, []);

  useScrollToTop();
  return (
    <>
      <HeroVideo />
      {isMobile ? <ScrollSectionComponentMobile /> : <ScrollSectionComponent />}

      <Footer />
    </>
  );
}

export default HomePage;
