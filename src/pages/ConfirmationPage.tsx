import { useOrder } from '../contexts/OrderContext';
import MobileConfirmation from '../components/MobileConfirmation';
import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import useMobile from '../hooks/UseMobile';
import ConfirmOrder from '../components/ConfirmOrder';

function ConfirmationPage() {
  const { getLastOrder } = useOrder();
  const { lastOrder } = getLastOrder();
  const isMobile = useMobile(700);
  console.log('Last order:', lastOrder);

  return (
    <MarginTopContainer>
      <PageContentWrapper>
        {isMobile ? <MobileConfirmation /> : <ConfirmOrder />}
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

export default ConfirmationPage;
