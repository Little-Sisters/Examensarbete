import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
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
};

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <AccordionHeaderContainer
      className={`AccordionHeader ${isActive ? 'active' : ''}`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
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
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
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
  items: { title: string; content: string }[];
  multiple?: boolean;
};

export const AccordionItemWrapper: React.FC<AccordionItemWrapperProps> = ({
  items,
  multiple = true, // Default to true if not provided
}) => (
  <Accordion multiple={multiple}>
    {items.map((item, index) => (
      <AccordionItem key={index}>
        <AccordionHeader>{item.title}</AccordionHeader>
        <AccordionPanel>{item.content}</AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
);

// Styled components (you can keep them in the same file or move them to a separate styles file)
const AccordionItemContainer = styled.div`
  border-radius: 3px;
  overflow: hidden;
`;

const AccordionHeaderContainer = styled(motion.div)`
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #0000ff;
  }

  &.active {
    background-color: #0015ff;
  }
`;

export const AccordionPanelContainer = styled(motion.div)`
  padding: 20px;
`;
