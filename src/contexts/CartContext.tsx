import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';
import { Product } from '../../data/productdata';
import { CartItem } from '../../data/productdata';
import { generateUniqueId } from './OrderContext';

type CartContextType = {
  cartList: CartItem[];
  addToCart: (item: Product, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: (cart: CartItem[]) => void;
  totalItems: number;
  updateCartItem: (itemId: string, updatedItem: CartItem) => void;
};

const CartContext = createContext<CartContextType>({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  totalItems: 0,
  updateCartItem: () => {},
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
    // Generate a unique ID for the new cart item
    const cartItemId = generateUniqueId();

    const existingCartItemIndex = cartList.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem?.flavour === item?.flavour &&
        cartItem?.tiers === item?.tiers &&
        cartItem?.colour === item?.colour &&
        cartItem?.decorations === item?.decorations &&
        cartItem?.topper === item?.topper,
    );

    if (existingCartItemIndex !== -1) {
      // If the item already exists in the cart, just update its quantity
      setCartList((prevCartList) => {
        const newCartList = [...prevCartList];
        newCartList[existingCartItemIndex].quantity += quantity;
        return newCartList;
      });
    } else {
      // If the item is new, add it to the cart with the unique ID
      setCartList([...cartList, { ...item, id: cartItemId, quantity }]);
    }
  };

  const updateCartItem = (itemId: string, updatedItem: Partial<CartItem>) => {
    setCartList(prevCartList =>
      prevCartList.map(item =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
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
      value={{ cartList, addToCart, removeFromCart, totalItems, clearCart, updateCartItem}}
    >
      {children}
    </CartContext.Provider>
  );
}
