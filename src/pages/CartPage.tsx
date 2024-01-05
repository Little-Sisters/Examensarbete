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
          <div>
            <h1>Cart</h1>

            <OrderForm />
          </div>
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
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }

  h1 {
    display: none;
  }
`;

const MobileTitle = styled.h1`
  @media (min-width: 900) {
    display: none;
  }
`;

export default CartPage;
