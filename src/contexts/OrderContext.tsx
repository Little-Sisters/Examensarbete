import { createContext, useContext } from 'react';
import { CartItem } from '../../data/productdata';
import { useCart } from './CartContext';
import { Customer } from '../components/OrderForm';
import { useLocalStorageState } from '../hooks/useLocalStorage';

/* eslint-disable react-refresh/only-export-components */

// Type definitions for OrderContext - individual order
type Order = {
  itemList: CartItem[];
  contactInformation: Customer;
  orderId: string;
  totalPrice: number;
};

// Specifies the available functions in OrderContext
type OrderContextType = {
  orderList: Order[];
  addOrder: (order: Order) => void;
  createOrder: (customer: Customer) => Order;
  getLastOrder: () => { lastOrder: Order | undefined; ordersCopy: Order[] };
};

// Default values for OrderContext and methods
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
      termsAccepted: false,
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

// Generates a unique id string for each order
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

  // Create new order based on customer information and cart items
  // Calculates total price of order
  // Generates unique order id
  // Clears cart
  const createOrder = (customer: Customer) => {
    const itemList = cartList;

    const totalPrice = itemList.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    const orderId = generateUniqueId();
    const contactInformation = customer;
    const newOrder = { itemList, contactInformation, orderId, totalPrice };
    addOrder(newOrder);
    clearCart(cartList);

    return newOrder;
  };

  // Adds order to orderList
  const addOrder = (order: Order) => {
    setOrderList((prevOrderList) => {
      const updatedOrderList = [...prevOrderList, order];
      return updatedOrderList;
    });
  };

  // Retrieves the last order from the order list
  const getLastOrder = (): {
    lastOrder: Order | undefined;
    ordersCopy: Order[];
  } => {
    const ordersCopy = [...orderList];
    const lastOrder = ordersCopy.pop();
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
