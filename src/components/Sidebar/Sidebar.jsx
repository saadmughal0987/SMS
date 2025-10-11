import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaTachometerAlt, FaUser, FaUsers, FaInfoCircle, FaAddressBook } from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  const { user } = useAuth();
  const location = useLocation();
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <motion.div
      className="fixed top-16 left-0 h-full w-64 bg-white text-black z-50 md:z-30 shadow-lg"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-[#002E5D] p-4 text-white">
        <div className="flex flex-col items-center">
          <img
            src={user?.profilePhoto || 'https://via.placeholder.com/40'}
            alt="Profile"
            className="w-20 h-20 rounded-full mb-2 border-2 border-white"
          />
          <span className="text-lg font-medium">{user ? user.name : 'User'}</span>
        </div>
      </div>
      <nav className="p-4">
        <ul>
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/dashboard" className={`flex items-center gap-3 text-base ${location.pathname === '/dashboard' ? 'text-[#991b1e]' : 'text-[#112b4f]'}`}>
              <FaTachometerAlt size={20} className={location.pathname === '/dashboard' ? 'text-[#991b1e]' : 'text-[#112b4f]'} /> Dashboard
            </Link>
          </li>
          <hr className="my-2 border-gray-300" />
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/profile" className={`flex items-center gap-3 text-base ${location.pathname === '/profile' ? 'text-[#991b1e]' : 'text-[#112b4f]'}`}>
              <FaUser size={20} className={location.pathname === '/profile' ? 'text-[#991b1e]' : 'text-[#112b4f]'} /> Profile
            </Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/students" className={`flex items-center gap-3 text-base ${location.pathname === '/students' ? 'text-[#991b1e]' : 'text-[#112b4f]'}`}>
              <FaUsers size={20} className={location.pathname === '/students' ? 'text-[#991b1e]' : 'text-[#112b4f]'} /> Students
            </Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/about" className={`flex items-center gap-3 text-base ${location.pathname === '/about' ? 'text-[#991b1e]' : 'text-[#112b4f]'}`}>
              <FaInfoCircle size={20} className={location.pathname === '/about' ? 'text-[#991b1e]' : 'text-[#112b4f]'} /> About
            </Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/contacts" className={`flex items-center gap-3 text-base ${location.pathname === '/contacts' ? 'text-[#991b1e]' : 'text-[#112b4f]'}`}>
              <FaAddressBook size={20} className={location.pathname === '/contacts' ? 'text-[#991b1e]' : 'text-[#112b4f]'} /> Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;