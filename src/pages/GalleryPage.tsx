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
            description="Welcome to our gallery, where you'll find a showcase of both customized and bespoke cakes, accompanied by a curated selection of choices for each cake. Find your dream cake or draw inspiration to create your own!"
          />
          <BentoGrid />
        </PageContentWrapper>
      </MarginTopContainer>
      <Footer />
    </div>
  );
}

export default GalleryPage;
