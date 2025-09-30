import { motion } from 'framer-motion';

const ViewStudentsButton = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    className="w-full mt-4 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
    whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } }}
    whileTap={{ scale: 0.98, transition: { duration: 0.2, ease: "easeInOut" } }}
  >
    View Students
  </motion.button>
);

export default ViewStudentsButton;