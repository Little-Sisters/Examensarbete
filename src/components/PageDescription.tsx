import styled from 'styled-components';

interface PageDescriptionProps {
  title: string;
  description: string;
}

function PageDescription({ title, description }: PageDescriptionProps) {
  return (
    <FlexContainerCentered>
      <h1>{title}</h1>
      <p>{description}</p>
    </FlexContainerCentered>
  );
}

const FlexContainerCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    margin: 0;
  }
`;

export default PageDescription;
