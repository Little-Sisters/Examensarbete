import { Cart } from '../components/Cart';
import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import { OrderForm } from '../components/OrderForm';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import styled from 'styled-components';
import { useEffect } from 'react';

function CartPage() {
  useEffect(() => {
    document.title = 'Cart';
  }, []);
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
  justify-content: center;
  gap: 11rem;
  min-height: 80vh;
  width: 100%;

  h1 {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 1200px) {
    gap: 5rem;
  }

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
  width: 26rem;

  h1 {
    margin-bottom: 1rem;
  }

  @media (max-width: 900px) {
    width: 90%;
    align-items: center;
    justify-content: center;
  }
`;

const MobileTitle = styled.h1`
  text-align: center;
  @media (min-width: 900px) {
    display: none;
  }
`;

export default CartPage;
