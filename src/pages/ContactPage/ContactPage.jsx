import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContactFormSection from "../../components/About/ContactFormSection";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Map from "../../components/Map/Map";

const ContactPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <Breadcrumb isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <motion.div className="min-h-screen bg-gray-100 pt-28 px-4 my-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <ContactInfo />
          <ContactFormSection />
          <Map />
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
