import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import ProductCard from '../components/ProductCard';
import { useProduct } from '../contexts/ProductContext';

function ProductPage() {
  const { productList } = useProduct();

  const themeContext = useContext(ThemeContext);

  const card1 = themeContext?.productOne;
  const card2 = themeContext?.productTwo;

  return (
    <PageContentWrapper>
      <MarginTopContainer>
        <FlexContainerCentered>
          <h1>Our Cakes</h1>
          <p>
            Hej Description Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Amet et neque obcaecati placeat cum ab id quam provident
            maiores quaerat, dicta incidunt recusandae minus quod quae in libero
            quia enim!
          </p>
        </FlexContainerCentered>
        <FlexContainer>
          <StyledProduct>
            <ProductCard product={productList[0]} background={card2} />
            <ProductCard product={productList[1]} background={card1} />
          </StyledProduct>
        </FlexContainer>
      </MarginTopContainer>
    </PageContentWrapper>
  );
}

const FlexContainerCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const StyledProduct = styled.div`
  width: calc(45% - 1rem);
  margin: 0.5rem;
`;

export default ProductPage;
