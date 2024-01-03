import { Cart } from '../components/Cart';

function CartPage() {
  return (
    <>
      <h1>Cart</h1>
      <Cart checkOutPage={true} />
    </>
  );
}

export default CartPage;
