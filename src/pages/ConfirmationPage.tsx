import styled from 'styled-components';
import { useOrder } from '../contexts/OrderContext';
import Letter from '../components/Letter';
import Envelope from '../components/Envelope';
import MobileConfirmation from '../components/MobileConfirmation';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import useMobile from '../hooks/UseMobile';

function ConfirmationPage() {
  const { getLastOrder } = useOrder();
  const { lastOrder } = getLastOrder();
  const isMobile = useMobile(700);
  console.log('Last order:', lastOrder);

  return (
    <MarginTopContainer>
      <PageContentWrapper>
      {isMobile ? (
          <MobileConfirmation />
        ) : (
          <StyledContainer>
            <Envelope>
              <Letter />
            </Envelope>
          </StyledContainer>
        )}
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const StyledContainer = styled.div`
  margin: 2rem auto;
  border-radius: 0.625rem;
  padding: 1rem;
  overflow-y: scroll;
  height: 60vh;
`;

export default ConfirmationPage;
