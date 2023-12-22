import { motion } from 'framer-motion';

// Page content wrapper, with animation .
export const Page = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0,}}
      animate={{ opacity: 1, width: '100%', height: '100%' }}
      exit={{ opacity: 0,  }}
      transition={{ duration: .7 }}
    >
      <>{children}</>
    </motion.div>
  );
};
