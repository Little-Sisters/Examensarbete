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

// Data for the cells
const data: CellData[] = [
  {
    title: 'Pink cake',
    imageUrl: 'pinkcake.jpg',
    tier: '3 tiers',
    color: 'Pink',
    topper: 'No topper',
    flavor: 'Strawberry',
    decorations: 'Flowers',
    frosting: 'Buttercream',
    span: 'span-8',
  },
  {
    title: 'Flower Cake',
    imageUrl: 'flowercake.jpg',
    tier: '3 tiers',
    color: 'White',
    topper: 'No topper',
    flavor: 'Vanilla',
    decorations: 'Flowers',
    frosting: 'Fondant',
    span: 'span-4',
  },
  {
    title: 'Three Tier Cake',
    imageUrl: 'threetiercake.jpg',
    tier: '3 tiers',
    color: 'White',
    topper: 'No topper',
    flavor: 'Salted caramel',
    decorations: 'Flowers',
    frosting: 'Buttercream',
    span: 'span-4',
  },
  {
    title: 'Two Tier Cake',
    imageUrl: 'twotiercake.jpg',
    tier: '2 tiers',
    color: 'White',
    topper: 'No topper',
    flavor: 'Strawberry',
    decorations: 'Flowers',
    frosting: 'Buttercream',
    span: 'span-4',
  },
  {
    title: 'White Cake',
    imageUrl: 'whitecake.jpg',
    tier: '3 tiers',
    color: 'White',
    topper: 'No topper',
    flavor: 'Chocolate',
    decorations: 'Flowers',
    frosting: 'Buttercream',
    span: 'span-4',
  },
];

// Function to render cells
const renderCells = (cellData: CellData[]) => {
  return cellData.map((item, index) => (
    <Cell
      key={index}
      className={`${item.span} image-cell`}
      imageUrl={item.imageUrl}
    >
      <ChoicesOverlay className="choices-overlay">
        <StyledItem>{item.tier}</StyledItem>
        <StyledItem>{item.color}</StyledItem>
        <StyledItem>{item.decorations}</StyledItem>
        <StyledItem>{item.topper}</StyledItem>
        <StyledItem>{item.flavor}</StyledItem>
        <StyledItem>{item.frosting}</StyledItem>
      </ChoicesOverlay>
    </Cell>
  ));
};

const BentoComponent: React.FC = () => {
  return <BentoGrid>{renderCells(data)}</BentoGrid>;
};

// Styled component for the Bento grid container
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

  &:hover .choices-overlay {
    opacity: 0.9;
  }

  // Modifier classes for different cell spans
  &.span-2 {
    grid-column: span 2;
  }
  &.span-4 {
    grid-column: span 4;
  }
  &.span-6 {
    grid-column: span 6;
  }
  &.span-8 {
    grid-column: span 8;
  }
  &.span-10 {
    grid-column: span 10;
  }
  &.span-12 {
    grid-column: span 12;
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

export default BentoComponent;
