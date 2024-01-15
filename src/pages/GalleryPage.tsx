import BentoGrid from '../components/BentoGrid';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import PageDescription from '../components/PageDescription';

function GalleryPage() {
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <PageDescription
          title="Gallery Page"
          description="This is the gallery page."
        />
        <BentoGrid />
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

export default GalleryPage;
