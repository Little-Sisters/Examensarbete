import styled from 'styled-components';
import FakeProduct from '../components/FakeProduct';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import { useProduct } from '../contexts/ProductContext';

function ProductPage() {
  const { productList } = useProduct();
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
          {productList.map((product) => (
            <StyledFakeProduct key={product.id}>
              <FakeProduct product={product} />
            </StyledFakeProduct>
          ))}
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
  justify-content: space-between;
  gap: 2rem;
`;

const StyledFakeProduct = styled.div`
  width: calc(50% - 1rem);
  margin: 0.5rem;
`;

export default ProductPage;
