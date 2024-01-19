import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ShortcutCardProps {
  imageSrc: string;
  title: string;
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
    <motion.div
      className="box"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <ShortcutWrapper to={route}>
        <img src={imageSrc} alt="" />
        <h3>{title}</h3>
        <span>{description}</span>
      </ShortcutWrapper>
    </motion.div>
  );
};

const ShortcutWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  position: relative;

  img {
    width: 100%;
    max-height: 25rem;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 3px;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.9rem;

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
  }
`;

export default Shortcut;