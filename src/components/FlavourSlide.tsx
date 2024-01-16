import styled from 'styled-components';
import Chocolate from './Chocolate';

const FlavourSlide = () => {
  return (
    <Container>
      <FlexBox>
        <TextBox>
          <TextFlex>
            <FlavourTitle>Chocolate</FlavourTitle>
            <p>
              I accept the terms and conditions We ship to multiple countries
              and areas ansd stuff. Design your own dream cake and preview it
              immediatly areas ansd stuff. Design your own dream cake and
              preview it immediatly I accept the terms and conditions We ship to
              multiple countries and areas ansd stuff. Design your own dream
              cake and preview it immediatly areas ansd stuff.
            </p>
            <p>Smaller text with some additional information.</p>
          </TextFlex>
        </TextBox>
        <ModelBox>
          <Chocolate></Chocolate>
        </ModelBox>
      </FlexBox>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background: pink;
`;

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto; /* Center the content */
  max-width: 1400px; /* Set a maximum width for desktop */
  padding: 0 0.5rem; /* Side margins for small screens */
  display: flex;
  position: relative;
  gap: 1rem;
  @media (max-width: 830px) {
    flex-direction: column-reverse;
  }
`;

const Box = styled.div`
  background: #8f6a5c;
  position: relative;
  width: 50%;
  height: calc(100% - 10rem);
  margin-top: 10rem;
  @media (max-width: 830px) {
    width: 100%;
    height: 50%;
    height: 100%;
    margin-top: 0rem;
  }
`;
const TextBox = styled(Box)`
  padding: 1rem;

  @media (max-width: 830px) {
    height: 40%;
  }
`;

const ModelBox = styled(Box)`
  @media (max-width: 830px) {
    height: 60%;
    margin-top: 8rem;
  }
`;

const TextFlex = styled.div`
 height: 100%;
 width:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const FlavourTitle = styled.h2`
  font-size: 6rem;
  margin: 0rem 0rem;
  transform: rotate(-7deg);
  @media (max-width: 1100px) {
    font-size: 5rem;
  }
  @media (max-width: 830px) {
    font-size: 4rem;
  }
  @media (max-width: 830px) {
    font-size: 3rem;
  }
`;

export default FlavourSlide;
