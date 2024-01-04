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
    <Card>
      <Link to={`/product/${product.id}`}>
        <StyledImg src={product.image} alt={product.imageAlt} />
        <h4>{product.title}</h4>
        <p>From ${product.price}</p>
        <h5>{product.description}</h5>
      </Link>
      <TransparentButton title="Create" onPress={() => addToCart(product, 1)} />
    </Card>
  );
}

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 3rem;
`;

const StyledImg = styled.img`
  height: 10rem;
  width: 6rem;
`;

export default FakeProduct;
