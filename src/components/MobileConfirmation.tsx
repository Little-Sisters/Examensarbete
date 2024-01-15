import styled from 'styled-components';
import { useOrder } from '../contexts/OrderContext';
import { calculateItemPrice } from './calculateItemPrice';

function MobileConfirmation() {
  const { getLastOrder } = useOrder();
  const { lastOrder } = getLastOrder();

  const totalPrice =
    lastOrder?.itemList.reduce((total, cartItem) => {
      return total + cartItem.quantity * calculateItemPrice(cartItem);
    }, 0) || 0;

  return (
    <StyledCard>
      <FlexCenter>
        <StyledTitle>To</StyledTitle>
        <div>
          {lastOrder ? (
            <div>
              <StyledText>{lastOrder?.contactInformation.name}</StyledText>
              <StyledText>{lastOrder?.contactInformation.street}</StyledText>
              <StyledText>{lastOrder?.contactInformation.zipCode}</StyledText>
              <StyledText>{lastOrder?.contactInformation.city}</StyledText>
              <StyledText>{lastOrder?.contactInformation.email}</StyledText>
              <StyledText>{lastOrder?.contactInformation.phone}</StyledText>
            </div>
          ) : (
            <p>No stored values found.</p>
          )}
        </div>
        <StyledTitle>Thank you,</StyledTitle>
        <StyledItem>For your order #{lastOrder?.orderId}</StyledItem>
      </FlexCenter>
      <StyledUnorderedList>
        {lastOrder?.itemList.map((cartItem) => (
          <li key={cartItem.id}>
            <Margin>
              <FlexRow>
                <StyledItem>{cartItem.title}</StyledItem>
                <StyledItem>
                  ${cartItem.quantity * calculateItemPrice(cartItem)}
                </StyledItem>
              </FlexRow>
              <FlexItems>
                <StyledProduct>{cartItem.tiers} tier, </StyledProduct>
                <StyledProduct>{cartItem.colour}, </StyledProduct>
                <StyledProduct>{cartItem.flavour}, </StyledProduct>
                <StyledProduct>{cartItem.frosting}, </StyledProduct>
                <StyledProduct>{cartItem.decorations}, </StyledProduct>
                <StyledProduct>{cartItem.topper}</StyledProduct>
              </FlexItems>
            </Margin>
          </li>
        ))}
      </StyledUnorderedList>
      <FlexCenter>
        <StyledTotal>Total: ${totalPrice}</StyledTotal>
      </FlexCenter>
    </StyledCard>
  );
}

// Styled components
const StyledCard = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
`;

const StyledText = styled.p`
  font-size: 12px;
  text-align: center;
  margin: 0.3rem;
  padding: 0;
`;

const StyledTitle = styled.p`
  font-size: 36px;
  font-family: 'Monsieur La Doulaise', cursive;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Margin = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledItem = styled.p`
  font-size: 12px;
  padding: 0;
  margin: 0;
`;

const StyledTotal = styled.p`
  font-size: 12px;
  padding: 0;
  margin: 2rem;
`;

const StyledProduct = styled.p`
  font-size: 12px;
  padding: 0;
  margin: 0;
  margin-right: 0.2rem;
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin-inline-start: 0;
  font-size: 12px;
  padding: 1rem;
  margin: 0;
`;

export default MobileConfirmation;
