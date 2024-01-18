import { useOrder } from '../contexts/OrderContext';
import MobileConfirmation from '../components/MobileConfirmation';
import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import useMobile from '../hooks/UseMobile';
import ConfirmOrder from '../components/ConfirmOrder';
import { useEffect } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Footer from '../components/Footer';

function ConfirmationPage() {
  const { getLastOrder } = useOrder();
  const { lastOrder } = getLastOrder();
  const isMobile = useMobile(700);
  console.log('Last order:', lastOrder);

  useScrollToTop();

  // Sets the page title
  useEffect(() => {
    document.title = 'Confirmation';
  }, []);

  // Renders the ConfirmOrder component if on desktop and renders MobileConfirmation component if on mobile
  return (
    <div>
      <MarginTopContainer>
        <PageContentWrapper>
          {isMobile ? <MobileConfirmation /> : <ConfirmOrder />}
        </PageContentWrapper>
      </MarginTopContainer>
      <Footer />
    </div>
  );
}

export default ConfirmationPage;
