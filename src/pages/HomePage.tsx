import Hero from '../components/Hero';
import ScrollSectionComponent from '../components/Scrollcake';
import ScrollSectionComponentMobile from '../components/ScrollcakeMobile';
import useMobile from '../hooks/UseMobile';
import { useEffect } from 'react';

function HomePage() {
  const isMobile = useMobile(730);
  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <>
      <Hero />
      {isMobile ? <ScrollSectionComponentMobile /> : <ScrollSectionComponent />}
    </>
  );
}

export default HomePage;
