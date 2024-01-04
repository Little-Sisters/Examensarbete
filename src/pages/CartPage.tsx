import { Cart } from '../components/Cart';
import MarginTopContainer from '../components/MarginTopContainer';
import { OrderForm } from '../components/OrderForm';
import PageContentWrapper from '../components/PageContentWrapper';

function CartPage() {
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <h1>Cart</h1>
        <Cart checkOutPage={true} />
        <OrderForm />
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

export default CartPage;
