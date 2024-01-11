import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';
import { useOrder } from '../contexts/OrderContext';
import Envelope from './Envelope';
import Letter from './Letter';
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

export function OrderConfirmation() {
  const { getLastOrder } = useOrder();
  const { cartList } = useCart();
  const { lastOrder } = getLastOrder();

  const totalPrice = cartList.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);
  console.log(totalPrice);

  return (
    <StyledCard>
      <StyledVH>
          <Envelope>
            <Letter />
          </Envelope>
          </StyledVH>
      <StyledFlex>
        <StyledCardHeader>
          <StyledHeading>
            Thank you {lastOrder?.contactInformation.name} for your order! Your
            order id is: #{lastOrder?.orderId}
          </StyledHeading>  
        </StyledCardHeader>
        <StyledCardBody>
          <StyledUnorderedList>
            {lastOrder?.itemList.map((cartItem) => (
              <li key={cartItem.id}>
                <div>
                  <p>{cartItem.quantity} x</p>
                  <div>
                    <img src={cartItem.image} alt={cartItem.imageAlt} />
                  </div>
                  <p>{cartItem.title}</p>
                  <p>${cartItem.quantity * cartItem.price}</p>
                </div>
              </li>
            ))}
          </StyledUnorderedList>
        </StyledCardBody>
        <StyledCardFooter>
          <StyledCenter>
          </StyledCenter>
            <StyledText>Total: ${lastOrder?.totalPrice}</StyledText>
        </StyledCardFooter>
      </StyledFlex>
    </StyledCard>
  );
}

const StyledVH = styled.div`
height: 200vh;
`

// Styled components
const StyledCard = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  padding: 1rem;
  position: relative;
`;

const StyledFlex = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.25rem;
`;

const StyledCardHeader = styled.div`
  padding: 5px;
`;

const StyledHeading = styled.h2`
  padding: 15px;
  font-size: 1.5rem;
`;

const StyledCardBody = styled.div`
  width: 100%;
  padding: 0;
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin-inline-start: 0;
`;

const StyledCardFooter = styled.div`
  width: 100%;
  display: block;
  padding: 0;
`;

const StyledCenter = styled.div`
  text-align: center;
`;

const StyledText = styled.p`
  // Your styles here
`;

// const StyledFlex = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
