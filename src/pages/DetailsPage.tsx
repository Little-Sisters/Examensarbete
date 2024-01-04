import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import { useProduct } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

function DetailsPage() {
  const { productList } = useProduct();
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productList.find((p) => p.id === id);

  if (!product) {
    return (
      <MarginTopContainer>
        <PageContentWrapper>
          <div>
            <h1>Details Page</h1>
            <p>Product not found</p>
          </div>
        </PageContentWrapper>
      </MarginTopContainer>
    );
  }

  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <ProductLayout>
          <Cake>
            <img src="/transparent-cake.png" alt="" />
          </Cake>
          <InputContainer>
            <InputFlexWrapper>
              <SelectAndInformation>
                <Information>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </Information>
                <Selections>
                  <div>
                    <span>Tiers</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Color</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Flavor</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Frosting</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Filling</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Decorations</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Topper</span>
                    <input type="text" />
                  </div>
                </Selections>
              </SelectAndInformation>
              <button onClick={() => addToCart(product, 1)}>Add to cart</button>
            </InputFlexWrapper>
          </InputContainer>
        </ProductLayout>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}
const SelectAndInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  input {
    width: 100%;
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }
  }
`;
const Selections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Cake = styled.div`
  background: ${({ theme }) => theme.card};
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
    height: 35rem;
  }
  img {
    height: 80%;
    @media (max-width: 700px) {
      width: auto;
      height: 30rem;
    }
  }
`;
const InputContainer = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const InputFlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding: 0rem 3rem;
  @media (max-width: 1024px) {
    padding: 0rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 0rem;
  }
`;

const ProductLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  min-height: 85vh; /* Default height for desktop */
  height: 40rem;
  transition: background-color 0.3s ease-in;
  @media (max-width: 1024px) {
    min-height: calc(80vh - 9rem); /* Default height for desktop */
  }
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
    min-height: auto; /* Adjust the height for smaller screens */
  }
`;

export default DetailsPage;
