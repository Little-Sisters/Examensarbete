import { useParams } from 'react-router-dom';
import FakeProduct from '../components/FakeProduct';
import { useProduct } from '../contexts/ProductContext';

function DetailsPage() {
  const { productList } = useProduct();
  const { id } = useParams();

  const product = productList.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <h1>Details Page</h1>
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Details Page</h1>
      <FakeProduct product={product} />
    </div>
  );
}

export default DetailsPage;
