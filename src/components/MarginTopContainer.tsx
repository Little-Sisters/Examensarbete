import styled from 'styled-components';

const MarginTopContainer = styled.div`
  margin-top: 7rem; /* Center the content */

  @media (max-width: 700px) {
    margin-top: 6rem;
  }
  @media (min-width: 1500px) {
    margin-top: 8rem;
  }
`;

export default MarginTopContainer;
