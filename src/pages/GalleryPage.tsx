import BentoGrid from '../components/BentoGrid';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';

function GalleryPage() {
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <BentoGrid />
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

export default GalleryPage;
