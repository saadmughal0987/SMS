import { motion } from "framer-motion";
import aboutData from "../../pages/AboutPage/aboutData.json";

/**
 * CTASection component displays call-to-action links with smooth hover animations
 * for contacting the developer or viewing their work.
 */
const CTASection = () => {
  const { title, description, links } = aboutData.contact;

  return (
    <motion.section
      className="bg-white rounded-lg shadow-md p-6 mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-2xl font-semibold text-[#002E5D] mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-700 mb-6 leading-relaxed"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {Object.entries(links).map(([key, url], index) => (
          <motion.a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 rounded-md font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#002E5D] focus:ring-offset-2 ${
              key === 'portfolio'
                ? 'bg-[#002E5D] text-white hover:bg-[#003d7a] shadow-md hover:shadow-lg'
                : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CTASection;