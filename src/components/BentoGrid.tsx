import React from 'react';
import styled from 'styled-components';

// Define the types for the cell data
type CellData = {
  title: string;
  imageUrl: string;
  tier: string;
  color: string;
  decorations: string;
  topper: string;
  flavor: string;
  frosting: string;
  span: string;
};

// Sample data for the cells
const data: CellData[] = [
  { title: 'Bento', imageUrl: 'pinkcake.jpg', tier: '2 tiers', color: 'Pink', topper: 'No topper', flavor: 'Strawberry', decorations: 'Flowers', frosting: 'Buttercream', span: 'span-8'  },
  { title: 'Module title', imageUrl: 'pinkcake.jpg', tier: '2 tiers', color: 'Pink', topper: 'No topper', flavor: 'Strawberry', decorations: 'Flowers', frosting: 'Buttercream', span: 'span-4' },
  // ... more data objects
];

// Function to render cells
const renderCells = (cellData: CellData[]) => {
    return cellData.map((item, index) => (
      <Cell
        key={index}
        className={`${item.span} image-cell`}
        imageUrl={item.imageUrl}
        data-title={item.title}
      >
        <ChoicesOverlay className="choices-overlay">
          <p>{item.tier}</p>
          <p>{item.color}</p>
          <p>{item.decorations}</p>
          <p>{item.topper}</p>
          <p>{item.flavor}</p>
          <p>{item.frosting}</p>
        </ChoicesOverlay>
      </Cell>
    ));
  };
  
  const BentoComponent: React.FC = () => {
    return (
      <BentoGrid>
        {renderCells(data)}
      </BentoGrid>
    );
  };

// Styled component for the Bento grid container
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
  opacity: 0; // Hidden by default
  transition: opacity 0.3s ease; // Smooth transition for the overlay
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 16px;
  padding: 16px;
  color: #fff;
`;

// Styled components for the individual cells
const Cell = styled.div<{ imageUrl: string }>`
  background-color: #333;
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: attr(data-title);
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 1em;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
    padding: 5px;
    border-radius: 3px;
  }

  &:hover .choices-overlay {
    opacity: 1; // Show the overlay on hover
  }

  // Modifier classes for different cell spans
  &.span-2 { grid-column: span 2; }
  &.span-4 { grid-column: span 4; }
  &.span-6 { grid-column: span 6; }
  &.span-8 { grid-column: span 8; }
  &.span-10 { grid-column: span 10; }
  &.span-12 { grid-column: span 12; }
`;

export default BentoComponent;
