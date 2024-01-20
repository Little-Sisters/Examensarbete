import { useEffect } from 'react';
import Footer from '../components/Footer';
import HorizontalCarousel from '../components/flavour-page/HorizontalCarousel';
import { useScrollToTop } from '../hooks/useScrollToTop';

function FlavorsPage() {
  // Sets the page title
  useEffect(() => {
    document.title = 'Our Flavors';
  }, []);

  useScrollToTop();
  return (
    <>
      <HorizontalCarousel></HorizontalCarousel>
      <Footer />
    </>
  );
}

export default FlavorsPage;
