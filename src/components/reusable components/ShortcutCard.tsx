import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ShortcutCardProps {
  imageSrc: string;
  title: string | React.ReactNode;
  route: string;
  description: string;
}

const Shortcut: React.FC<ShortcutCardProps> = ({
  imageSrc,
  title,
  route,
  description,
}) => {
  return (
    <MyMotionDiv
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <ShortcutWrapper to={route}>
        <ImageWrapper>
          <img src={imageSrc} alt={imageSrc} />
        </ImageWrapper>

        <h3>{title}</h3>
        <span>{description}</span>
      </ShortcutWrapper>
    </MyMotionDiv>
  );
};

const MyMotionDiv = styled(motion.div)`
  width: calc(100% / 3);
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  height: 0;
  padding-bottom: 100%; /* Maintain a square aspect ratio */
  position: relative;
  width: 100%;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

const ShortcutWrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0.3rem;
  flex: 1; /* Take up one-third of the row */

  h3 {
    margin: 0.2rem 0 1rem 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  span {
    font-size: 0.9rem;
  }

  // overlay
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    z-index: 1;
    transition: background-color 0.3s ease;
  }

  &:hover {
    cursor: pointer;

    &::after {
      background-color: ${({ theme }) => theme.overlay};
    }
  }
`;

export default Shortcut;
