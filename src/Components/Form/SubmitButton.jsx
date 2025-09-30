import { motion } from 'framer-motion';

const SubmitButton = () => (
  <motion.button
    type="submit"
    className="w-full text-white py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg bg-slate-800"
    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(20,35,74,0.1)", transition: { duration: 0.3, ease: "easeInOut" } }}
    whileTap={{ scale: 0.98, transition: { duration: 0.2, ease: "easeInOut" } }}
  >
    Add Student
  </motion.button>
);

export default SubmitButton;