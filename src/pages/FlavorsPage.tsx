import { useEffect } from 'react';

import HorizontalCarousel from '../components/HorizontalCarousel';
function FlavorsPage() {
  // Sets the page title
  useEffect(() => {
    document.title = 'Flavors';
  }, []);
  return (
    <>
      <HorizontalCarousel></HorizontalCarousel>
    </>
  );
}

export default FlavorsPage;
