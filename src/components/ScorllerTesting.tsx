import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const ScrollerTesting = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  console.log(scrollYProgress.get());

  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 0], [1, 0.5, 0]);
  const yPosAnim = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.2],
    [0, 120, 150, 0],
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ['150%', '50%', '-100%'],
  );

  return (
    <MySection ref={targetRef}>
      <MyBox>
        <FlexBox style={{ x }}>
          <Our>Our Flavors</Our>

          <Flavour
            style={{
              scale: scaleAnim,
              y: yPosAnim,
              x: xPosAnim,
            }}
          >
            {' '}
            <Name>Chocolate</Name>
            <p>bla bla bla bla</p>
            <LetterStyle src="/chocolate.png"></LetterStyle>
          </Flavour>
        </FlexBox>
      </MyBox>
    </MySection>
  );
};

const Our = styled.h1`
  font-size: 4rem;
  position: absolute;
  top: 10%;
  left:50%;
`;


const Name = styled.h2 `
font-size:4rem;
`

const LetterStyle = styled(motion.img)`
  width: 30rem;
`;

const Flavour = styled(motion.div)`
  width: 30rem;
  transform-origin: center;
  top: 0%;
  left: 3rem;
  overflow: hidden;
  padding: 1rem;
  position: absolute;
`;

const FlexBox = styled(motion.div)`
  height: 100%;
  position: relative;
`;

const MySection = styled.div`
  position: relative;
  height: 500vh;
`;
const MyBox = styled.section`
  height: 100vh;
  top: 6rem;
  position: sticky;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export default ScrollerTesting;
