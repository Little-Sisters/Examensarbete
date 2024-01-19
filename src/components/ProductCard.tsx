import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { Product } from '../../data/productdata';
import { TransparentButton } from './reusable components/Button';
import flowerOverlay from '/flowerOverlay.png';
import flowerOverlayDarkmode from '/flowerOverlayDarkmode.png';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
  product: Product;
  background: string;
}

function ProductCard({ product, background }: ProductProps) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.mode;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card background={background} theme={theme}>
      <Overlay theme={theme} />
      <ProductWrapper>
        <Link to={`/product/${product.id}`}>
          <StyledImg src={product.image} alt={product.imageAlt} />
          <h3>{product.title}</h3>
          <p>From ${product.price}</p>
          <h5>{product.description}</h5>
        </Link>
        <TransparentButton fullWidth title="Create" onPress={handleNavigate} />
      </ProductWrapper>
    </Card>
  );
}

const Card = styled.div<{ background: string; theme: string | undefined }>`
  color: ${({ theme }) => theme?.text};
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

const Overlay = styled.div<{ theme: string | undefined }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
  background-size: cover;
  mask: linear-gradient(to top, transparent, black);
  background-repeat: no-repeat;
  // Flower overlay for darkmode and lightmode. Lint somehom want this on 2 lines, but it needs to be 1, therefore the exception.
  // eslint-disable-next-line expectedts-styled-plugin(9999)
  background-image: url(${({ theme }) => theme === 'dark' ? flowerOverlayDarkmode : flowerOverlay});
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
