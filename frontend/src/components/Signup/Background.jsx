import { motion } from "framer-motion";

const Background = ({ children }) => {
  return (
    <motion.div
      className="min-h-screen flex justify-center items-center bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Background;