import styled from 'styled-components';
import { TransparentButton } from './reusable components/Button';
import lovestoryImage from '/lovestory.jpg';

function FillerComponent() {
  return (
    <FlexBox>
      <Layout>
        <StyledText>
          <h2>About Love Story Cakes</h2>
          <p>
            Love Story Cakes was founded in 2024 by a group of friends who
            wanted to share their love of baking with the world. Their mission
            was to empower people to use their creativity to visualize and
            create their dream wedding cake.
          </p>
          <TransparentButton title="read more" />
        </StyledText>
        <StyledImage>
          <img src={lovestoryImage} alt="" />
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

  h2 {
    font-size: 1.5rem;
    margin: 0;
    padding: 1rem;
    text-align: center;
  }

  p {
    text-align: left;
    padding-bottom: 1rem;
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 100%;
    min-height: 50vh;

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
    height: 40vh;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default FillerComponent;
