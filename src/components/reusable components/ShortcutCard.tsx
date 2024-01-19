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
      <ShortcutStyle to={route}>
        <img src={imageSrc} alt="" />
        <h3>{title}</h3>
        <span>{description}</span>
      </ShortcutStyle>
    </motion.div>
  );
};

const ShortcutStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 25rem;

  img {
    object-fit: cover;
    border-radius: 3px;
    height: 30rem;
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
