import { motion } from 'framer-motion';
import DashboardHeader from '../../Components/Dashboard/DashboardHeader';
import StudentList from '../../Components/Dashboard/StudentList';
import EmptyState from '../../Components/Dashboard/EmptyState';

const DashboardPage = ({ students, onRemove, onAddNew, activeNav, logo }) => (
  <motion.div className="min-h-screen bg-gray-50 p-4 md:p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="max-w-7xl mx-auto"
    >
      <DashboardHeader logo={logo} onAddNew={onAddNew} />
      {activeNav === 'Overview' && <StudentList students={students} onRemove={onRemove} />}
      {students.length === 0 && activeNav === 'Overview' && <EmptyState />}
    </motion.div>
  </motion.div>
);

export default DashboardPage;