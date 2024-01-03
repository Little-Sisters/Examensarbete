import { Link } from 'react-router-dom';
import MarginTopContainer from '../components/MarginTopContainer';
import { useProduct } from '../contexts/ProductContext';
import FakeProduct from '../components/FakeProduct';

function GalleryPage() {
  const { productList } = useProduct();
  return (
    <MarginTopContainer>
      <h1>GalleryPage</h1>
      <Link to="/products">uyutu</Link>
        {productList.map((product) => (
          <FakeProduct key={product.id} product={product} />
        ))}
    </MarginTopContainer>
  );
}

export default GalleryPage;
