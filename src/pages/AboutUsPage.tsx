import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import ScrollSectionComponent from '../components/Scrollcake';
import ScrollSectionComponentMobile from '../components/ScrollcakeMobile';
import useMobile from '../hooks/UseMobile';

function AboutUsPage() {
  const isMobile = useMobile(730);
  return (
    <PageContentWrapper>
      <MarginTopContainer>
        {isMobile ? (
          <ScrollSectionComponentMobile />
        ) : (
          <ScrollSectionComponent />
        )}
      </MarginTopContainer>
    </PageContentWrapper>
  );
}

export default AboutUsPage;
