import { motion } from "framer-motion";

const FormContainer = ({ children }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-10 w-full max-w-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FormContainer;