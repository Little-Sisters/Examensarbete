/* eslint-disable @typescript-eslint/no-use-before-define */
import { motion } from 'framer-motion';
import { MOTION_VARIANTS } from '../constants';


// Page content wrapper, with animation .
export const Page = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <motion.div
      custom={{ direction: 'forward' }}
      initial="initial"
      color="red"
      animate="in"
      exit="out"
      variants={MOTION_VARIANTS}
      style={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
    >
      <>{children}</>
    </motion.div>
  );
};
