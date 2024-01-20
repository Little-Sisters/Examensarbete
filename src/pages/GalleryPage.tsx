import BentoGrid from '../components/BentoGrid';
import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import PageDescription from '../components/reusable components/PageDescription';
import { useEffect } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Footer from '../components/Footer';

function GalleryPage() {
  // Sets the page title
  useEffect(() => {
    document.title = 'Gallery';
  }, []);

  useScrollToTop();
  return (
    <div>
      <MarginTopContainer>
        <PageContentWrapper>
          <PageDescription
            title="Gallery"
            description="Our cakes are more than just cakes, they are pices of art that tell a story. Hover over an image to see the selections of each cake. Become inspired by our collection."
          />
          <BentoGrid />
        </PageContentWrapper>
      </MarginTopContainer>
      <Footer />
    </div>
  );
}

export default GalleryPage;
