import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

const Breadcrumb = ({ isSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathToName = {
    '/dashboard': 'Dashboard',
    '/profile': 'Profile',
  };

  const pageName = pathToName[location.pathname] || 'Unknown';

  const handleHomeClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className={`fixed top-16 left-0 ${isSidebarOpen ? 'md:left-64' : ''} right-0 bg-white border-b border-gray-200 px-6 py-3 z-40 transition-all duration-300`} style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
      <div className="flex items-center space-x-2 text-gray-600">
        <button onClick={handleHomeClick} className="flex items-center text-[#112b4f] ">
          <FaHome className="text-lg" />
        </button>
        <FiChevronRight className="text-lg" />
        <span className="font-medium text-[#112b4f]">{pageName}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
