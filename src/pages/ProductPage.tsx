import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import ProductCard from '../components/ProductCard';
import { useProduct } from '../contexts/ProductContext';
import PageDescription from '../components/reusable components/PageDescription';
import { useEffect } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Footer from '../components/Footer';

function ProductPage() {
  const { productList } = useProduct();

  const themeContext = useContext(ThemeContext);
  const card1 = themeContext?.productOne;
  const card2 = themeContext?.productTwo;
  const gradient1 = themeContext?.gradient;
  const gradient2 = themeContext?.gradient;
  //Sets the page title
  useEffect(() => {
    document.title = 'Cakes';
  }, []);

  useScrollToTop();

  return (
    <div>
      <PageContentWrapper>
        <MarginTop>
          <PageDescription
            title="Our Cakes"
            description="Find your perfect match. The Customized Cake can be ordered right away, or send a request for a Bespoke Cake."
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
      <Footer />
    </div>
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
