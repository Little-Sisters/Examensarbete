/* eslint-disable react-refresh/only-export-components */
import { LuCake, LuEgg, LuMilk } from 'react-icons/lu';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 1.2rem;
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
    font-size: 1.1rem;
    padding: 0;
    margin: .5rem 0;
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
  }
`;

const StyledListItem = styled.li`
  padding: 0;
  font-size: 1.1rem;
  margin: 0.5rem 0;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const accordionItemsData = [
  {
    title: (
      <HeaderContainer>
        <LuCake />
        <StyledParagraph>Details</StyledParagraph>
      </HeaderContainer>
    ),
    content: (
      <StyledList>
        <StyledListItem>
          <p>
            Celebrate your special day with a luxurious, customized wedding
            cake. Our skilled bakers and decorators will craft a masterpiece
            that reflects your unique style and taste.
          </p>
        </StyledListItem>
        <StyledListItem>
          <p>
            Our skilled bakers and decorators will craft a masterpiece
            that reflects your unique style and taste.
          </p>
        </StyledListItem>
      </StyledList>
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
      <StyledList>
        <StyledListItem>
          <p>Our ingredients are carefully selected for quality:</p>
          <ul>
            <StyledListItem>High-quality flour</StyledListItem>
            <StyledListItem>Fresh eggs</StyledListItem>
            <StyledListItem>Pure vanilla extract</StyledListItem>
            {/* Add more ingredients as needed */}
          </ul>
        </StyledListItem>
      </StyledList>
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
      <StyledList>
        <StyledListItem>
          <p>Our wedding cake may contain the following allergens:</p>
          <ul>
            <StyledListItem>Gluten</StyledListItem>
            <StyledListItem>Dairy</StyledListItem>
            <StyledListItem>Eggs</StyledListItem>
            {/* Add more allergens as needed */}
          </ul>
        </StyledListItem>
      </StyledList>
    ),
  },
];