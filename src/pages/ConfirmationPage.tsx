import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';
import styled from 'styled-components';
import { useOrder } from '../contexts/OrderContext';
import { OrderConfirmation } from '../components/OrderConfirmation';

function ConfirmationPage() {
  const { getLastOrder } = useOrder();
  const { lastOrder } = getLastOrder();
  console.log('Last order:', lastOrder);
  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <StyledContainer>
          <OrderConfirmation />
          <StyledFlex>
            <div>
              {lastOrder ? (
                <div>
                  <p>Name: {lastOrder?.contactInformation.name}</p>
                  <p>Email: {lastOrder?.contactInformation.email}</p>
                  <p>Phone: {lastOrder?.contactInformation.phone}</p>
                  <p>
                    Address: {lastOrder?.contactInformation.street},{' '}
                    {lastOrder?.contactInformation.zipCode},{' '}
                    {lastOrder?.contactInformation.city}
                  </p>
                </div>
              ) : (
                <p>No stored values found.</p>
              )}
            </div>
          </StyledFlex>
          <StyledFlexCenter>
            <StyledLink href="/">
              <StyledButton type="button">Place another order</StyledButton>
            </StyledLink>
          </StyledFlexCenter>
        </StyledContainer>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const StyledContainer = styled.div`
  margin: 2rem auto;
  border-radius: 0.625rem;
  padding: 1rem;
`;

const StyledFlex = styled.div`
  margin-top: 2rem;
  padding: 2rem;
`;

const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  margin: auto;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const StyledButton = styled.button`
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 14rem;
  height: 4rem;
  border: none;
  cursor: pointer;
  &:hover {
  }
`;

export default ConfirmationPage;
