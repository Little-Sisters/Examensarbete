export interface Product {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
  flavour: string | undefined | null;
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
    flavour: '',
  },
  {
    id: '2',
    image: '/transparent-cake.png',
    imageAlt: 'cake',
    title: 'Product Title 2',
    description: 'This is a product description 2',
    price: 600,
    flavour: '',
  },
];
