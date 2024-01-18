import { useEffect } from 'react';
import HorizontalCarousel from '../components/HorizontalCarousel';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Footer from '../components/Footer';

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
