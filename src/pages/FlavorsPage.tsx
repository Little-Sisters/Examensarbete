import { useEffect } from 'react';

import HorizontalCarousel from '../components/HorizontalCarousel';
function FlavorsPage() {
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
