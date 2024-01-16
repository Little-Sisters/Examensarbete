import React from 'react';
import styled from 'styled-components';
import Chocolate from './Chocolate';
import { FilledButton, TransparentButton } from './reusable components/Button';

type FlavourSlideProps = {
  flavourTitle: string;
  subtitle: string;
  spanDescription: string;
  filledButtonTitle: string;
  transparentButtonTitle: string;
  model: string;
  angle?: string;
  backgroundColor: string;
};

const FlavourSlide: React.FC<FlavourSlideProps> = ({
  flavourTitle,
  subtitle,
  spanDescription,
  filledButtonTitle,
  transparentButtonTitle,
  model,
  angle,
  backgroundColor,
}) => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  if (!angle) {
    angle = '100deg 90deg 10m';
  }

  return (
    <Container lightBackgroundColor={backgroundColor}>
      <FlexBox>
        <TextBox>
          <TextFlex>
            <FlavourTitle>{flavourTitle}</FlavourTitle>
            <PaddedBox>
              <p>{subtitle}</p>
              <span>{spanDescription}</span>
              <ButtonBox>
                <FilledButton
                  title={filledButtonTitle}
                  onPress={handleClick}
                ></FilledButton>
                <TransparentButton
                  title={transparentButtonTitle}
                  onPress={handleClick}
                ></TransparentButton>
              </ButtonBox>
            </PaddedBox>
          </TextFlex>
        </TextBox>
        <ModelBox>
          <Chocolate model={model} angle={angle}></Chocolate>
        </ModelBox>
      </FlexBox>
    </Container>
  );
};

const Container = styled.div<{ lightBackgroundColor: string }>`
  height: 100%;
  width: 100vw;
  background: ${(props) => props.lightBackgroundColor};
`;

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 0.5rem;
  display: flex;
  position: relative;
  gap: 1rem;
  @media (max-width: 830px) {
    flex-direction: column-reverse;
  }
`;

const Box = styled.div`
  position: relative;
  width: 50%;
  height: calc(100% - 9rem);
  margin-top: 9rem;
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
    height: 45%;
  }
`;

const ModelBox = styled(Box)`
  @media (max-width: 830px) {
    height: 55%;
    margin-top: 9rem;
  }
`;

const TextFlex = styled.div`
  height: 100%;
  width: 100%;
  max-width: 37rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  button {
    @media (max-width: 830px) {
      width: 100%;
    }
  }
  @media (max-width: 830px) {
    text-align: center;
    max-width: 100%;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const PaddedBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  span {
    margin: 0;
    @media screen and (max-height: 820px) {
      font-size: 14px;
    }
  }
  p {
    margin: 0;
    font-weight: 600;
    font-size: 1.4rem;
    @media screen and (max-width: 820px) {
      font-size: 1rem;
    }
    @media screen and (max-height: 820px) {
      font-size: 14px;
    }
  }
  @media (max-width: 830px) {
    gap: 1rem;
    padding: 0rem;
  }
  @media (max-width: 400px) {
    gap: 0.5rem;
  }
`;

const FlavourTitle = styled.h2`
  font-size: 8rem;
  font-family: 'Ephesis', cursive;
  margin: 0rem 0rem;
  transform: rotate(-7deg);
  @media (max-width: 1100px) {
    font-size: 7rem;
  }
  @media (max-width: 830px) {
    font-size: 6rem;
  }
  @media (max-width: 630px) {
    font-size: 4.5rem;
  }
  @media (max-width: 430px) {
    font-size: 3.5rem;
    transform: rotate(-3deg);
  }
`;

export default FlavourSlide;
