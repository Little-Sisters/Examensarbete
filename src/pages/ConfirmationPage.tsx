import styled from 'styled-components';
import { useOrder } from '../contexts/OrderContext';
import Letter from '../components/Letter';
import Envelope from '../components/Envelope';


function ConfirmationPage() {
  const { getLastOrder } = useOrder();
  const { lastOrder } = getLastOrder();
  console.log('Last order:', lastOrder);
  return (
    <StyledContainer>
      <Envelope>
        <Letter />
      </Envelope>
    </StyledContainer>
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
