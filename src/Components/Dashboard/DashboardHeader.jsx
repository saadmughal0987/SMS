import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DashboardHeader = ({ logo, onAddNew }) => (
  <motion.div
    className="bg-white rounded-2xl p-4 md:p-6 mb-8 border border-gray-100 shadow-2xl"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, ease: "easeInOut" }}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-16 h-16 cursor-pointer" />
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Student Dashboard
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Manage your student records
          </p>
        </div>
      </div>
      <motion.button
        onClick={onAddNew}
        className="bg-[#14234a] text-white px-4 py-2 md:px-8 md:py-3 rounded-xl text-sm md:text-base font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(20,35,74,0.1)",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
      >
        Add New Student
      </motion.button>
    </div>
  </motion.div>
);

export default DashboardHeader;
