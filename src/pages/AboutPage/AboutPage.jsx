import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeroSection from "../../components/About/HeroSection";
import ProjectDeveloperSection from "../../components/About/ProjectDeveloperSection";
import StatisticsSection from "../../components/About/StatisticsSection";
import FeaturesSection from "../../components/About/FeaturesSection";
import MissionVisionSection from "../../components/About/MissionVisionSection";
import TimelineSection from "../../components/About/TimelineSection";
import TestimonialsSection from "../../components/About/TestimonialsSection";
import FAQSection from "../../components/About/FAQSection";
import ContactFormSection from "../../components/About/ContactFormSection";
import CTASection from "../../components/About/CTASection";

const About = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <Breadcrumb isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <motion.div className="min-h-screen bg-gray-100 pt-28 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <HeroSection />
          <ProjectDeveloperSection />
          <StatisticsSection />
          <FeaturesSection />
          <MissionVisionSection />
          <TimelineSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactFormSection />
          <CTASection />
        </div>
      </motion.div>
    </>
  );
};

export default About;
