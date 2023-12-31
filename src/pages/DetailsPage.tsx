import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import {
  ColourOption,
  DecorationsOption,
  FlavourOption,
  FrostingOption,
  TierOption,
  TopperOption,
  colourOptions,
  decorationsOptions,
  flavourOptions,
  frostingOptions,
  tierOptions,
  topperOptions,
} from '../components/select/data';
import NewSelect from '../components/select/newSelect';
import { useCart } from '../contexts/CartContext';
import { useProduct } from '../contexts/ProductContext';

function DetailsPage() {
  const { productList } = useProduct();
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productList.find((p) => p.id === id);

  const [errorMessage, setErrorMessage] = useState('');
  const [currentTotalPrice, setCurrentTotalPrice] = useState(product?.price || 0);
  
  const handleAddToCart = () => {
    if (product && product.id) {
      if (
        !selectedFlavour ||
        !selectedTier ||
        !selectedColour ||
        !selectedFrosting ||
        !selectedDecorations ||
        !selectedTopper
      ) {
        setErrorMessage(
          'Please select all required options before adding to cart',
        );
        return;
      }

      let extraPrice = 0;

    if (selectedFlavour && selectedFlavour.price) {
      extraPrice += selectedFlavour.price;
    }

    if (selectedTier && selectedTier.price) {
      extraPrice += selectedTier.price;
    }

    if (selectedColour && selectedColour.price) {
      extraPrice += selectedColour.price;
    }

    if (selectedFrosting && selectedFrosting.price) {
      extraPrice += selectedFrosting.price;
    }
    if (selectedDecorations && selectedDecorations.price) {
      extraPrice += selectedDecorations.price;
    }
    if (selectedTopper && selectedTopper.price) {
      extraPrice += selectedTopper.price;
    }
      const updatedProduct = {
        ...product,
        flavour: selectedFlavour?.value ?? null,
        tiers: selectedTier?.value ?? null,
        colour: selectedColour?.value ?? '',
        frosting: selectedFrosting?.value ?? '',
        decorations: selectedDecorations?.value ?? '',
        topper: selectedTopper?.value ?? '',
        price: product.price + extraPrice,
      };
      addToCart(updatedProduct, 1);
      setErrorMessage('');
      setSelectedFlavour(null);
      setSelectedTier(null);
      setSelectedColour(null);
      setSelectedFrosting(null);
      setSelectedDecorations(null);
      setSelectedTopper(null);
    } else {
      console.log('Product is undefined or missing an ID');
    }
  };

  // States for the different options
  const [selectedFlavour, setSelectedFlavour] = useState<FlavourOption | null>(
    null,
  );
  const [selectedTier, setSelectedTier] = useState<TierOption | null>(null);
  const [selectedColour, setSelectedColour] = useState<ColourOption | null>(
    null,
  );
  const [selectedFrosting, setSelectedFrosting] =
    useState<FrostingOption | null>(null);
  const [selectedDecorations, setSelectedDecorations] =
    useState<DecorationsOption | null>(null);
  const [selectedTopper, setSelectedTopper] = useState<TopperOption | null>(
    null,
  );

  // Sets the different options
  const handleTierChange = (selectedTier: TierOption | null) => {
    setSelectedTier(selectedTier);
    console.log(`Selected Tier: ${selectedTier?.value}`);
  };

  const handleSelectChange = (selectedFlavour: FlavourOption | null) => {

    setSelectedFlavour(selectedFlavour);
    console.log(`Selected Flavour: ${selectedFlavour?.value}`, selectedFlavour);
    calculateTotalPrice();
  };

  const handleColourChange = (selectedColour: ColourOption | null) => {
    setSelectedColour(selectedColour);
  };

  const handleFrostingChange = (selectedFrosting: FrostingOption | null) => {
    setSelectedFrosting(selectedFrosting);
  };

  const handleDecorationsChange = (
    selectedDecorations: DecorationsOption | null,
  ) => {
    setSelectedDecorations(selectedDecorations);
  };

  const handleTopperChange = (selectedTopper: TopperOption | null) => {
    setSelectedTopper(selectedTopper);
  };



  // Calculates the total price
  const calculateTotalPrice = useCallback(() => {
    let extraPrice = 0;
    if (selectedFlavour && selectedFlavour.price) {
      extraPrice += selectedFlavour.price;
    }
  
    if (selectedTier && selectedTier.price) {
      extraPrice += selectedTier.price;
    }

    if (selectedColour && selectedColour.price) {
      extraPrice += selectedColour.price;
    }

    if (selectedFrosting && selectedFrosting.price) {
      extraPrice += selectedFrosting.price;
    }

    if (selectedDecorations && selectedDecorations.price) {
      extraPrice += selectedDecorations.price;
    }
    if (selectedTopper && selectedTopper.price) {
      extraPrice += selectedTopper.price;
    }
    
    setCurrentTotalPrice((product?.price || 0) + extraPrice);
  }, [selectedFlavour, selectedTier, selectedColour, selectedFrosting, selectedDecorations, selectedTopper, product?.price]);
  

  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);
  

  

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
                  <p>${currentTotalPrice}</p>
                </Information>
                <Selections>
                  <NewSelect
                    label="Flavours"
                    placeholder="Select your flavour..."
                    options={flavourOptions}
                    selectedOption={selectedFlavour}
                    setSelectedOption={handleSelectChange}
                  />
                  <NewSelect
                    label="Tiers"
                    placeholder="Select number of tiers..."
                    options={tierOptions}
                    selectedOption={selectedTier}
                    setSelectedOption={handleTierChange}
                  />
                  <NewSelect
                    label="Colour"
                    placeholder="Select your colour..."
                    options={colourOptions}
                    selectedOption={selectedColour}
                    setSelectedOption={handleColourChange}
                  />
                  <NewSelect
                    label="Frosting"
                    placeholder="Select your frosting..."
                    options={frostingOptions}
                    selectedOption={selectedFrosting}
                    setSelectedOption={handleFrostingChange}
                  />
                  <NewSelect
                    label="Decorations"
                    placeholder="Select your decorations..."
                    options={decorationsOptions}
                    selectedOption={selectedDecorations}
                    setSelectedOption={handleDecorationsChange}
                  />
                  <NewSelect
                    label="Topper"
                    placeholder="Select your topper..."
                    options={topperOptions}
                    selectedOption={selectedTopper}
                    setSelectedOption={handleTopperChange}
                  />
                </Selections>
              </SelectAndInformation>
              <ButtonBox>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <CartButton onClick={handleAddToCart}>Add to cart</CartButton>
              </ButtonBox>
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

const ErrorMessage = styled.div`
  color: red;
  padding: 1rem 0rem;
`;
const CartButton = styled.button`
  width: 100%;
`;
const ButtonBox = styled.div`
  width: 100%;
`;

export default DetailsPage;
