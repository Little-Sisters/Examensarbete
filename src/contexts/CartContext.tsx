import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';
import { Product } from '../../data/productdata';
import { CartItem } from '../../data/productdata';

type CartContextType = {
  cartList: CartItem[];
  addToCart: (item: Product, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: (cart: CartItem[]) => void;
  totalItems: number;
};

const CartContext = createContext<CartContextType>({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  totalItems: 0,
});

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}

type Props = {
  children: React.ReactNode;
};

function calculateTotalItems(cartList: CartItem[]) {
  return cartList.reduce((total, item) => total + item.quantity, 0);
}

export function CartProvider({ children }: Props) {
  const [cartList, setCartList] = useLocalStorageState<CartItem[]>([], 'cart');

  const [totalItems, setTotalItems] = useState(calculateTotalItems(cartList));

  useEffect(() => {
    setTotalItems(calculateTotalItems(cartList));
  }, [cartList]);

  const addToCart = (item: Product, quantity: number) => {
    const existingCartItem = cartList.find(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingCartItem) {
      setCartList((prevCartList) =>
        prevCartList.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        ),
      );
    } else {
      setCartList([...cartList, { ...item, quantity: quantity }]);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartList((prevCartList) => {
      const itemIndex = prevCartList.findIndex(
        (cartItem) => cartItem.id === itemId,
      );
      if (itemIndex >= 0) {
        if (prevCartList[itemIndex].quantity > 1) {
          const updatedCartList = [...prevCartList];
          updatedCartList[itemIndex] = {
            ...updatedCartList[itemIndex],
            quantity: updatedCartList[itemIndex].quantity - 1,
          };
          return updatedCartList;
        } else {
          return prevCartList.filter((cartItem) => cartItem.id !== itemId);
        }
      } else {
        return prevCartList;
      }
    });
  };

  const clearCart = () => {
    setCartList([]);
    setTotalItems(0);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeFromCart, totalItems, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
