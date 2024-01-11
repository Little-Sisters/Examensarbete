import React from 'react';
import styled from 'styled-components';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
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
    const { scrollYProgress } = useViewportScroll();
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
            <StyledText>Thank you {lastOrder?.contactInformation.name} for your order! Your
            order id is: #{lastOrder?.orderId}</StyledText>
            <StyledUnorderedList>
            {lastOrder?.itemList.map((cartItem) => (
              <li key={cartItem.id}>
                <div>
                  <div>
                    <StyledImage src={cartItem.image} alt={cartItem.imageAlt} />
                  </div>
                  <p>{cartItem.title}</p>
                  <p>${cartItem.quantity * cartItem.price}</p>
                  <p>Total: ${lastOrder?.totalPrice}</p>
                </div>
              </li>
            ))}
            </StyledUnorderedList>
            <StyledFlexCenter>
            <StyledLink href="/">
              <StyledButton type="button">Place another order</StyledButton>
            </StyledLink>
          </StyledFlexCenter>
        </StyledLetter>
    );
};

// Styled components
const StyledText = styled.p`
 font-size: 12px;
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

const StyledImage = styled.img`
height: 5rem;
width: 3rem;
`

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin-inline-start: 0;
  font-size: 12px;
`;

const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 2rem;
  border: none;
  font-size: 12px;
  cursor: pointer;
  &:hover {
  }
`;

export default Letter;
