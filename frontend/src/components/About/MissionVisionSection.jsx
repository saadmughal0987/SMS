import { motion } from "framer-motion";
import aboutData from "../../pages/AboutPage/aboutData.json";

/**
 * MissionVisionSection component displays the vision and future roadmap
 * with a dark background and animated list items.
 */
const MissionVisionSection = () => {
  const { title, description, roadmap } = aboutData.vision;

  return (
    <motion.section
      className="bg-[#002E5D] text-white rounded-lg shadow-md p-8 mb-10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
      <motion.ul
        className="max-w-3xl mx-auto space-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {roadmap.map((item, index) => (
          <motion.li
            key={item}
            className="flex items-start space-x-3 text-white/90"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 mt-1">•</span>
            <span className="leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default MissionVisionSection;