import { createElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const variants = {
  hidden: (direction) => ({
    opacity: 0,
    y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
    x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

function Reveal({
  as: MotionComponent = motion.div,
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}) {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : {
        custom: direction,
        variants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once, margin: '-48px' },
        transition: { duration: 0.6, delay, ease: EASE },
      };

  return createElement(MotionComponent, { className, ...motionProps }, children);
}

export default Reveal;
