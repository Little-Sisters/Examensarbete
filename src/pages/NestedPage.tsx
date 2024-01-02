import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MOTION_VARIANTS } from '../constants';

// A page which will be nested inside another page. So this will be within a nested route.
/** Just nu, används denna bara temorärt i flavour page.* typ som en outlet */

export const NestedPage = ({
  title,
  nextPath,
}: {
  title: string;
  nextPath: string;
}) => {
  return (
    <motion.div
      custom={{ direction: 'forward' }}
      initial="initial"
      animate="in"
      exit="out"
      variants={MOTION_VARIANTS}
      style={{ width: '100%', position: 'absolute', top: 50, left: 0 }}
    >
      <h2>{title}</h2>
      <p>
        This is an element in a group of nested pages
        <br />
        {/** Just nu, används denna bara temorärt i flavour page.*/}
        <Link to={nextPath}>Next nested page</Link>
      </p>
    </motion.div>
  );
};
