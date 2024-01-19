import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import FillerComponent from '../components/FillerComponent';
import SocialMedia from '../components/SocialMedia';
import styled from 'styled-components';

function AboutUsPage() {
  return (
    <PageContentWrapper>
      <MarginTopContainer>
        <Wrapper>
          <FillerComponent />
          <SocialMedia />
        </Wrapper>
      </MarginTopContainer>
    </PageContentWrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 700px) {
    gap: 1rem;
  }
`;

export default AboutUsPage;
