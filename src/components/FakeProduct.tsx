import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Product } from '../../data/productdata';
import { useCart } from '../contexts/CartContext';
import TransparentButton from './TransparentButton';

interface FakeProductProps {
  product: Product;
}

function FakeProduct({ product }: FakeProductProps) {
  const { addToCart } = useCart();

  return (
    <Card
      style={{
        background: `linear-gradient(${product.backgroundColor}, #f9f5f3 99%)`,
      }}
    >
      <Link to={`/product/${product.id}`}>
        <StyledImg src={product.image} alt={product.imageAlt} />
        <h3>{product.title}</h3>
        <p>From ${product.price}</p>
        <h5>{product.description}</h5>
      </Link>
      <TransparentButton title="Create" onPress={() => addToCart(product, 1)} />
    </Card>
  );
}

const Card = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 3rem;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default FakeProduct;
