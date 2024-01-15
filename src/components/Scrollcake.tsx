import {
  motion,
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
  const translateYPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 470]);
  const opacityPiece1 = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  const translateYPiece2 = useTransform(
    scrollYProgress,
    [0.08, 0.16],
    [0, 368],
  );
  const opacityPiece2 = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);

  const translateYPiece3 = useTransform(
    scrollYProgress,
    [0.16, 0.24],
    [0, 268],
  );
  const opacityPiece3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);

  const translateYPiece4 = useTransform(
    scrollYProgress,
    [0.24, 0.32],
    [0, 168],
  );
  const opacityPiece4 = useTransform(scrollYProgress, [0.24, 0.32], [0, 1]);

  const translateYDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 168],
  );
  const OpacityDecorations = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 0.75],
  );

  const translateTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 58]);
  const OpacityTopper = useTransform(scrollYProgress, [0.69, 0.84], [0, 1]);

  const translateYText1 = useTransform(scrollYProgress, [0, 0.32], [0, 165]);
  const translateOpacityText1 = useTransform(
    scrollYProgress,
    [0, 0.32],
    [0, 1],
  );

  const translateYText2 = useTransform(scrollYProgress, [0.35, 0.64], [0, 265]);
  const translateOpacityText2 = useTransform(
    scrollYProgress,
    [0.35, 0.64],
    [0, 1],
  );
  const translateYText3 = useTransform(scrollYProgress, [0.69, 0.84], [0, 365]);
  const translateOpacityText3 = useTransform(
    scrollYProgress,
    [0.69, 0.84],
    [0, 1],
  );


  return (
    <ScrollSection ref={targetRef}>
      <MyBox>
        <FlexBox>
          <Title>
            <h2>Create your dream cake</h2>
            <p>
              <p>
                In our specialiced customized cake you can build your dream cake and see a 3d vizualisation of your cake in real time!
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
`;
const Box = styled.div`
  width: 29rem;
  position: relative;
  height: 100%;
`;

const Piece = styled(motion.div)`
  background: pink;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 10rem;
  left: 4rem;
  width: 22rem;
  height: 6rem;
  @media (max-width: 1000px) {
    left: 0rem;
  }
`;

const Decorations = styled(motion.div)`
  background: black;
  transition: all 0.3s ease-out;
  opacity: 0.5;
  position: absolute;
  top: 10rem;
  left: 4rem;
  width: 22rem;
  height: 25rem;
  @media (max-width: 1000px) {
    left: 0rem;
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
    left: 10rem;
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
    right: 1rem;
  }
`;

const FlexBox = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  position: relative;
  gap: 15rem;
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
  position: sticky;
  top: 4rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export default ScrollSectionComponent;
