import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const ScrollSectionComponentMobile = () => {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Define the y-transformations and opacity for each piece based on scroll progress
  const translateYPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 200]);
  const opacityPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  const translateYPiece2 = useTransform(
    scrollYProgress,
    [0.08, 0.16],
    [0, 155],
  );
  const opacityPiece2 = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);

  const translateYPiece3 = useTransform(
    scrollYProgress,
    [0.16, 0.24],
    [0, 110],
  );
  const opacityPiece3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);

  const translateYPiece4 = useTransform(
    scrollYProgress,
    [0.24, 0.32],
    [0, 65],
  );
  const opacityPiece4 = useTransform(scrollYProgress, [0.24, 0.32], [0, 1]);

  const translateYDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 64],
  );
  const OpacityDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 0.75],
  );

  const translateTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 15]);
  const OpacityTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 1]);

  const translateYText1 = useTransform(scrollYProgress, [0, 0.32], [0, 30]);
  const translateOpacityText1 = useTransform(
    scrollYProgress,
    [0, 0.32],
    [0, 1],
  );

  const translateYText2 = useTransform(scrollYProgress, [0.35, 0.64], [0, 90]);
  const translateOpacityText2 = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 1],
  );
  const translateYText3 = useTransform(scrollYProgress, [0.69, 0.84], [0, 150]);
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
            <Piece style={{ y: translateYPiece1, opacity: opacityPiece1 }}>
              1
            </Piece>
            <Piece style={{ y: translateYPiece2, opacity: opacityPiece2 }}>
              2
            </Piece>
            <Piece style={{ y: translateYPiece3, opacity: opacityPiece3 }}>
              3
            </Piece>
            <Piece style={{ y: translateYPiece4, opacity: opacityPiece4 }}>
              4
            </Piece>
            <Decorations
              style={{ y: translateYDecorations, opacity: OpacityDecorations }}
            >
              decorations
            </Decorations>
            <Topper style={{ y: translateTopper, opacity: OpacityTopper }}>
              toppper
            </Topper>
          </Box>
          <Box2>
            <TextBox
              style={{ y: translateYText1, opacity: translateOpacityText1 }}
            >
              Add your wished tiers
            </TextBox>
            <TextBox
              style={{ y: translateYText2, opacity: translateOpacityText2 }}
            ></TextBox>
            <TextBox
              style={{ y: translateYText2, opacity: translateOpacityText2 }}
            >
              Choose your decorations
            </TextBox>
            <TextBox
              style={{ y: translateYText3, opacity: translateOpacityText3 }}
            >
              Pick the perfect topper
            </TextBox>
          </Box2>
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
  h2 {
    margin: 0.5rem 0rem;
    @media (max-width: 471px) {
      font-size:1rem;
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
  background: red;
  opacity: .5 ;
  margin-top: 5rem;
  height: 50%;
`;
const Box2 = styled.div`
  width: 100%;
  position: relative;
  background: red;
  opacity: 0.5;
  height: 50%;
`;

const Piece = styled(motion.div)`
  background: pink;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0rem;
  left: calc(50% - 5.5rem);
  width: 11rem;
  height: 2.5rem;
  @media (max-width: 420px) {
    left: calc(50% - 5.5rem);
  }
`;

const Decorations = styled(motion.div)`
  background: black;
  transition: all 0.3s ease-out;
  opacity: 0.5;
  position: absolute;
  top: 0rem;
  left: calc(50% - 5.5rem);
  width: 11rem;
  height: 11rem;
  @media (max-width: 420px) {
    left: calc(50% - 5.5rem);
  }
`;
const Topper = styled(motion.div)`
  background: #ff00bf;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0rem;
  left: calc(50% - 1rem);
  width: 1rem;
  height: 3rem;
  @media (max-width: 460px) {
    left: calc(50% - 1rem);
  }
`;

const TextBox = styled(motion.div)`
  background: lightcoral;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0rem;
  width: 90%;
  right: 5%;
  height: 2.5rem;
  @media (max-width: 420px) {
    width: 100%;
    right: 0%;
  }
`;

const FlexBox = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  position: relative;
  gap: 1rem;
flex-direction: column;
  @media (max-width: 1000px) {

  }
  @media (max-width: 800px) {

  }
`;

const ScrollSection = styled.div`
  position: relative;
  height: 250vh;
`;

const MyBox = styled.section`
  height: 36rem;
  background: lightgreen;
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
