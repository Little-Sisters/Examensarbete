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
          Our cakes are baked with love and with the best, organic ingredients.
          Make your special day even more memorable with our personalized
          wedding cakes. Our skilled team of bakers and decorators is committed
          to creating a stunning masterpiece that resonates with your distinct
          style. Let your love story shine through every layer, as we carefully
          craft a unique cake that becomes a symbol of your joyous celebration.
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
          <li>
            Rich Chocolate: Luxurious cocoa blended to perfection for a decadent
            chocolate experience.
          </li>
          <li>
            Delicate Strawberry: Fresh strawberries infused to add a burst of
            fruity sweetness.
          </li>
          <li>
            Zesty Lemon: Lemon zest and juice for a tangy and refreshing flavor.
          </li>
          <li>
            Vanilla Sponge: A classic and timeless choice, with the pure essence
            of vanilla.
          </li>
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
        <ContentP>We can make your cake for everyone.</ContentP>
        <ContentSpan>
          While our bespoke wedding cakes are crafted with love and care, they
          may contain allergens such as gluten, dairy, and eggs. Please inform
          us of any specific dietary requirements, and we'll tailor our
          creations to accommodate your needs.
        </ContentSpan>
        <StyledList>
          <li>Gluten</li>
          <li>Dairy</li>
          <li>Eggs</li>
          <li>Vegan</li>
          <li>Nuts</li>
        </StyledList>
      </>
    ),
  },
];
