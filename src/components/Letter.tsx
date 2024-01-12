import React from 'react';
import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useOrder } from '../contexts/OrderContext';
import { useCart } from '../contexts/CartContext';

// Generates unique number
// Checks if the number is already in use in Local Storage
// If it is, generate a new number
// If it isn't, store the number in Local Storage and return it
export function generateUniqueNumber(): number {
  const number = Math.floor(Math.random() * 90000) + 10000;
  if (localStorage.getItem(number.toString())) {
    return generateUniqueNumber();
  } else {
    localStorage.setItem(number.toString(), 'true');
    return number;
  }
}

const Letter: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100]);

  const { getLastOrder } = useOrder();
  const { cartList } = useCart();
  const { lastOrder } = getLastOrder();

  const totalPrice = cartList.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);
  console.log(totalPrice);

  return (
    <StyledLetter
      style={{
        scale: scaleAnim,
        y: yPosAnim,
      }}
    >
      <FlexCenter>
        <StyledText>Thank you,</StyledText>
        <StyledItem>For your order #{lastOrder?.orderId}</StyledItem>
      </FlexCenter>
      <StyledUnorderedList>
        {lastOrder?.itemList.map((cartItem) => (
          <li key={cartItem.id}>
            <Margin>
              <FlexRow>
                <StyledItem>{cartItem.title}</StyledItem>
                <StyledItem>${cartItem.quantity * cartItem.price}</StyledItem>
              </FlexRow>
              <FlexItems>
                <StyledProduct>{cartItem.tiers} Tier, </StyledProduct>
                <StyledProduct>{cartItem.colour}, </StyledProduct>
                <StyledProduct>{cartItem.flavour}, </StyledProduct>
                <StyledProduct>{cartItem.frosting}, </StyledProduct>
                <StyledProduct>{cartItem.decorations}, </StyledProduct>
                <StyledProduct>{cartItem.topper}</StyledProduct>
              </FlexItems>
            </Margin>
          </li>
        ))}
      </StyledUnorderedList>
      <FlexCenter>
        <Margin>
        <StyledItem>Total: ${lastOrder?.totalPrice}</StyledItem>
        </Margin>
      </FlexCenter>
    </StyledLetter>
  );
};

// Styled components
const StyledText = styled.p`
  font-size: 36px;
  font-family: 'Monsieur La Doulaise', cursive;
  margin: 1rem;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
`;

const FlexItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem;
`;

const Margin = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledItem = styled.p`
  font-size: 10px;
  padding: 0;
  margin: 0;
`;

const StyledProduct = styled.p`
  font-size: 10px;
  padding: 0;
  margin: 0;
  margin-right: 0.2rem;
`;

const StyledLetter = styled(motion.div)`
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  top: 0.5rem;
  left: 0.5rem;
  background-color: #f8efd5;
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;
  position: absolute;
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin-inline-start: 0;
  font-size: 12px;
`;

const StyledLink = styled.a`
  margin: auto;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const StyledButton = styled.button`
  width: 8rem;
  height: 1.5rem;
  border: none;
  font-size: 10px;
  cursor: pointer;
  &:hover {
  }
`;

export default Letter;
