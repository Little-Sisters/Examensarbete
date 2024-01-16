import BentoGrid from '../components/BentoGrid';
import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import PageDescription from '../components/reusable components/PageDescription';

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
