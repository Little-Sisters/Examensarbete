import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import ProductCard from '../components/ProductCard';
import { useProduct } from '../contexts/ProductContext';
import PageDescription from '../components/reusable components/PageDescription';

function ProductPage() {
  const { productList } = useProduct();

  const themeContext = useContext(ThemeContext);
  const card1 = themeContext?.productOne;
  const card2 = themeContext?.productTwo;
  const gradient1 = themeContext?.gradient;
  const gradient2 = themeContext?.gradient;

  return (
    <PageContentWrapper>
      <MarginTop>
        <PageDescription
          title="Our Cakes"
          description="Hej Description Lorem ipsum dolor sit amet consectetur adipisicing
elit. Amet et neque obcaecati placeat cum ab id quam provident
maiores quaerat, dicta incidunt recusandae minus quod quae in libero
quia enim!"
        />
        <FlexContainer>
          <StyledProduct>
            <ProductCard
              product={productList[0]}
              background={`linear-gradient(to bottom, ${card1}, ${gradient1})`}
            />
          </StyledProduct>
          <StyledProduct>
            <ProductCard
              product={productList[1]}
              background={`linear-gradient(to bottom, ${card2}, ${gradient2})`}
            />
          </StyledProduct>
        </FlexContainer>
      </MarginTop>
    </PageContentWrapper>
  );
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
const MarginTop = styled.div`
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

const StyledProduct = styled.div`
  width: calc(40% - 1rem);
  margin: 0.5rem;

  @media (max-width: 800px) {
    width: calc(80% - 1rem);
  }
`;

export default ProductPage;
