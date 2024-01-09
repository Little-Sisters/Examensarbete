import styled from 'styled-components';
import { Cart } from '../components/Cart';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import ProductCard from '../components/ProductCard';
import { useProduct } from '../contexts/ProductContext';

function NewProductsPage() {
  const { productList } = useProduct();
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <h1>ProductPage</h1>
        <FlexContainer>
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </FlexContainer>
        <Cart />
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default NewProductsPage;
