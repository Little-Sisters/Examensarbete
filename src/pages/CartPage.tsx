import { Cart } from '../components/Cart';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';

function CartPage() {
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <h1>Cart</h1>
        <Cart checkOutPage={true} />
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

export default CartPage;
