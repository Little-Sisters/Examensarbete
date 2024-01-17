import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';
import { Product } from '../../data/productdata';
import { CartItem } from '../../data/productdata';
import { toast } from 'react-toastify';
import { generateUniqueId } from '../functions/generateUniqueId';

// Defines the type for the context
type CartContextType = {
  cartList: CartItem[];
  addToCart: (item: Product, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: (cart: CartItem[]) => void;
  totalItems: number;
  updateCartItem: (itemId: string, updatedItem: CartItem) => void;
  isCartEmpty: boolean;
};

// Creates the context
const CartContext = createContext<CartContextType>({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  totalItems: 0,
  updateCartItem: () => {},
  isCartEmpty: true,
});

// Defines a custom hook that returns the context
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}

// Defines the props for the provider
type Props = {
  children: React.ReactNode;
};

// Calculates the total number of items in the cart
function calculateTotalItems(cartList: CartItem[]) {
  return cartList.reduce((total, item) => total + item.quantity, 0);
}

export function CartProvider({ children }: Props) {
  const [cartList, setCartList] = useLocalStorageState<CartItem[]>([], 'cart');
  const [totalItems, setTotalItems] = useState(calculateTotalItems(cartList));
  const [isCartEmpty, setIsCartEmpty] = useState(cartList.length === 0);

  // Updates the total number of items in the cart when the cartList changes
  // Also updates the isCartEmpty state
  useEffect(() => {
    setTotalItems(calculateTotalItems(cartList));
    setIsCartEmpty(cartList.length === 0);
  }, [cartList]);

  // Adds an item to the cart
  const addToCart = (item: Product, quantity: number) => {
    // Generate a unique ID for the new cart item
    const cartItemId = generateUniqueId();

    // Check if the item already exists in the cart
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
      setCartList([
        ...cartList,
        { ...item, id: cartItemId, quantity, basePrice: item.price },
      ]);
      toast.success(`${item.title} added to cart`);
    }
  };

  // Updates an item in the cart
  const updateCartItem = (itemId: string, updatedItem: Partial<CartItem>) => {
    setCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item,
      ),
    );
  };

  // Removes an item from the cart
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

  // Clears the cart
  const clearCart = () => {
    setCartList([]);
    setTotalItems(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeFromCart,
        totalItems,
        clearCart,
        updateCartItem,
        isCartEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
