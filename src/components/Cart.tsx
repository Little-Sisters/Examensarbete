import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';
import { BsTrash3 } from 'react-icons/bs';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';

export function Cart({ checkOutPage = true }) {
  const { addToCart, removeFromCart, cartList, clearCart } = useCart();

  const totalPrice = cartList.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);

  return (
    <StyledCard>
      <StyledFlex>
        <StyledCardHeader>
          <StyledHeading>{checkOutPage ? 'Cart' : 'Cart'}</StyledHeading>
          <StyledIconButton onClick={() => clearCart(cartList)}>
            <BsTrash3 />
          </StyledIconButton>
        </StyledCardHeader>
        <StyledCardBody>
          {cartList.length > 0 ? (
            <StyledUnorderedList>
              {cartList.map((cartItem) => (
                <StyledListItem key={cartItem.id}>
                  <StyledCartItem>
                    {checkOutPage && (
                      <StyledImage
                        src={cartItem.image}
                        alt={cartItem.imageAlt}
                      />
                    )}
                    <StyledButtons>
                      <StyledButton onClick={() => removeFromCart(cartItem.id)}>
                        <CiCircleMinus />
                      </StyledButton>
                      <StyledText>{cartItem.quantity}</StyledText>
                      <StyledButton onClick={() => addToCart(cartItem, 1)}>
                        <CiCirclePlus />
                      </StyledButton>
                    </StyledButtons>
                    <StyledText>{cartItem.title}</StyledText>
                    <StyledText>
                      ${cartItem.quantity * cartItem.price}
                    </StyledText>
                  </StyledCartItem>
                </StyledListItem>
              ))}
            </StyledUnorderedList>
          ) : (
            <StyledHeading>Your cart is empty!</StyledHeading>
          )}
        </StyledCardBody>
        <StyledCardFooter>
          <StyledDivider />
          <StyledFlexFooter>
            <StyledText>Total:</StyledText>
            <StyledText>${totalPrice}</StyledText>
          </StyledFlexFooter>
          {!checkOutPage && (
            <StyledLink to="/checkout">
              <StyledOrderButton>Order</StyledOrderButton>
            </StyledLink>
          )}
        </StyledCardFooter>
      </StyledFlex>
    </StyledCard>
  );
}

// Styled components here
const StyledCard = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  margin: 1rem;
  width: 20rem;
`;

const StyledFlex = styled.div``;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledHeading = styled.h3`
  text-align: center;
`;

const StyledIconButton = styled.button`
  /* Replace buttonStyle */
`;

const StyledCardBody = styled.div`
  /* Replace CardBody styles */
`;

const StyledUnorderedList = styled.ul`
  list-style: none;
`;

const StyledListItem = styled.li`
  /* Replace ListItem styles */
`;

const StyledCartItem = styled.div`
  /* Replace cartItemStyle */
`;

const StyledImage = styled.img`
  height: 10rem;
  width: 7rem;
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  /* Replace incrementButtonStyle */
`;

const StyledText = styled.p`
  /* Replace Text styles */
`;

const StyledCardFooter = styled.div`
  /* Replace CardFooter styles */
`;

const StyledDivider = styled.hr`
  /* Add your Divider styles */
`;

const StyledFlexFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  /* Add your Link styles */
`;

const StyledOrderButton = styled.button`
  /* Replace orderButtonStyle */
`;

// Add more styled components as needed
