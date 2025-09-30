import { motion } from 'framer-motion';

const GetStartedButton = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    className="px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold text-white transition-colors animate-bounce bg-slate-800"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 4, duration: 0.5, ease: "easeInOut" }}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(20,35,74,0.1)", transition: { duration: 0.3, ease: "easeInOut" } }}
    whileTap={{ scale: 0.95, transition: { duration: 0.2, ease: "easeInOut" } }}
  >
    Get Started
  </motion.button>
);

export default GetStartedButton;