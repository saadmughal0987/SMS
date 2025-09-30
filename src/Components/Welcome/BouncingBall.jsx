import { motion } from 'framer-motion';

const BouncingBall = () => (
  <motion.div
    className="absolute w-16 h-16 bg-gray-800 rounded-full z-10"
    initial={{ y: -100, opacity: 0 }}
    animate={{
      y: [0, 200, 150, 200, 175, 200, 187.5, 200],
      opacity: [0, 1, 1, 1, 1, 1, 1, 0]
    }}
    transition={{
      duration: 3.5,
      times: [0, 0.1, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
      ease: "easeInOut"
    }}
  />
);

export default BouncingBall;