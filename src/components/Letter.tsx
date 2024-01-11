import React from 'react';
import styled from 'styled-components';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const Letter: React.FC = () => {
    const { scrollYProgress } = useViewportScroll();
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5]);
    const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100]);

    return (
        <StyledLetter
            style={{
                scale: scaleAnim,
                y: yPosAnim,
            }}
        >
            <h1>this is the letter</h1>
            <p>this is product info</p>
            <p>i want fast food</p>
        </StyledLetter>
    );
};

// Styled component
const StyledLetter = styled(motion.div)`
   width: calc(100% - 1rem);
   height: calc(100% - 1rem);
   top: 0.5rem;
   left: 0.5rem;
   background-color: #f8efd5;
   overflow: hidden;
   padding: 1rem;
   box-sizing: border-box;
   position: absolute;
`;

export default Letter;
