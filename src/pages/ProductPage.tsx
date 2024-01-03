import FakeProduct from '../components/FakeProduct';
import PageContentWrapper from '../components/PageContentWrapper';
import { useProduct } from '../contexts/ProductContext';
import styled from 'styled-components';

function ProductPage() {
  const { productList } = useProduct();
  return (
    <>
      <PageContentWrapper>
        <h1>ProductPage</h1>
        <FlexContainer>
          {productList.map((product) => (
            <FakeProduct key={product.id} product={product} />
          ))}
        </FlexContainer>
      </PageContentWrapper>
    </>
  );
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default ProductPage;
