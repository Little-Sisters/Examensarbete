import MarginTopContainer from '../components/MarginTopContainer';
import { useProduct } from '../contexts/ProductContext';
import FakeProduct from '../components/FakeProduct';
import PageContentWrapper from '../components/PageContentWrapper';
import { Cart } from '../components/Cart';
import styled from 'styled-components';

function NewProductsPage() {
  const { productList } = useProduct();
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <h1>ProductPage</h1>
        <FlexContainer>
          {productList.map((product) => (
            <FakeProduct key={product.id} product={product} />
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
