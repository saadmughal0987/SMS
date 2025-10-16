import { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-[#002E5D] border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            className="text-2xl font-semibold text-[#002E5D] mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Loading About Page
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Preparing an amazing experience...
          </motion.p>
        </motion.div>
      </div>
    );
  }

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
