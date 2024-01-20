import herocake from '/herocake.jpg';
import styled from 'styled-components';

function Hero() {
  return (
    <>
      <HeroContainer>
        <StyledImage src={herocake} alt="cake" />
        <Overlay />
        <HeroText>Beautiful Cakes</HeroText>
        <BottomRightContainer>
          <SubText>Customize your cake</SubText>
          <Button href="/cakes">Go to Products</Button>
        </BottomRightContainer>
      </HeroContainer>
    </>
  );
}

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 90vh;
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top);
`;

const HeroText = styled.h1`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  font-size: 3rem;
  text-align: center;
`;

const BottomRightContainer = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
  text-align: right;
`;

const SubText = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
`;

export default Hero;
