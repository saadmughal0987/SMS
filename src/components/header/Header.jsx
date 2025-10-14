import { useState, useEffect } from "react";
import { FiMenu, FiMaximize, FiMinimize, FiX } from "react-icons/fi";
import { FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import whiteLogo from "../../assets/white-logo.png";

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.profile-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const handleMyProfile = () => {
    navigate('/profile');
    setIsDropdownOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#002E5D] text-white py-4 px-6 shadow-md z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center md:gap-10 gap-5">
          <button onClick={onToggleSidebar} className="text-white text-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={isSidebarOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isSidebarOpen ? <FiX /> : <FiMenu />}
              </motion.div>
            </AnimatePresence>
          </button>
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.img
              src={whiteLogo}
              alt="Logo"
              className="h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.span
              className="text-white text-sm md:text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Student Management System
            </motion.span>
          </motion.div>
        </div>
        <div className="flex items-center md:gap-10 gap-5 relative">
           <button onClick={handleFullscreen} className="text-white text-2xl hidden md:block">
             {isFullscreen ? <FiMinimize /> : <FiMaximize />}
           </button>
           <FaBell className="text-white text-xl cursor-pointer" />
           <div className="relative profile-dropdown">
             <img
               src={user?.profilePhoto || "https://via.placeholder.com/32"}
               alt="Profile"
               className="w-8 h-8 rounded-full border-2 border-white cursor-pointer"
               onClick={handleProfileClick}
             />
             <AnimatePresence>
               {isDropdownOpen && (
                 <motion.div
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.2 }}
                   className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                 >
                   <div className="py-1">
                     <button
                       onClick={handleMyProfile}
                       className="flex items-center gap-3 px-4 py-2 text-sm text-[#112b4f] hover:bg-gray-100 w-full text-left"
                     >
                       <FaUser /> My Profile
                     </button>
                     <button
                       onClick={handleLogout}
                       className="flex items-center gap-3 px-4 py-2 text-sm text-[#112b4f] hover:bg-gray-100 w-full text-left"
                     >
                       <FaSignOutAlt /> Logout
                     </button>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
         </div>
      </div>
    </header>
  );
};

export default Header;