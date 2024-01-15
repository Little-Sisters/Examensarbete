import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useContext } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import styled, { ThemeContext } from 'styled-components';
import cake1White from '/scrollcake/base1-white.png';
import cake2White from '/scrollcake/base2-white.png';
import cake3White from '/scrollcake/base3-white.png';
import cake1Pink from '/scrollcake/base1-pink.png';
import cake2Pink from '/scrollcake/base2-pink.png';
import cake3Pink from '/scrollcake/base3-pink.png';
import decorations from '/scrollcake/decorations.png';
import topper from '/scrollcake/topper.png';

const ScrollSectionComponentMobile = () => {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.mode;

  // Define the y-transformations and opacity for each piece based on scroll progress
  const translateYPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 183]);
  const opacityPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  const translateYPiece2 = useTransform(
    scrollYProgress,
    [0.08, 0.16],
    [0, 123],
  );
  const opacityPiece2 = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);

  const translateYPiece3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 63]);
  const opacityPiece3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);

  const translateYDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 63],
  );
  const OpacityDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 1],
  );

  const translateTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 15]);
  const OpacityTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 1]);

  const translateYText1 = useTransform(scrollYProgress, [0, 0.32], [0, 30]);
  const translateOpacityText1 = useTransform(
    scrollYProgress,
    [0, 0.32],
    [0, 1],
  );

  const translateYText2 = useTransform(scrollYProgress, [0.35, 0.64], [30, 90]);
  const translateOpacityText2 = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 1],
  );
  const translateYText3 = useTransform(
    scrollYProgress,
    [0.69, 0.84],
    [90, 150],
  );
  const translateOpacityText3 = useTransform(
    scrollYProgress,
    [0.69, 0.84],
    [0, 1],
  );

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest);
  });

  return (
    <ScrollSection ref={targetRef}>
      <MyBox>
        <FlexBox>
          <Title>
            <h2>Create your dream cake</h2>
            <p>
              <p>
                In our specialiced customized cake you can build your dream cake
                and see a 3d vizualisation of your cake in real time!
              </p>
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
          <Box2>
            <TextBox
              style={{ y: translateYText1, opacity: translateOpacityText1 }}
            >
              <IoIosCheckmarkCircleOutline />
              <p> Add your wished tiers</p>
            </TextBox>
            <TextBox
              style={{ y: translateYText2, opacity: translateOpacityText2 }}
            ></TextBox>
            <TextBox
              style={{ y: translateYText2, opacity: translateOpacityText2 }}
            >
              <IoIosCheckmarkCircleOutline />
              <p> Choose your decorations</p>
            </TextBox>
            <TextBox
              style={{ y: translateYText3, opacity: translateOpacityText3 }}
            >
              <IoIosCheckmarkCircleOutline />
              <p> Pick the perfect topper </p>
            </TextBox>
          </Box2>
        </FlexBox>
      </MyBox>
    </ScrollSection>
  );
};
const Title = styled.div`
  position: absolute;
  width: 96%;
  left: 2%;
  text-align: center;
  max-width: 66rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  top: 0;
  padding: 0 0.5rem;
  h2 {
    margin: 0.5rem 0rem;
    @media (max-width: 471px) {
      font-size: 1rem;
    }
  }
  p {
    margin: 0.5rem 0rem;

    font-size: 0.9rem;
    @media (max-width: 471px) {
      font-size: 0.8rem;
    }
  }
`;
const Box = styled.div`
  width: 100%;
  position: relative;

  margin-top: 6rem;
  height: 50%;
`;
const Box2 = styled.div`
  width: 100%;
  position: relative;
  height: 50%;
`;

const Piece = styled(motion.img)`
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0rem;
  left: calc(50% - 4.7rem);
  width: 9.5rem;
  height: 6.7rem;
`;

const Middle = styled(Piece)`
  left: calc(50% - 3.5rem);
  width: 7rem;
  height: 4.7rem;
`;

const Top = styled(Piece)`
  top: 0rem;
  left: calc(50% - 2.25rem);
  width: 4.5rem;
  height: 4rem;
`;

const Decorations = styled(motion.img)`
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0rem;
  left: calc(50% - 6rem);
  width: 11rem;
  height: 14.2rem;
`;
const Topper = styled(motion.img)`
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0rem;
  left: calc(50% - 1rem);
  height: 3rem;
  @media (max-width: 460px) {
    left: calc(50% - 1rem);
  }
`;

const TextBox = styled(motion.div)`
  transition: all 0.3s ease-out;
  position: absolute;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  top: 0rem;
  width: 90%;
  right: 5%;
  height: 2.5rem;
  @media (max-width: 420px) {
    width: 100%;
    right: 0%;
  }
  p {
    font-size: 1rem;
  }
  svg {
    font-size: 1rem;
  }
`;

const FlexBox = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  position: relative;
  gap: 4rem;
  flex-direction: column;
`;

const ScrollSection = styled.div`
  position: relative;
  height: 250vh;
`;

const MyBox = styled.section`
  height: 36rem;
  position: sticky;
  top: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media screen and (min-height: 730px) {
    /* Adjust the top property for viewport heights greater than or equal to 600px */
    top: 9rem;
  }
  @media screen and (min-height: 900px) {
    /* Adjust the top property for viewport heights greater than or equal to 600px */
    top: 12rem;
  }
`;

export default ScrollSectionComponentMobile;
