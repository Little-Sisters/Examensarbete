import { Product } from '../../data/productdata';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface FakeProductProps {
  product: Product;
}

function FakeProduct({ product }: FakeProductProps) {
  const { addToCart } = useCart();

  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <h4>{product.title}</h4>
        <StyledImg src={product.image} alt={product.imageAlt} />
        <h5>{product.description}</h5>
        <p>Price: ${product.price}</p>
      </Link>
      <button onClick={() => addToCart(product, 1)}>Add to cart</button>
    </Card>
  );
}

const StyledImg = styled.img`
  height: 10rem;
  width: 6rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export default FakeProduct;
