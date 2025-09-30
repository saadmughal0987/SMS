import { motion } from 'framer-motion';

const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, ease: "easeInOut" }}
    className="text-center py-16"
  >
    <div className="text-6xl mb-4">📚</div>
    <h3 className="text-2xl font-semibold text-gray-600 mb-2">No students yet</h3>
    <p className="text-gray-500">Click Add New Student to get started</p>
  </motion.div>
);

export default EmptyState;