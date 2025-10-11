import { useState, useEffect } from "react";
import { FiMenu, FiMaximize, FiMinimize, FiX } from "react-icons/fi";
import { FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
          <img src="/src/assets/white-logo.png" alt="Logo" className="h-8"/>
        </div>
        <div className="flex items-center md:gap-10 gap-5 relative">
           <button onClick={handleFullscreen} className="text-white text-2xl hidden md:block">
             {isFullscreen ? <FiMinimize /> : <FiMaximize />}
           </button>
           <FaBell className="text-white text-xl cursor-pointer" />
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
    </header>
  );
};

export default Header;