import styled from 'styled-components';
import { TransparentButton } from './reusable components/Button';

function FillerComponent() {
  return (
    <FlexBox>
      <Layout>
        <StyledText>
          <h3>about love story cakes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            fugiat non minima hic natus blanditiis animi quam recusandae, sequi
            velit!
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
    text-align: center;
    padding-bottom: 1rem;
  }

  @media (max-width: 700px) {
    width: 100%;
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
