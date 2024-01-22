import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ImageSlide() {
  const images = [
    'https://i.pinimg.com/originals/a8/f8/11/a8f8116e68adb85c5cdb1d20668ce598.jpg',
    'https://i.pinimg.com/originals/13/27/bc/1327bc7563bb7b9e8604ec842262f749.jpg',
    'https://www.brides.com/thmb/Qj3SmEWccpP_wn1Lw0U1-UyKP7s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13-4f262e1975af4c8487de3c79fa4255fc.jpeg',
  ];

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate the current index based on seconds
  const currentIndex = seconds % images.length;

  return (
    <AnimatePresence>
      <MyMotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        exit={{ opacity: 0, transition: { duration: 1.5 } }}
        className="whut"
        key={currentIndex}
      >
        <MyImage src={images[currentIndex]} alt="" />
      </MyMotionDiv>
    </AnimatePresence>
  );
}

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
