import styled from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';

function BespokeDetailsPage() {
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <FlexContainer>
          <FlexBox>
            <h3>BESPOKE</h3>
          </FlexBox>
        </FlexContainer>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;

  h1 {
    margin: 0;
    padding: 0;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    margin: 1rem;
  }
`;


export default BespokeDetailsPage;
