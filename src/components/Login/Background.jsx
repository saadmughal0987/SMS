import bgImage from "/src/assets/bg.jpg";
import { motion } from "framer-motion";

const Background = ({ children }) => {
  return (
    <motion.div
      className="w-full h-screen bg-cover bg-center md:bg-fixed bg-no-repeat relative z-0"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Background;