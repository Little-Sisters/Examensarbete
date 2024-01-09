import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Product } from '../../data/productdata';
import { useCart } from '../contexts/CartContext';
import TransparentButton from './TransparentButton';

interface ProductProps {
  product: Product;
  background: string;
}

function ProductCard({ product, background }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <Card background={background}>
      <Overlay></Overlay>
      <ProductWrapper>
        <Link to={`/product/${product.id}`}>
          <StyledImg src={product.image} alt={product.imageAlt} />
          <h3>{product.title}</h3>
          <p>From ${product.price}</p>
          <h5>{product.description}</h5>
        </Link>
        <TransparentButton
          title="Create"
          onPress={() => addToCart(product, 1)}
        />
      </ProductWrapper>
    </Card>
  );
}

const Card = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ background }) => background};
  border-radius: 3px;
  padding: 3rem;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

// Flower overlay on top of product card
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  mask: linear-gradient(to top, transparent, black);
  background-image: url('flowerOverlay.png');
  z-index: 1;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
`;

const ProductWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const StyledImg = styled.img`
  width: 60%;
  display: flex;
  margin: auto;
`;

export default ProductCard;
