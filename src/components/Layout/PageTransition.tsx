import {motion} from 'framer-motion';

export default function PageTransition({
  slideDirection,
  children,
  className,
}: {
  slideDirection: 'left' | 'right',
  children: React.ReactNode,
  className: string,
}) {
  const animationInverse = slideDirection === 'left' ? 1 : -1;

  const variants = {
    hidden: {opacity: 0, x: 200 * animationInverse, y: 0},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: -200 * animationInverse, y: 0},
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{type: 'linear'}}
      className={className}
    >
      {children}
    </motion.div>
  );
}
