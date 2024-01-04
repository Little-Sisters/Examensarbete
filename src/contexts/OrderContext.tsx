import { createContext, useContext } from 'react';
import { CartItem } from '../../data/productdata';
import { useCart } from './CartContext';
import { Customer } from '../components/OrderForm';
import { useLocalStorageState } from '../hooks/useLocalStorage';

type Order = {
  itemList: CartItem[];
  contactInformation: Customer;
  orderId: string;
  totalPrice: number;
};

type OrderContextType = {
  orderList: Order[];
  addOrder: (order: Order) => void;
  createOrder: (customer: Customer) => Order;
  getLastOrder: () => { lastOrder: Order | undefined; ordersCopy: Order[] };
};

const OrderContext = createContext<OrderContextType>({
  orderList: [],
  createOrder: () => ({
    itemList: [],
    contactInformation: {
      name: '',
      email: '',
      phone: '',
      street: '',
      zipCode: '',
      city: '',
    },
    orderId: '',
    totalPrice: 0,
  }),
  addOrder: () => {},
  getLastOrder: () => ({ lastOrder: undefined, ordersCopy: [] }),
});

export function useOrder() {
  return useContext(OrderContext);
}

type Props = {
  children: React.ReactNode;
};

export function generateUniqueId(): string {
    const timestamp = new Date().getTime();
    const randomValue = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${randomValue}`;
  }

export function OrderProvider({ children }: Props) {
  const { cartList, clearCart } = useCart();

  const [orderList, setOrderList] = useLocalStorageState<Order[]>(
    [],
    'orderList',
  );

  const createOrder = (customer: Customer) => {
    const itemList = cartList;
    console.log('cart items:', itemList)

    const totalPrice = itemList.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    const orderId = generateUniqueId();
    console.log('orderId:', orderId);
    const contactInformation = customer;
    const newOrder = { itemList, contactInformation, orderId, totalPrice };
    console.log('New Order:', newOrder);
    addOrder(newOrder);
    clearCart(cartList);

    return newOrder;
  };

  const addOrder = (order: Order) => {
    setOrderList((prevOrderList) => {
      const updatedOrderList = [...prevOrderList, order];
      console.log('Updated order list:', updatedOrderList);  
      return updatedOrderList;
    });
  };

  const getLastOrder = (): {
    lastOrder: Order | undefined;
    ordersCopy: Order[];
  } => {
    const ordersCopy = [...orderList];
    const lastOrder = ordersCopy.pop();
    console.log('lastOrder:', lastOrder);
    return { lastOrder, ordersCopy };
  };

  return (
    <OrderContext.Provider
      value={{ orderList, createOrder, addOrder, getLastOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
}
