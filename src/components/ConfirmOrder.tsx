import styled from 'styled-components';
import Letter from './Letter';
import Envelope from './Envelope';

// This is the component that is displayed on the Confirmation Page
// It is a container for Envelope and Letter, which are animated
// That is why the height and position are set here
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
