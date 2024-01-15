import styled from 'styled-components';
import Letter from './Letter';
import Envelope from './Envelope';

function ConfirmOrder() {
  return (
    <ScrollSection>
      <MyBox>
        <Envelope>
          <Letter />
        </Envelope>
      </MyBox>
    </ScrollSection>
  );
}

const ScrollSection = styled.div`
  position: relative;
  height: 300vh;
`;

const MyBox = styled.section`
  position: sticky;
  display: flex;
  align-items: center;
`;

export default ConfirmOrder;
