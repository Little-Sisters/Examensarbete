import BentoGrid from '../components/BentoGrid';
import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import PageDescription from '../components/reusable components/PageDescription';

function GalleryPage() {
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <PageDescription
          title="Gallery"
          description="Welcome to our gallery, where you'll find a showcase of both customized and bespoke cakes, accompanied by a curated selection of choices for each cake. Find your dream cake or draw inspiration to create your own!"
        />
        <BentoGrid />
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

export default GalleryPage;
