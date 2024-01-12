import React, { useState } from 'react';
import styled from 'styled-components';
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { useOrder } from '../contexts/OrderContext';

interface EnvelopeProps {
  children: React.ReactNode;
}

const Envelope: React.FC<EnvelopeProps> = ({ children }) => {
  const [ffLayer, setFfLayer] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 60]);
  const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0]);
  const { getLastOrder } = useOrder();
  const { lastOrder } = getLastOrder();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setFfLayer(latest > 0.4 ? -1 : 0);
  });

  return (
    <StyledEnvelope
      style={{
        scale: scaleAnim,
        y: yPosAnim,
        rotateZ: zRotAnim,
      }}
    >
      {children}
      <Frontface style={{ zIndex: ffLayer }}>
        <FlexContainer>
          <StyledTitle>To</StyledTitle>
          <div>
            {lastOrder ? (
              <div>
                <StyledText>{lastOrder?.contactInformation.name}</StyledText>
                <StyledText>{lastOrder?.contactInformation.street}</StyledText>
                <StyledText>{lastOrder?.contactInformation.zipCode}</StyledText>
                <StyledText>{lastOrder?.contactInformation.city}</StyledText>
                <StyledText>{lastOrder?.contactInformation.email}</StyledText>
                <StyledText>{lastOrder?.contactInformation.phone}</StyledText>
              </div>
            ) : (
              <p>No stored values found.</p>
            )}
          </div>
          <StyledButton onClick={() => window.scrollTo(0, 1500)}>
            <StyledImage src="seal.png" alt="wax seal" />
          </StyledButton>
        </FlexContainer>
      </Frontface>
    </StyledEnvelope>
  );
};

const StyledImage = styled.img`
  width: 3rem;
  height: 3rem;
`;
// Styled components
const StyledTitle = styled.p`
  font-size: 40px;
  font-family: 'Monsieur La Doulaise', cursive;
  margin: 1rem;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 0.3rem;
  padding: 0;
`;

const StyledEnvelope = styled(motion.div)`
  width: 28rem;
  height: 20rem;
  scale: 1;
  position: fixed;
  top: 10rem;
  left: calc(50% - 14rem);
  border: 1px solid ${({ theme }) => theme.text};

  @media (max-width: 500px) {
    width: 20rem;
    left: calc(50% - 10rem);
  }
`;

const Frontface = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.card};
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Envelope;
