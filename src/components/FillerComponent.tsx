import styled from 'styled-components';
import { TransparentButton } from './reusable components/Button';

function FillerComponent() {
  return (
    <FlexBox>
      <Layout>
        <StyledText>
          <h3>About Love Story Cakes</h3>
          <p>
            Love Story Cakes was founded in 2024 by a group of friends who wanted to share their love of baking with the world.
            Their mission was to empower people to use their creativity to visualize and create their dream wedding cake.
          </p>
          <TransparentButton
          title='read more'
          />
        </StyledText>
        <StyledImage>
          <img src="lovestory.jpg" alt="" />
        </StyledImage>
      </Layout>
    </FlexBox>
  );
}

// Styled Components
const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledText = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.5rem;
    margin: 0;
    padding: 1rem;
  }

  p {
    text-align: left;
    padding-bottom: 1rem;
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 100%;

    p {
        width: 100%;
    }
  }
`;

const StyledImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;


export default FillerComponent;
