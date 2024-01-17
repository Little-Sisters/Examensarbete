import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

type AccordionContextType = {
  isActive: boolean;
  index: number;
  onChangeIndex: (index: number) => void;
};

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined,
);

const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
};

type AccordionProps = {
  children: React.ReactNode;
  multiple?: boolean;
  defaultIndex?: number | number[];
};

const Accordion: React.FC<AccordionProps> = ({
  children,
  multiple,
  defaultIndex,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number | number[]>(
    multiple
      ? Array.isArray(defaultIndex)
        ? defaultIndex
        : [defaultIndex || 0]
      : defaultIndex || 0,
  );

  function onChangeIndex(index: number) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (
        Array.isArray(currentActiveIndex) &&
        currentActiveIndex.includes(index)
      ) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return [
        ...(Array.isArray(currentActiveIndex) ? currentActiveIndex : []),
        index,
      ];
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
};
type AccordionHeaderProps = {
  children: React.ReactNode;
  index: number;
};

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  index,
}) => {
  const { isActive, onChangeIndex } = useAccordion();

  return (
    <AccordionHeaderContainer
      className={`AccordionHeader ${isActive ? 'active' : ''}`}
      onClick={() => onChangeIndex(index)}
      hasBorderTop={index !== 0} // Check if it's the first index
    >
      <ChildrenFlexBox>
        {children}
        {isActive ? <FaMinus /> : <FaPlus />}
      </ChildrenFlexBox>
    </AccordionHeaderContainer>
  );
};

type AccordionItemProps = {
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  return <AccordionItemContainer>{children}</AccordionItemContainer>;
};

type AccordionPanelProps = {
  children: React.ReactNode;
};

function AccordionPanel({ children }: AccordionPanelProps) {
  const { isActive }: AccordionContextType = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: '2px' }}
          animate={{ height: 'auto' }}
          exit={{ height: '2px' }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
        >
          <AccordionPanelContainer className="AccordionPanel">
            {children}
          </AccordionPanelContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type AccordionItemWrapperProps = {
  items: { title: React.ReactNode; content: React.ReactNode }[];
  multiple?: boolean;
};

export const AccordionItemWrapper: React.FC<AccordionItemWrapperProps> = ({
  items,
  multiple = true, // Default to true if not provided
}) => (
  <Accordion multiple={multiple}>
    {items.map((item, index) => (
      <AccordionItem key={index}>
        <AccordionHeader index={index}>{item.title}</AccordionHeader>
        <AccordionPanel>{item.content}</AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
);

const ChildrenFlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionItemContainer = styled.div`
  border-radius: 3px;
  overflow: hidden;
`;

const AccordionHeaderContainer = styled(motion.div)<{ hasBorderTop: boolean }>`
  padding: 1.5rem;
  cursor: pointer;
  border-color: ${({ theme }) => theme.input};
  border-top: ${(props) => (props.hasBorderTop ? '1px solid' : 'none')};
  transition: background-color 0.15s ease-in-out;
  &:hover {
    // Add additional styling here for hover if we want to
  }
  &.active {
    // Add additional styling here for active if we want to
  }
  @media (max-width: 1000px) {
    padding: 1.3rem;
  }
`;

export const AccordionPanelContainer = styled(motion.div)`
  padding: 0.8rem 1.5rem;
  @media (max-width: 1000px) {
    padding: 0.8rem 1.3rem;
  }
`;
