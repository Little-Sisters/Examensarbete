import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const ScrollSectionComponent = () => {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Define the y-transformations and opacity for each piece based on scroll progress
  const translateYPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 600]);
  const opacityPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  const translateYPiece2 = useTransform(
    scrollYProgress,
    [0.08, 0.16],
    [0, 500],
  );
  const opacityPiece2 = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);

  const translateYPiece3 = useTransform(
    scrollYProgress,
    [0.16, 0.24],
    [0, 400],
  );
  const opacityPiece3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);

  const translateYPiece4 = useTransform(
    scrollYProgress,
    [0.24, 0.32],
    [0, 300],
  );
  const opacityPiece4 = useTransform(scrollYProgress, [0.24, 0.32], [0, 1]);


  const translateYDecorations = useTransform(
    scrollYProgress,
    [0.32, 0.64],
    [0, 300],
  );
  const OpacityDecorations = useTransform(
    scrollYProgress,
    [0.32, 0.64],
    [0, 0.75],
  );

   const translateTopper = useTransform(
     scrollYProgress,
     [0.64, 0.84],
     [0, 190],
   );
   const OpacityTopper = useTransform(
     scrollYProgress,
     [0.64, 0.84],
     [0, 1],
   );

  const translateYText1 = useTransform(scrollYProgress, [0, 0.32], [0, 130]);
  const translateOpacityText1 = useTransform(
    scrollYProgress,
    [0, 0.32],
    [0, 1],
  );

  const translateYText2 = useTransform(scrollYProgress, [0.32, 0.64], [0, 230]);
  const translateOpacityText2 = useTransform(
    scrollYProgress,
    [0.32, 0.64],
    [0,1],
  );
  const translateYText3 = useTransform(scrollYProgress, [0.64, 0.84], [0, 330]);
  const translateOpacityText3 = useTransform(
    scrollYProgress,
    [0.64, 0.84],
    [0, 1],
  );

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest);
  });

  return (
    <ScrollSection ref={targetRef}>
      <MyBox>
        <FlexBox>
          <Title>Create your dream cake</Title>
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
const Title = styled.h2`
  position: absolute;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  top: 0;

`;
const Box = styled.div`
  width: 29rem;
  position: relative;
  height: 100%;
`;

const Piece = styled(motion.div)`
  background: red;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0rem;
  left: 4rem;
  width: 21rem;
  height: 6rem;
  @media (max-width: 1000px) {
    left: 1rem;
  }
`;

const Decorations = styled(motion.div)`
  background: black;
  transition: all 0.3s ease-out;
  opacity: 0.5;
  position: absolute;
  top: 0rem;
  left: 4rem;
  width: 21rem;
  height: 25rem;
  @media (max-width: 1000px) {
    left: 1rem;
  }
`;
const Topper = styled(motion.div)`
  background: #ff00bf;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0rem;
  left: 13rem;
  width: 2rem;
  height: 7rem;
  @media (max-width: 1000px) {
    left: 10rem;
  }
`;

const TextBox = styled(motion.div)`
  background: brown;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 10rem;
  width: 90%;
  right: 5%;
  height: 5rem;
  @media (max-width: 1000px) {
    right: 1rem;
  }
`;

const FlexBox = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  position: relative;
  gap: 10rem;
  @media (max-width: 1000px) {
    gap: 3rem;
  }
  @media (max-width: 800px) {
    gap: 1rem;
  }
`;

const ScrollSection = styled.div`
  position: relative;
  height: 300vh;
`;

const MyBox = styled.section`
  height: 90vh;
  position: sticky;
  top: 4rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export default ScrollSectionComponent;
