import styled from 'styled-components';

const MarginTopContainer = styled.div`
  margin-top: 6rem; /* Center the content */
  padding-bottom: 2rem;

  @media (max-width: 700px) {
    margin-top: 7rem;
  }
  @media (min-width: 1500px) {
    margin-top: 8rem;
  }
`;

export default MarginTopContainer;
