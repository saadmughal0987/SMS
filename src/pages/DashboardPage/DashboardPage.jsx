import { useState } from "react";
import Header from "../../components/header/Header";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileOverview from "../../components/ProfileOverview/ProfileOverview";

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
      <Breadcrumb isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="min-h-screen bg-gray-100 pt-28 px-4">
        <div className="w-[100%] mx-auto mt-8">
          <ProfileOverview />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;