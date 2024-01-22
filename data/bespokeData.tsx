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
  font-weight: 700;
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

export const bespokeItemsData = [
  {
    title: (
      <HeaderContainer>
        <LuCake />
        <StyledParagraph>Details</StyledParagraph>
      </HeaderContainer>
    ),
    content: (
      <>
        <ContentP>
          Immerse yourself in the world of bespoke craftsmanship with our
          bespoke wedding cakes.
        </ContentP>
        <ContentSpan>
          Every layer is a symphony of flavors, ensuring your special day is
          unforgettable. Let us create a wedding cake that reflects the essence
          of your celebration, making it truly extraordinary.
        </ContentSpan>
        <ContentSpan>
          Our skilled bakers and decorators craft each masterpiece to tell your
          unique love story. From classic elegance to avant-garde designs, our
          cakes are a delicious expression of your individual style and taste.
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
        <ContentP>
          Indulge in the finest ingredients meticulously selected for quality:
        </ContentP>
        <StyledList>
          <li>
            Base: Choose from a variety of high-quality flours including
            traditional, gluten-free, or almond flour.
          </li>
          <li>
            Eggs: Opt for farm-fresh eggs to enhance the richness and texture of
            your cake.
          </li>
          <li>
            Flavorings: Personalize your cake with a selection of pure vanilla,
            rich chocolate, or exotic fruit extracts.
          </li>
          <li>
            Sweeteners: Tailor the sweetness level with options like organic
            cane sugar, honey, or maple syrup.
          </li>
          <li>
            Fillings: Select from an array of delectable fillings such as
            luscious fruit compotes, velvety chocolate ganache, or creamy
            custards.
          </li>
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
