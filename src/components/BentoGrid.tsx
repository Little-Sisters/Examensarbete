import React from 'react';
import styled from 'styled-components';

// Styled component for the Bento grid container
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(200px, auto); // Increase the minimum row height
  gap: 16px; // Increased gap for a more spacious look
  padding: 16px; // Increased padding around the grid
  color: #fff;
`;

// Styled components for the individual cells
const Cell = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 3px;
  padding: 20px; // Padding inside the cells
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Prevents content from spilling out

  // Modifier classes for different cell spans
  &.span-2 { grid-column: span 2; }
  &.span-3 { grid-column: span 3; }
  &.span-4 { grid-column: span 4; }
  &.span-6 { grid-column: span 6; }
  &.span-8 { grid-column: span 8; }
  &.full { grid-column: 1 / -1; }

  // Styles for the module titles
  &.module-title {
    font-size: 0.75em;
    text-align: left;
    padding-left: 30px; // Added padding for text alignment
  }

  // Adding an image to the cell
  &.image-cell {
    background-image: url('pinkcake.jpg'); // Replace with your image path
    background-size: cover; // Cover ensures the image covers the entire cell
    background-position: center;
  }
`;

// The React component for the Bento grid
const BentoGrid: React.FC = () => {
  return (
    <Grid>
      <Cell className="span-8 title image-cell"></Cell>
      <Cell className="span-4 module-title">Module title</Cell>
      <Cell className="span-3 image-cell"></Cell>
      <Cell className="span-3 module-title">Rounded corners</Cell>
      <Cell className="span-6 image-cell"></Cell>
      <Cell className="span-3 module-title">16:9</Cell>
      {/* ... additional cells */}
      <Cell className="full">Footer Content</Cell>
      {/* ... */}
    </Grid>
  );
};

export default BentoGrid;
