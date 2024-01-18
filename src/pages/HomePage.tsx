import Hero from '../components/Hero';
import ScrollSectionComponent from '../components/Scrollcake';
import ScrollSectionComponentMobile from '../components/ScrollcakeMobile';
import useMobile from '../hooks/UseMobile';
import { useEffect } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Footer from '../components/Footer';

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
      <Hero />
      {isMobile ? <ScrollSectionComponentMobile /> : <ScrollSectionComponent />}
      <Footer />
    </>
  );
}

export default HomePage;
