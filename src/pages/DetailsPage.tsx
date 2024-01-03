import { useParams } from 'react-router-dom';
import FakeProduct from '../components/FakeProduct';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import { useProduct } from '../contexts/ProductContext';

function DetailsPage() {
  const { productList } = useProduct();
  const { id } = useParams();

  const product = productList.find((p) => p.id === id);

  if (!product) {
    return (
      <MarginTopContainer>
        <PageContentWrapper>
          <div>
            <h1>Details Page</h1>
            <p>Product not found</p>
          </div>
        </PageContentWrapper>
      </MarginTopContainer>
    );
  }

  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <div>
          <h1>Details Page</h1>
          <FakeProduct product={product} />
        </div>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

export default DetailsPage;
