import styled from 'styled-components';
import { accordionItemsData } from '../../data/accordionData';
import { AccordionItemWrapper } from './Accordion';

export function AllergyCard() {
  return (
    <AllergyCardContainer>
      <AccordionItemWrapper items={accordionItemsData} multiple={true} />
    </AllergyCardContainer>
  );
}

const AllergyCardContainer = styled.div`
  width: 100%;
  border-radius: 3px;
  background: ${({ theme }) => theme.card};
`;
