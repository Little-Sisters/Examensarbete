import { MotionValue, motion } from 'framer-motion';
import styled from 'styled-components';
import flavoursData from '../../data/flavoursData';

type TabsProps = {
  scrollYProgress: MotionValue<number>;
};

const Tabs: React.FC<TabsProps> = ({ scrollYProgress }) => {

  return (
    <Tab>
      <TabTitleFlavoursFlex>
        <h1>Our Flavours</h1>
        <FlavourTextBox>
          {flavoursData.map((flavour) => (
            <span key={flavour.id}>{flavour.flavourTitle}</span>
          ))}
        </FlavourTextBox>
      </TabTitleFlavoursFlex>
      <ProgressBarBox>
        <ProgressBar
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </ProgressBarBox>
    </Tab>
  );
};

const TabTitleFlavoursFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 830px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const Tab = styled.div`
  position: absolute;
  z-index: 2000;
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  top: 6rem;
  height: 4rem;
  width: 100%;
  transform: translateX(-50%);
  max-width: 60rem;
  left: 50%;
  h1 {
    font-size: 1.6rem;
    margin: 0;
    padding-bottom: 3px;
    padding-left: 1rem;
    width: 20%;
    display: inline-block;
    @media (max-width: 830px) {
      font-size: 1.4rem;
      width: 100%;
      text-align: center;
    }
  }
  @media (max-width: 830px) {
    top: 5rem;
    height: 4rem;
  }
`;

const ProgressBarBox = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.4);
`;

const FlavourTextBox = styled.div`
  width: 80%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 830px) {
    width: 100%;
    justify-content: space-around;
    font-size: 0.8rem;
  }
`;

const ProgressBar = styled(motion.div)`
  top: 0;
  right: 0;
  height: 3px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.text};
  transform-origin: 0%;
  opacity: 0.7;
`;

export default Tabs;
