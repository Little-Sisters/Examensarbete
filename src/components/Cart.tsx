import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';
import { BsTrash3 } from 'react-icons/bs';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import Logo from './Logo';

export function Cart() {
  const { addToCart, removeFromCart, cartList, clearCart } = useCart();

  const totalPrice = cartList.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);

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
                      <StyledImage
                        src={cartItem.image}
                        alt={cartItem.imageAlt}
                      />
                      <h3>{cartItem.title}</h3>
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
                    <FlexRow>
                      <StyledItem>Tiers:</StyledItem>
                      <StyledItem>{cartItem.tiers}</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Color:</StyledItem>
                      <StyledItem>{cartItem.colour}</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Flavour:</StyledItem>
                      <StyledItem>{cartItem.flavour}</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Frosting:</StyledItem>
                      <StyledItem>{cartItem.frosting}</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Decorations:</StyledItem>
                      <StyledItem>{cartItem.decorations}</StyledItem>
                    </FlexRow>
                    <FlexRow>
                      <StyledItem>Topper:</StyledItem>
                      <StyledItem>{cartItem.topper}</StyledItem>
                    </FlexRow>
                    <FlexRight>
                      <StyledItem>{cartItem.quantity}x</StyledItem>
                      <StyledItem>
                        ${cartItem.quantity * cartItem.price}
                      </StyledItem>
                    </FlexRight>
                  </StyledCartItem>
                </li>
              ))}
            </StyledUnorderedList>
          ) : (
            <FlexCenter>
              <h3>Your cart is empty!</h3>
            </FlexCenter>
          )}
        </div>
        <StyledCardFooter>
          <StyledDivider></StyledDivider>
          <StyledFlexFooter>
            <StyledTrash onClick={() => clearCart(cartList)}>
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
  width: 20rem;
  border-radius: 3px;
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20rem;
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
  margin-right: 0.3rem;
  margin-left: 0.3rem;
`;

const StyledFlexFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
