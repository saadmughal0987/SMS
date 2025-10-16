import { useState } from "react";
import Header from "../../components/header/Header";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import Sidebar from "../../components/Sidebar/Sidebar";
import Students from "../../components/Students/Students";

const StudentsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <Breadcrumb isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="min-h-screen bg-gray-100 pt-28 px-4">
        <div className="w-[100%] mx-auto mt-8">
          <Students />
        </div>
      </div>
    </>
  );
};

export default StudentsPage;
