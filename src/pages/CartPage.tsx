import { Cart } from '../components/Cart';
import MarginTopContainer from '../components/MarginTopContainer';
import { OrderForm } from '../components/OrderForm';
import PageContentWrapper from '../components/PageContentWrapper';
import styled from 'styled-components';

function CartPage() {
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <h1>Cart</h1>
        <FlexContainer>
        <OrderForm />
        <Cart checkOutPage={true} />
        </FlexContainer>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const FlexContainer = styled.div`
display: flex;
flex-direction: row;
// TODO
// add mobile styling
// flex should be column and reversed
`

export default CartPage;
