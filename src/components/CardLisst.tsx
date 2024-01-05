import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  image?: string;
  title?: string;
}

const StyledCard = styled(motion.div)`
  height: 100%;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme.bodyOpacity}; /* Adjust the opacity here */
  z-index: 1;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <StyledCard style={{ backgroundImage: `url(${image})` }}>
      <Overlay />
      <ContentContainer>{title && <h1>{title}</h1>}</ContentContainer>
    </StyledCard>
  );
};

// Example usage:

const cards = [
  {
    image: 'https://i.ytimg.com/vi/kQHrGw6me7o/maxresdefault.jpg',
    title: 'Vanilla',
  },
  {
    image: 'https://i.ytimg.com/vi/_V5ZXNfo-ek/maxresdefault.jpg',
    title: 'Chocolate',
  },
  {
    image:
      'https://static.vecteezy.com/system/resources/previews/025/272/633/large_2x/strawberry-cake-for-wedding-birthday-and-party-celebration-holiday-dessert-event-food-catering-country-cottage-style-generative-ai-photo.jpg',
    title: 'Strawberry',
  },
  {
    image:
      'https://i.pinimg.com/originals/b6/e9/1b/b6e91b39e1a37b4aa62b9fe121a97077.jpg',
    title: 'Red velvet',
  },
];

const CardList: React.FC = () => {
  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} />
      ))}
    </>
  );
};

export default CardList;
