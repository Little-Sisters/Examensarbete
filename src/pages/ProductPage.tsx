import styled from 'styled-components';
import FakeProduct from '../components/FakeProduct';
import MarginTopContainer from '../components/MarginTopContainer';
import { useProduct } from '../contexts/ProductContext';

function ProductPage() {
  const { productList } = useProduct();
  return (
    <MarginTopContainer>
      <FlexContainerCentered>
        <h1>Our Cakes</h1>
        <p>
          Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Amet et neque obcaecati placeat cum ab id quam provident maiores
          quaerat, dicta incidunt recusandae minus quod quae in libero quia
          enim!
        </p>
      </FlexContainerCentered>
      <FlexContainer>
        {productList.map((product) => (
          <FakeProduct key={product.id} product={product} />
        ))}
      </FlexContainer>
    </MarginTopContainer>
  );
}

const FlexContainerCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  margin-bottom: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default ProductPage;
