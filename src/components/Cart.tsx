import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';
import { BsTrash3 } from 'react-icons/bs';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';

export function Cart() {
  const { addToCart, removeFromCart, cartList, clearCart } = useCart();

  const totalPrice = cartList.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);

  return (
    <StyledCard>
      <div>
        <StyledCardHeader>
          <StyledHeading>
            <h3>Here goes the logo</h3>
          </StyledHeading>
        </StyledCardHeader>
        <div>
          {cartList.length > 0 ? (
            <StyledUnorderedList>
              {cartList.map((cartItem) => (
                <li key={cartItem.id}>
                  <StyledCartItem>
                    <FlexCenter>
                      <StyledImage
                        src={cartItem.image}
                        alt={cartItem.imageAlt}
                      />
                      <FlexRow>
                        <h3>{cartItem.title}</h3>
                        <StyledButton onClick={() => clearCart(cartList)}>
                          <BsTrash3 />
                        </StyledButton>
                      </FlexRow>
                      <StyledButtons>
                        <StyledButton onClick={() => removeFromCart(cartItem.id)}>
                          <CiCircleMinus />
                        </StyledButton>
                        <p>{cartItem.quantity}</p>
                        <StyledButton onClick={() => addToCart(cartItem, 1)}>
                          <CiCirclePlus />
                        </StyledButton>
                      </StyledButtons>
                    </FlexCenter>
                    <FlexRow>
                      <StyledItem>Quantity:</StyledItem>
                      <StyledItem>1</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Tiers:</StyledItem>
                      <StyledItem>1</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Color:</StyledItem>
                      <StyledItem>1</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Cake sponge:</StyledItem>
                      <StyledItem>1</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Frosting:</StyledItem>
                      <StyledItem>1</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Decorations:</StyledItem>
                      <StyledItem>1</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Topper:</StyledItem>
                      <StyledItem>1</StyledItem>
                    </FlexRow>
                    <p>${cartItem.quantity * cartItem.price}</p>
                  </StyledCartItem>
                </li>
              ))}
            </StyledUnorderedList>
          ) : (
            <StyledHeading>Your cart is empty!</StyledHeading>
          )}
        </div>
        <StyledCardFooter>
          <StyledDivider />
          <StyledFlexFooter>
            <button>edit</button>
            <FlexRow>
              <p>Total:</p>
              <p>${totalPrice}</p>
            </FlexRow>
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
  width: 20rem;
`;

const Size = styled.div`
height: 3rem;
width: 3rem;
`

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledHeading = styled.h3`
  text-align: center;
`;

const StyledUnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
`;

const StyledCartItem = styled.div``;

const StyledImage = styled.img`
  height: 10rem;
  width: 7rem;
`;

const StyledButtons = styled.div`
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

const StyledItem = styled.p`
  font-size: 12px;
  margin: 0.3rem;
  padding: 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledCardFooter = styled.div`
  padding: 1rem;
`;

const StyledDivider = styled.hr``;

const StyledFlexFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
