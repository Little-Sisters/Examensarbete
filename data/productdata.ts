export interface Product {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
  backgroundColor: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: '1',
    image: '/transparent-cake.png',
    imageAlt: 'cake',
    title: 'Product Title',
    description: 'This is a product description',
    price: 300,
    backgroundColor: '#E7E2DF',
  },
  {
    id: '2',
    image: '/transparent-cake.png',
    imageAlt: 'cake',
    title: 'Product Title 2',
    description: 'This is a product description 2',
    price: 600,
    backgroundColor: '#F5EDDD',
  },
];
