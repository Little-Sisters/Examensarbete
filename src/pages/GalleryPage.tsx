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
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

export default GalleryPage;
