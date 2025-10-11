import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

const ProfilePage = () => {
  const { user, logout, updateProfilePhoto } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
      <Breadcrumb isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-28">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>
          {user ? (
            <div className="text-center">
              <div className="mb-4">
                <img
                  src={user.profilePhoto || 'https://via.placeholder.com/100'}
                  alt="Profile"
                  className="w-20 h-20 rounded-full mx-auto mb-2"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="block mx-auto"
                />
              </div>
              <p className="mb-2">Welcome, {user?.name}!</p>
              <p className="mb-4">Your account has been created successfully.</p>
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all"
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

export default ProfilePage;
