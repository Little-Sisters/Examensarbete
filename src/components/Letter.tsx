import React from 'react';
import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useOrder } from '../contexts/OrderContext';
import { calculateItemPrice } from './calculateItemPrice';
/* eslint-disable react-refresh/only-export-components */

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
  const { lastOrder } = getLastOrder();

  const totalPrice =
    lastOrder?.itemList.reduce((total, cartItem) => {
      return total + cartItem.quantity * calculateItemPrice(cartItem);
    }, 0) || 0;

  return (
    <StyledLetter
      style={{
        scale: scaleAnim,
        y: yPosAnim,
      }}
    >
      <FlexCenter>
        <StyledTitle>Thank you,</StyledTitle>
        <StyledItem>For your order #{lastOrder?.orderId}</StyledItem>
      </FlexCenter>
      <StyledUnorderedList>
        {lastOrder?.itemList.map((cartItem) => (
          <li key={cartItem.id}>
            <Margin>
              <FlexRow>
                <StyledItem>{cartItem.title}</StyledItem>
                <StyledItem>
                  ${cartItem.quantity * calculateItemPrice(cartItem)}
                </StyledItem>
              </FlexRow>
              <FlexItems>
                <StyledProduct>{cartItem.tiers} tier, </StyledProduct>
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
          <StyledItem>Total: ${totalPrice}</StyledItem>
        </Margin>
      </FlexCenter>
    </StyledLetter>
  );
};

// Styled components
const StyledTitle = styled.p`
  font-size: 36px;
  font-family: 'Monsieur La Doulaise', cursive;
  margin: 1rem;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  font-size: 12px;
  padding: 0;
  margin: 0;
`;

const StyledProduct = styled.p`
  font-size: 12px;
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
  border: 1px solid ${({ theme }) => theme.text};
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin-inline-start: 0;
  font-size: 12px;
`;

export default Letter;
