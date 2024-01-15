import Hero from '../components/Hero';
import ScrollSectionComponent from '../components/Scrollcake';
import ScrollSectionComponentMobile from '../components/ScrollcakeMobile';
import useMobile from '../hooks/UseMobile';

function HomePage() {
  const isMobile = useMobile(730);
  return (
    <>
      <Hero />
      {isMobile ? <ScrollSectionComponentMobile /> : <ScrollSectionComponent />}
    </>
  );
}

export default HomePage;
