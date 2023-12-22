import { motion } from 'framer-motion';

// Page content wrapper, with animation .
export const Page = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        height: '100%',
        width: '100%',
        position:"absolute",
        top:0,
        left:0,
      }}
    >
      <>{children}</>
    </motion.div>
  );
};
