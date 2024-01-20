import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useContext } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { TransparentButton } from './reusable components/Button';
import cake1Pink from '/scrollcake/base1-pink.png';
import cake1White from '/scrollcake/base1-white.png';
import cake2Pink from '/scrollcake/base2-pink.png';
import cake2White from '/scrollcake/base2-white.png';
import cake3Pink from '/scrollcake/base3-pink.png';
import cake3White from '/scrollcake/base3-white.png';
import decorations from '/scrollcake/flowers.png';
import topper from '/scrollcake/topper.png';

// This scroll animation renders on big devices.
//The values of "translate y controls where the animation will end up and how quickly compared to the scroll position."

const ScrollSectionComponent = () => {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.mode;

  // Define the y-transformations and opacity for each piece based on scroll progress
  const translateYPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 295]);
  const opacityPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  const translateYPiece2 = useTransform(
    scrollYProgress,
    [0.08, 0.16],
    [0, 194],
  );
  const opacityPiece2 = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);

  const translateYPiece3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 95]);
  const opacityPiece3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);

  const translateYDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 55],
  );
  const OpacityDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 1],
  );

  const translateTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 63]);
  const OpacityTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 1]);

  const translateYText1 = useTransform(scrollYProgress, [0, 0.32], [0, 50]);
  const translateOpacityText1 = useTransform(
    scrollYProgress,
    [0, 0.32],
    [0, 1],
  );

  const translateYText2 = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [50, 150],
  );
  const translateOpacityText2 = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 1],
  );
  const translateYText3 = useTransform(
    scrollYProgress,
    [0.69, 0.8],
    [150, 250],
  );
  const translateOpacityText3 = useTransform(
    scrollYProgress,
    [0.69, 0.8],

    [0, 1],
  );
  const translateYButton = useTransform(
    scrollYProgress,
    [0.69, 0.8],
    [150, 330],
  );
  const translateOpacityButton = useTransform(
    scrollYProgress,
    [0.69, 0.8],

    [0, 1],
  );

  const navigate = useNavigate();
  const handleScrollCake = () => {
    navigate('/cake/1');
  };

  return (
    <ScrollSection ref={targetRef}>
      <MyBox>
        <FlexBox>
          <Title>
            <h2>Create your dream wedding cake</h2>
            <p>
              In our specialized customized cake service, you can build your
              dream cake and see a 3D visualization of your cake in real time!
            </p>
          </Title>
          <Box>
            <Piece
              src={theme === 'dark' ? cake1White : cake1Pink}
              style={{ y: translateYPiece1, opacity: opacityPiece1 }}
            ></Piece>
            <Middle
              src={theme === 'dark' ? cake2White : cake2Pink}
              style={{ y: translateYPiece2, opacity: opacityPiece2 }}
            ></Middle>
            <Top
              src={theme === 'dark' ? cake3White : cake3Pink}
              style={{ y: translateYPiece3, opacity: opacityPiece3 }}
            ></Top>
            <Decorations
              src={decorations}
              style={{ y: translateYDecorations, opacity: OpacityDecorations }}
            ></Decorations>
            <Topper
              src={topper}
              style={{ y: translateTopper, opacity: OpacityTopper }}
            ></Topper>
          </Box>
          <Box>
            <TextBox
              style={{ y: translateYText1, opacity: translateOpacityText1 }}
            >
              <IoIosCheckmarkCircleOutline />
              <p>Add your wished number of tiers</p>
            </TextBox>
            <TextBox
              style={{ y: translateYText2, opacity: translateOpacityText2 }}
            ></TextBox>
            <TextBox
              style={{ y: translateYText2, opacity: translateOpacityText2 }}
            >
              <IoIosCheckmarkCircleOutline />
              <p>Choose your decorations</p>
            </TextBox>
            <TextBox
              style={{ y: translateYText3, opacity: translateOpacityText3 }}
            >
              <IoIosCheckmarkCircleOutline />
              <p>Pick the perfect topper</p>
            </TextBox>
            <ButtonBox
              style={{ y: translateYButton, opacity: translateOpacityButton }}
            >
              <TransparentButton
                onPress={handleScrollCake}
                title="Start building your Wedding cake"
              ></TransparentButton>
            </ButtonBox>
          </Box>
        </FlexBox>
      </MyBox>
    </ScrollSection>
  );
};
const Title = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  max-width: 66rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  top: 0;
`;
const Box = styled.div`
  width: 29rem;
  position: relative;
  height: 100%;
`;

const Piece = styled(motion.img)`
  transition: all 0.3s ease-out;
  position: absolute;
  top: 10rem;
  left: 5rem;
  width: 17rem;
  height: 13rem;
  @media (max-width: 1000px) {
    left: 2rem;
  }
`;

const Middle = styled(Piece)`
  width: 13rem;
  height: 8rem;
  left: 7rem;
  @media (max-width: 1000px) {
    left: 4rem;
  }
`;
const Top = styled(Piece)`
  width: 7rem;
  height: 6.5rem;
  left: 10rem;
  @media (max-width: 1000px) {
    left: 7rem;
  }
`;

const Decorations = styled(motion.img)`
  transition: all 0.3s ease-out;
  opacity: 0.5;
  position: absolute;
  top: 10rem;
  left: -0.1rem;
  width: 26rem;
  height: 30rem;
  @media (max-width: 1000px) {
    left: -2.8rem;
    width: 25rem;
  }
`;
const Topper = styled(motion.img)`
  transition: all 0.3s ease-out;
  position: absolute;
  top: 6rem;
  left: 11.2rem;
  height: 6rem;
  @media (max-width: 1000px) {
    left: 8.2rem;
  }
`;

const TextBox = styled(motion.div)`
  transition: all 0.3s ease-out;
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  top: 10rem;
  width: 95%;
  right: 2.5%;
  height: 5rem;
  @media (max-width: 1000px) {
    right: 1%;
  }

  p {
    font-size: 1.3rem;
    font-weight: 700;
  }
  svg {
    font-size: 1.5rem;
  }
`;

const ButtonBox = styled(motion.div)`
  transition: all 0.3s ease-out;
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  top: 10rem;
  width: 95%;
  right: 2.5%;
  height: 5rem;
  padding-left: 5px;
  @media (max-width: 1000px) {
    right: 1%;
    padding-left: 5px;
  }
`;

const FlexBox = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  position: relative;
  gap: 17rem;
  @media (max-width: 1000px) {
    gap: 3rem;
  }
  @media (max-width: 800px) {
    gap: 1rem;
  }
`;

const ScrollSection = styled.div`
  position: relative;
  height: 350vh;
`;

const MyBox = styled.section`
  height: 90vh;
  min-height: 55rem;
  // background: ${({ theme }) => theme.card};
  position: sticky;
  top: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export default ScrollSectionComponent;
