import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
      <Breadcrumb isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-28">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#002E5D]">Dashboard</h1>
        {user ? (
          <div className="text-center">
            <p className="text-xl mb-4">Welcome to your Dashboard, {user.name}!</p>
            <p className="mb-6 text-gray-600">You have successfully logged in.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="font-semibold text-blue-800">Profile</h2>
                <p className="text-blue-600">Manage your account settings</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="font-semibold text-green-800">Analytics</h2>
                <p className="text-green-600">View your statistics</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h2 className="font-semibold text-yellow-800">Settings</h2>
                <p className="text-yellow-600">Configure your preferences</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="font-semibold text-purple-800">Support</h2>
                <p className="text-purple-600">Get help and support</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
    </>
  );
};

export default DashboardPage;