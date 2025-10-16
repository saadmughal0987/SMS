import { motion } from "framer-motion";
import aboutData from "../../pages/AboutPage/aboutData.json";

/**
 * HeroSection component displays the main title and description of the About page
 * with smooth animations and responsive design.
 */
const HeroSection = () => {
  const { title, description } = aboutData.hero;

  return (
    <motion.section
      className="md:text-center mb-12 mt-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-[#002E5D] mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {description}
      </motion.p>
    </motion.section>
  );
};

export default HeroSection;