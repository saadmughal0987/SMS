import { motion } from "framer-motion";
import aboutData from "../../pages/AboutPage/aboutData.json";

/**
 * StatisticsSection component displays key statistics in a responsive grid
 * with animated counters and hover effects.
 */
const StatisticsSection = () => {
  const { title, items } = aboutData.statistics;

  // Icon mapping for different statistic types
  const getIcon = (label) => {
    const iconMap = {
      "Students Managed": (
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
      ),
      "Courses Available": (
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      ),
      "Uptime": (
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      ),
      "Support": (
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
      )
    };
    return iconMap[label] || iconMap["Students Managed"];
  };

  return (
    <motion.section
      className="bg-white rounded-lg shadow-md p-8 mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-semibold text-[#002E5D] mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              className="w-16 h-16 bg-[#002E5D] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#003d7a] transition-colors duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                {getIcon(stat.label)}
              </svg>
            </motion.div>
            <motion.div
              className="text-3xl font-bold text-[#002E5D] mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {stat.number}
            </motion.div>
            <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default StatisticsSection;