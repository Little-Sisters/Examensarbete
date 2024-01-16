import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import FlavourSlide from './FlavourSlide';

const HorizontalCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <MySection ref={targetRef}>
      <MyBox>
        <FlexBox style={{ x }}>
          <FlavourSlide></FlavourSlide>
          <FlavourSlide></FlavourSlide>
        </FlexBox>
      </MyBox>
    </MySection>
  );
};

const FlexBox = styled(motion.div)`
  display: flex;
  height: 100%;
  align-items: flex-start;
`;

const MySection = styled.div`
  position: relative;
  height: 300vh;
`;
const MyBox = styled.section`
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export default HorizontalCarousel;
