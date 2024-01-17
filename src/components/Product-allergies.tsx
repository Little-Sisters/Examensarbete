import styled from 'styled-components';
import { AccordionItemWrapper } from './Accordion';

const accordionItemsData = [
  { title: 'Item 1', content: 'Lorem ipsum dolor ...' },
  { title: 'Item 2', content: 'Another accordion item ...' },
];

export function AllergyCard() {
  return (
    <AllergyCardContainer>
      <AccordionItemWrapper items={accordionItemsData} multiple={true} />
    </AllergyCardContainer>
  );
}

const AllergyCardContainer = styled.div`
  width: 100%;
  margin: 3rem 0rem;
  border-radius: 3px;
  background: ${({ theme }) => theme.card};
`;
