// Toggle.tsx
import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

// Interface for toggle component
// isOn: boolean to check if the toggle is on or off
// toggleTheme: function to toggle the theme
interface ToggleProps {
  isOn: boolean;
  toggleTheme: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ isOn, toggleTheme }) => {
  return (
    <Container data-darkmode={isOn} onClick={toggleTheme} isOn={isOn}>
      <AnimatePresence initial={false}>
        <Handle
          layout
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOn ? (
            <FaRegMoon size="0.6rem" color="black" />
          ) : (
            <FaRegSun size="0.6rem" color="white" />
          )}
        </Handle>
      </AnimatePresence>
    </Container>
  );
};

// Styling for toggle component
const Container = styled.div<{ isOn: boolean }>`
  height: 1.5rem;
  width: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
  transition: all 0.3s;
  justify-content: ${(props) => (props.isOn ? 'flex-end' : 'flex-start')};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text};
`;

// Handle the dot that moves
const Handle = styled(motion.div)`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.text};
  overflow: hidden;
`;

export default Toggle;
