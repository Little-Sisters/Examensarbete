import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TransparentButton } from './reusable components/Button';
import lovestoryImage from '/lovestory.jpg';

function FillerComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };
  return (
    <FlexBox>
      <Layout>
        <StyledText>
          <div>
            <h2>About Love Story Cakes</h2>
            <p>
              Love Story Cakes was founded in 2024 by a group of friends who
              wanted to share their love of baking with the world. Their mission
              was to empower people to use their creativity to visualize and
              create their dream wedding cake.
            </p>
            <TransparentButton title="Read More" onPress={handleClick} />
          </div>
        </StyledText>
        <StyledImage>
          <img
            src={lovestoryImage}
            alt="A couple joyfully cutting their wedding cake together"
          />
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
  background: ${({ theme }) => theme.card};

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
  padding: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    padding: 0rem;
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
    text-align: left;
  }

  p {
    text-align: left;
    padding-bottom: 1rem;
    width: 80%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-left: 1rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    min-height: 50vh;

    p,
    h2 {
      width: 100%;
      text-align: center;
    }

    div {
      align-items: center;
      padding-left: 0rem;
    }
  }
`;

const StyledImage = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  img {
    max-width: 100%;
    height: 40vh;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    width: 100%;

    img {
      width: 100%;
    }
  }
`;

export default FillerComponent;
