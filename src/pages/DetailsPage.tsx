import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import { FlavourOption } from '../components/select/data';
import NewSelect from '../components/select/newSelect';
import { useCart } from '../contexts/CartContext';
import { useProduct } from '../contexts/ProductContext';


function DetailsPage() {
  const { productList } = useProduct();
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productList.find((p) => p.id === id);


  const handleAddToCart = () => {
    console.log(
      'product:',
      product,
      'selected option:',
      selectedOption,
      'selected option value:',
      selectedOption?.value,
    );
    if (product && product.id) {
      const updatedProduct = {
        ...product,
        flavour: selectedOption?.value,
      };
      addToCart(updatedProduct, 1);
      console.log("updated product:" ,updatedProduct)
    } else {
      console.log("Product is undefined or missing an ID");
    } 
  };

  const [selectedOption, setSelectedOption] = useState<FlavourOption | null>(
    null,
  );

  const handleSelectChange = (selectedOption: FlavourOption | null) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };
  console.log(selectedOption);

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
                  <NewSelect
                    label="Flavours"
                    selectedOption={selectedOption}
                    setSelectedOption={handleSelectChange}
                  />
                </Selections>
              </SelectAndInformation>
              <button onClick={handleAddToCart}>Add to cart</button>
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
  padding-left: 2rem;
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
