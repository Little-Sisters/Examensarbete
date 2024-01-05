import { Cart } from '../components/Cart';
import MarginTopContainer from '../components/MarginTopContainer';
import { OrderForm } from '../components/OrderForm';
import PageContentWrapper from '../components/PageContentWrapper';
import styled from 'styled-components';

function CartPage() {
  return (
    <MarginTopContainer>
      <PageContentWrapper>
      <MobileTitle>Cart</MobileTitle>
        <FlexContainer>
          <FlexBox>
            <h1>Cart</h1>
            <OrderForm />
          </FlexBox>
          <Cart />
        </FlexContainer>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;

    h1 {
      display: none;
    }
  }
`;

const FlexBox = styled.div`
display: flex;
flex-direction: column;
`

const MobileTitle = styled.h1`
  @media (min-width: 901px) {
    display: none;
  }
`;


export default CartPage;
