import { createContext, PropsWithChildren, useContext } from 'react';
import { Product, products } from '../../data/productdata';
import { useLocalStorageState } from '../hooks/useLocalStorage';

// Defines the type for the context
type ProductContextType = {
  productList: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
};

// Creates the context
const ProductContext = createContext<ProductContextType>({
  productList: [],
  addProduct: () => {},
  removeProduct: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export function useProduct() {
  return useContext(ProductContext);
}

// Defines the props for the provider
export function ProductProvider({ children }: PropsWithChildren) {
  const [productList, setProductList] = useLocalStorageState<Product[]>(
    products,
    'products',
  );

  // Adds a product to the product list
  const addProduct = (product: Product) => {
    setProductList((prevProductList) => {
      const updatedProductList = [...prevProductList, product];
      return updatedProductList;
    });
  };

  // Removes a product from the product list
  const removeProduct = (id: string) => {
    setProductList((prevProductList) => {
      const itemIndex = prevProductList.findIndex(
        (product) => product.id === id,
      );

      if (itemIndex === -1) {
        // Product not found
        return prevProductList;
      }

      // Create a new array without the product to be removed
      const updatedProductList = [
        ...prevProductList.slice(0, itemIndex),
        ...prevProductList.slice(itemIndex + 1),
      ];

      return updatedProductList;
    });
  };
  return (
    <ProductContext.Provider value={{ productList, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
