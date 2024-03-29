import { useEffect, useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import { CiCircleMinus, CiCirclePlus, CiEdit } from 'react-icons/ci';
import styled from 'styled-components';
import { Product } from '../../data/productdata';
import { useCart } from '../contexts/CartContext';
import CartModelViewer from './CartModelViewer';
import Logo from './reusable components/Logo';
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
} from './select/data';
import NewSelect from './select/newSelect';
import CartModelEditViewer from './CartModelEditViewer';
import { calculateItemPrice } from '../functions/calculateItemPrice';
import { toast } from 'react-toastify';
import { FilledButton } from './reusable components/Button';

// Cart item interface
export interface CartItem extends Product {
  quantity: number;
  editedFlavour?: string;
  basePrice: number;
  totalPrice?: number;
}

export function Cart() {
  const { addToCart, removeFromCart, cartList, clearCart, updateCartItem } =
    useCart();
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editFlavour, setEditFlavour] = useState<FlavourOption | null>(null);
  const [editTiers, setEditTiers] = useState<TierOption | null>(null);
  const [editColour, setEditColour] = useState<ColourOption | null>(null);
  const [editFrosting, setEditFrosting] = useState<FrostingOption | null>(null);
  const [editDecorations, setEditDecorations] =
    useState<DecorationsOption | null>(null);
  const [editTopper, setEditTopper] = useState<TopperOption | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  //  Handles the click event when editing a cart item.
  //  Sets the editing item ID and updates the edit options for flavour, tiers, colour, frosting, decorations, and topper.
  const handleEditClick = (cartItem: CartItem) => {
    setEditingItemId(cartItem.id);

    // Set the edit options for flavour, tiers, colour, frosting, decorations, and topper based on the cart item values
    const flavourOption = flavourOptions.find(
      (option) => option.value === cartItem.flavour,
    );
    setEditFlavour(flavourOption || null);

    const tierOption = tierOptions.find(
      (option) => option.value === cartItem.tiers,
    );
    setEditTiers(tierOption || null);

    const colourOption = colourOptions.find(
      (option) => option.value === cartItem.colour,
    );
    setEditColour(colourOption || null);

    const frostingOption = frostingOptions.find(
      (option) => option.value === cartItem.frosting,
    );
    setEditFrosting(frostingOption || null);

    const decorationsOption = decorationsOptions.find(
      (option) => option.value === cartItem.decorations,
    );
    setEditDecorations(decorationsOption || null);

    const topperOption = topperOptions.find(
      (option) => option.value === cartItem.topper,
    );
    setEditTopper(topperOption || null);
  };

  // Clears the cart and displays a toast message
  const handleClearCart = () => {
    clearCart(cartList);
    toast.success('Cart emptied');
  };

  // Handles the save edit functionality when updating a cart item.
  // Calculates the extra price based on the selected edit options for flavour, tiers, colour, frosting, decorations, and topper.
  // Creates an updated cart item with the new values and updates the cart with the updated item.
  // Resets the editing state and updates the total price.
  // Displays a success toast message with the updated cart item's title.
  const handleSaveEdit = () => {
    if (!editingItemId) return;

    // Find the cart item to be updated
    const cartItemToUpdate = cartList.find((item) => item.id === editingItemId);
    if (!cartItemToUpdate) return;

    let extraPrice = 0;
    extraPrice += editFlavour?.price || 0;
    extraPrice += editTiers?.price || 0;
    extraPrice += editColour?.price || 0;
    extraPrice += editFrosting?.price || 0;
    extraPrice += editDecorations?.price || 0;
    extraPrice += editTopper?.price || 0;

    // Create an updated item with new values
    const updatedCartItem = {
      ...cartItemToUpdate,
      flavour: editFlavour ? editFlavour.value : cartItemToUpdate.flavour,
      tiers: editTiers ? editTiers.value : cartItemToUpdate.tiers,
      colour: editColour ? editColour.value : cartItemToUpdate.colour,
      frosting: editFrosting ? editFrosting.value : cartItemToUpdate.frosting,
      decorations: editDecorations
        ? editDecorations.value
        : cartItemToUpdate.decorations,
      topper: editTopper ? editTopper.value : cartItemToUpdate.topper,
      extrasPrice: extraPrice,
      totalPrice: cartItemToUpdate.basePrice + extraPrice,
    };

    // Update the cart
    updateCartItem(editingItemId, updatedCartItem);

    // Reset the editing state
    setEditingItemId(null);
    setEditFlavour(null);
    setEditTiers(null);
    setEditColour(null);
    setEditFrosting(null);
    setEditDecorations(null);
    setEditTopper(null);
    updateTotalPrice();
    toast.success(`${cartItemToUpdate.title} updated`);
  };

  //  Updates the total price of the cart based on the quantity and price of each cart item.
  const updateTotalPrice = () => {
    const newTotalPrice = cartList.reduce((total, cartItem) => {
      return total + cartItem.quantity * calculateItemPrice(cartItem);
    }, 0);
    setTotalPrice(newTotalPrice);
  };

  // Updates the total price when the cart list is updated.
  useEffect(() => {
    console.log('Cart List Updated:', cartList);
    updateTotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartList]);

  return (
    <StyledCard>
      <div>
        <StyledLogo>
          <Logo width="3rem" mobileWidth="3rem" />
        </StyledLogo>
        <div>
          {cartList.length > 0 ? (
            <StyledUnorderedList>
              {cartList.map((cartItem) => (
                <li key={cartItem.id}>
                  <StyledCartItem>
                    <FlexCenter>
                      <StyledImage>
                        {editingItemId === cartItem.id ? (
                          <CartModelEditViewer
                            selectedTier={editTiers}
                            selectedColor={editColour}
                            selectedDecorations={editDecorations}
                            selectedTopper={editTopper}
                          />
                        ) : (
                          <CartModelViewer
                            selectedTier={cartItem.tiers}
                            selectedColor={cartItem.colour}
                            selectedDecorations={cartItem.decorations}
                            selectedTopper={cartItem.topper}
                          />
                        )}
                      </StyledImage>
                      <FlexRow>
                        <h3>{cartItem.title}</h3>
                        {editingItemId === cartItem.id ? (
                          <div></div>
                        ) : (
                          <StyledEdit onClick={() => handleEditClick(cartItem)}>
                            <CiEdit />
                          </StyledEdit>
                        )}
                      </FlexRow>
                      <StyledButtons>
                        <StyledButton
                          onClick={() => removeFromCart(cartItem.id)}
                        >
                          <CiCircleMinus />
                        </StyledButton>
                        <p>{cartItem.quantity}</p>
                        <StyledButton onClick={() => addToCart(cartItem, 1)}>
                          <CiCirclePlus />
                        </StyledButton>
                      </StyledButtons>
                    </FlexCenter>
                    {editingItemId === cartItem.id ? (
                      <MarginBottom>
                        <NewSelect
                          placeholder="select number of tiers"
                          label="Tiers"
                          options={tierOptions}
                          selectedOption={editTiers}
                          setSelectedOption={(option: TierOption | null) =>
                            setEditTiers(option)
                          }
                        />
                      </MarginBottom>
                    ) : (
                      <FlexRow>
                        <StyledItem>Tiers:</StyledItem>
                        <StyledItem>{cartItem.tiers}</StyledItem>
                      </FlexRow>
                    )}
                    {editingItemId === cartItem.id ? (
                      <MarginBottom>
                        <NewSelect
                          placeholder="select colour"
                          label="Color"
                          options={colourOptions}
                          selectedOption={editColour}
                          setSelectedOption={(option: ColourOption | null) =>
                            setEditColour(option)
                          }
                        />
                      </MarginBottom>
                    ) : (
                      <FlexRow>
                        <StyledItem>Color:</StyledItem>
                        <StyledItem>{cartItem.colour}</StyledItem>
                      </FlexRow>
                    )}
                    {editingItemId === cartItem.id ? (
                      <MarginBottom>
                        <NewSelect
                          placeholder="select a flavour"
                          label="Flavor"
                          options={flavourOptions}
                          selectedOption={editFlavour}
                          setSelectedOption={(option: FlavourOption | null) =>
                            setEditFlavour(option)
                          }
                        />
                      </MarginBottom>
                    ) : (
                      <FlexRow>
                        <StyledItem>Flavor:</StyledItem>
                        <StyledItem>{cartItem.flavour}</StyledItem>
                      </FlexRow>
                    )}
                    {editingItemId === cartItem.id ? (
                      <MarginBottom>
                        <NewSelect
                          placeholder="select frosting"
                          label="Frosting"
                          options={frostingOptions}
                          selectedOption={editFrosting}
                          setSelectedOption={(option: FrostingOption | null) =>
                            setEditFrosting(option)
                          }
                        />
                      </MarginBottom>
                    ) : (
                      <FlexRow>
                        <StyledItem>Frosting:</StyledItem>
                        <StyledItem>{cartItem.frosting}</StyledItem>
                      </FlexRow>
                    )}
                    {editingItemId === cartItem.id ? (
                      <MarginBottom>
                        <NewSelect
                          placeholder="select decorations"
                          label="Decorations"
                          options={decorationsOptions}
                          selectedOption={editDecorations}
                          setSelectedOption={(
                            option: DecorationsOption | null,
                          ) => setEditDecorations(option)}
                        />
                      </MarginBottom>
                    ) : (
                      <FlexRow>
                        <StyledItem>Decorations:</StyledItem>
                        <StyledItem>{cartItem.decorations}</StyledItem>
                      </FlexRow>
                    )}
                    {editingItemId === cartItem.id ? (
                      <NewSelect
                        placeholder="select topper"
                        label="Topper"
                        options={topperOptions}
                        selectedOption={editTopper}
                        setSelectedOption={(option: TopperOption | null) =>
                          setEditTopper(option)
                        }
                      />
                    ) : (
                      <FlexRow>
                        <StyledItem>Topper:</StyledItem>
                        <StyledItem>{cartItem.topper}</StyledItem>
                      </FlexRow>
                    )}
                    <FlexRight>
                      <StyledItem>{cartItem.quantity}x</StyledItem>
                      <StyledItem>
                        ${cartItem.quantity * calculateItemPrice(cartItem)}
                      </StyledItem>
                    </FlexRight>
                    {editingItemId === cartItem.id && (
                      <StyledCenter>
                        <FilledButton
                          title="Save"
                          onPress={() => handleSaveEdit()}
                          fullWidth={false}
                        />
                      </StyledCenter>
                    )}
                  </StyledCartItem>
                  <StyledDivider></StyledDivider>
                </li>
              ))}
            </StyledUnorderedList>
          ) : (
            <EmptyCart>
              <FlexCenter>
                <h3>Your cart is empty!</h3>
              </FlexCenter>
              <StyledDivider></StyledDivider>
            </EmptyCart>
          )}
        </div>
        <StyledCardFooter>
          <StyledFlexFooter>
            <StyledTrash onClick={() => handleClearCart()}>
              <BsTrash3 />
            </StyledTrash>

            <FlexGap>
              <p>Total:</p>
              <p>${totalPrice}</p>
            </FlexGap>
          </StyledFlexFooter>
        </StyledCardFooter>
      </div>
    </StyledCard>
  );
}

// Styled components here
const StyledCard = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  width: 35%;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const MarginBottom = styled.div`
  margin-bottom: 0.5rem;
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 3px;
  padding: 1rem;
`;

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledUnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
`;

const StyledCartItem = styled.div`
  padding-bottom: 1rem;
`;

const StyledImage = styled.div`
  height: 12rem;
  width: 100%;
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const StyledEdit = styled.button`
  background: none;
  border: none;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const StyledTrash = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const StyledDivider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;

const StyledItem = styled.p`
  font-size: 14px;
  margin: 0.3rem;
  padding: 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.5rem;
`;

const FlexGap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledCardFooter = styled.div`
  padding: 1rem;
  padding-top: 0rem;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
`;

const StyledFlexFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EmptyCart = styled.div`
  padding: 1rem;
`;
