import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * Breadcrumb component - Navigation breadcrumb with dynamic page names
 * Features: Responsive design, animations, sidebar integration
 */
const Breadcrumb = ({ isSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Route to display name mapping
  const pathToName = {
    '/dashboard': 'Dashboard',
    '/profile': 'Profile',
    '/students': 'Students',
  };

  // Get current page name or fallback
  const pageName = pathToName[location.pathname] || location.pathname.split('/').pop()?.charAt(0).toUpperCase() + location.pathname.split('/').pop()?.slice(1) || 'Unknown';

  const handleHomeClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className={`fixed top-16 left-0 ${isSidebarOpen ? 'md:left-64' : ''} right-0 bg-white border-b border-gray-200 px-6 py-3 z-40 transition-all duration-300`} style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
      <motion.div
        className="flex items-center space-x-2 text-gray-600"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.button
          onClick={handleHomeClick}
          className="flex items-center text-[#112b4f]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <FaHome className="text-lg" />
        </motion.button>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <FiChevronRight className="text-lg" />
        </motion.div>
        <motion.span
          className="font-medium text-[#112b4f]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {pageName}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Breadcrumb;
