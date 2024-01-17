/* eslint-disable react-refresh/only-export-components */
import { LuCake, LuEgg, LuMilk } from 'react-icons/lu';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;
const ContentP = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
const ContentSpan = styled.span`
  display: block;
  margin: 1rem 0rem;
  font-weight: 400;
  @media (max-width: 1000px) {
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 1rem;
  svg {
    font-size: 1.5rem;
    @media (max-width: 1000px) {
      font-size: 1.2rem;
    }
  }
`;

const StyledList = styled.ul`
  margin: 0;
  p {
    font-size: 1rem;
    padding: 0;
    margin: 0.8rem 0;
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
  }
  li {
    padding: 0;
    font-weight: 400;
    font-size: 1.1rem;
    margin: 0.8rem 0;
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
  }
`;

// This is the component content that renders in the accordion of the details page. Create more accordion
// data here if you want to use more accordions.

export const accordionItemsData = [
  {
    title: (
      <HeaderContainer>
        <LuCake />
        <StyledParagraph>Details</StyledParagraph>
      </HeaderContainer>
    ),
    content: (
      <>
        <ContentP>Our Cakes</ContentP>
        <ContentSpan>
          Celebrate your special day with a luxurious, customized wedding cake.
          Our skilled bakers and decorators will craft a masterpiece that
          reflects your unique style and taste. Our skilled bakers and
          decorators will craft a masterpiece that reflects your unique style
          and taste.
        </ContentSpan>
        <ContentSpan>
          Celebrate your special day with a luxurious, customized wedding cake.
          Our skilled bakers and decorators will craft a masterpiece that
          reflects your unique style and taste. Our skilled bakers and
          decorators.
        </ContentSpan>
      </>
    ),
  },
  {
    title: (
      <HeaderContainer>
        <LuEgg />
        <StyledParagraph>Ingredients</StyledParagraph>
      </HeaderContainer>
    ),
    content: (
      <>
        <ContentP>Our ingredients are carefully selected for quality:</ContentP>
        <StyledList>
          <li>High-quality flour</li>
          <li>Fresh eggs</li>
          <li>Pure vanilla extract</li>
          {/* Add more ingredients as needed */}
        </StyledList>
      </>
    ),
  },
  {
    title: (
      <HeaderContainer>
        <LuMilk />
        <StyledParagraph>Allergens</StyledParagraph>
      </HeaderContainer>
    ),
    content: (
      <>
        <ContentP>
          Our wedding cake may contain the following allergens:
        </ContentP>
        <StyledList>
          <li>Gluten</li>
          <li>Dairy</li>
          <li>Eggs</li>
          {/* Add more allergens as needed */}
        </StyledList>
      </>
    ),
  },
];
