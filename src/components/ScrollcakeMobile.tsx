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
  const translateYPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 460]);
  const opacityPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  const translateYPiece2 = useTransform(
    scrollYProgress,
    [0.08, 0.16],
    [0, 360],
  );
  const opacityPiece2 = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);

  const translateYPiece3 = useTransform(
    scrollYProgress,
    [0.16, 0.24],
    [0, 260],
  );
  const opacityPiece3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);

  const translateYPiece4 = useTransform(
    scrollYProgress,
    [0.24, 0.32],
    [0, 160],
  );
  const opacityPiece4 = useTransform(scrollYProgress, [0.24, 0.32], [0, 1]);

  const translateYDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 160],
  );
  const OpacityDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 0.75],
  );

  const translateTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 48]);
  const OpacityTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 1]);

  const translateYText1 = useTransform(scrollYProgress, [0, 0.32], [0, 160]);
  const translateOpacityText1 = useTransform(
    scrollYProgress,
    [0, 0.32],
    [0, 1],
  );

  const translateYText2 = useTransform(scrollYProgress, [0.35, 0.64], [0, 260]);
  const translateOpacityText2 = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 1],
  );
  const translateYText3 = useTransform(scrollYProgress, [0.69, 0.84], [0, 360]);
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
          <Box>
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
  h2 {
    margin: 0.5rem 0rem;
  }
  p {
    margin: 0.5rem 0rem;
    font-size: .9rem;
  }
`;
const Box = styled.div`
  width: 100%;
  position: relative;
  background: red;
  opacity: .5 ;
  height: 50%;
;
`;

const Piece = styled(motion.div)`
  background: pink;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 10rem;
  left: 4rem;
  width: 21rem;
  height: 6rem;
  @media (max-width: 1000px) {

  }
`;

const Decorations = styled(motion.div)`
  background: black;
  transition: all 0.3s ease-out;
  opacity: 0.5;
  position: absolute;
  top: 10rem;
  left: 4rem;
  width: 21rem;
  height: 25rem;
  @media (max-width: 1000px) {

  }
`;
const Topper = styled(motion.div)`
  background: #ff00bf;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 10rem;
  left: 13rem;
  width: 2rem;
  height: 7rem;
  @media (max-width: 1000px) {
  }
`;

const TextBox = styled(motion.div)`
  background: lightcoral;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 10rem;
  width: 90%;
  right: 5%;
  height: 5rem;
  @media (max-width: 1000px) {

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
  height: 300vh;
`;

const MyBox = styled.section`
  height: 36rem;
  background: lightgreen;
  position: sticky;
  top: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media screen and (min-height: 700px) {
    /* Adjust the top property for viewport heights greater than or equal to 600px */
    top: 10rem;
  }
  @media screen and (min-height: 900px) {
    /* Adjust the top property for viewport heights greater than or equal to 600px */
    top: 12rem;
  }
`;

export default ScrollSectionComponentMobile;
