import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ImageSlideProps {
  imageArray: string[];
}

const ImageSlide: React.FC<ImageSlideProps> = ({ imageArray }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Calculate the current index based on seconds
  const currentIndex = seconds % imageArray.length;

  return (
    <AnimatePresence>
      <MyMotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        exit={{ opacity: 0, transition: { duration: 1.5 } }}
        className="whut"
        key={currentIndex}
      >
        <MyImage src={imageArray[currentIndex]} alt="" />
      </MyMotionDiv>
    </AnimatePresence>
  );
};

const MyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MyMotionDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default ImageSlide;
