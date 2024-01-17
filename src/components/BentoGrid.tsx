import React from 'react';
import styled from 'styled-components';
import { data } from '../../data/cellData';

// Function to render cells
const BentoGrid: React.FC = () => {
  return (
    <Grid data-testid="bento-grid">
      {data.map((item) => (
        <Cell
          key={item.id}
          data-id={item.id}
          className={`${item.span} ${item.rowSpan} image-cell`}
          imageUrl={item.imageUrl}
        >
          <ChoicesOverlay className="choices-overlay">
            <StyledItem>{item.title}</StyledItem>
            <StyledItem>{item.tier}</StyledItem>
            <StyledItem>{item.color}</StyledItem>
            <StyledItem>{item.decorations}</StyledItem>
            <StyledItem>{item.topper}</StyledItem>
            <StyledItem>{item.flavor}</StyledItem>
            <StyledItem>{item.frosting}</StyledItem>
          </ChoicesOverlay>
        </Cell>
      ))}
    </Grid>
  );
};

// Styled component for the Bento grid container
// grid template comlumns and auto rows create a grid with 200px columns and rows
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 1rem;
  padding: 1rem;
  color: #fff;
`;

// Styled components for the individual cells
const Cell = styled.div<{ imageUrl: string }>`
  background-color: #333;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover .choices-overlay {
    opacity: 0.9;
  }

  // Modifier classes for different cell spans
  // These are applied in the data list to set the width and height of each cell

  @media (min-width: 1355px) {
    &.span-2 {
      grid-column: span 2;
    }
    &.span-3 {
      grid-column: span 3;
    }
    &.span-4 {
      grid-column: span 4;
    }
    &.span-5 {
      grid-column: span 5;
    }
    &.span-6 {
      grid-column: span 6;
    }
    &.span-7 {
      grid-column: span 7;
    }
    &.span-8 {
      grid-column: span 8;
    }
    &.span-9 {
      grid-column: span 9;
    }
    &.span-10 {
      grid-column: span 10;
    }
    &.span-11 {
      grid-column: span 11;
    }
    &.span-12 {
      grid-column: span 12;
    }

    &.row-span-1 {
      grid-row: span 1;
    }
    &.row-span-2 {
      grid-row: span 2;
    }
    &.row-span-3 {
      grid-row: span 3;
    }
    &.row-span-4 {
      grid-row: span 4;
    }
    &.row-span-5 {
      grid-row: span 5;
    }
    &.row-span-6 {
      grid-row: span 6;
    }
    &.row-span-7 {
      grid-row: span 7;
    }
    &.row-span-8 {
      grid-row: span 8;
    }
    &.row-span-9 {
      grid-row: span 9;
    }
    &.row-span-10 {
      grid-row: span 10;
    }
    &.row-span-11 {
      grid-row: span 11;
    }
    &.row-span-12 {
      grid-row: span 12;
    }
  }
`;

// Styled components for the overlay
const ChoicesOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const StyledItem = styled.p`
  margin: 0.3rem;
  padding: 0;
`;

export default BentoGrid;
