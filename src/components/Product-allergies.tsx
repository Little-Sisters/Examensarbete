import styled from 'styled-components';
import { accordionItemsData } from '../../data/accordionData';
import { AccordionItemWrapper } from './reusable components/Accordion';

export function AllergyCard() {
  return (
    <AllergyCardContainer>
      {/* 
          The AccordionItemWrapper component renders accordion items with the specified data 
          and "multiply" prop is conditional and allows for multiple items to be expanded simultaneously.
       */}
      <AccordionItemWrapper items={accordionItemsData} multiple={true} />
    </AllergyCardContainer>
  );
}

const AllergyCardContainer = styled.div`
  width: 100%;
  border-radius: 3px;
  background: ${({ theme }) => theme.card};
`;
