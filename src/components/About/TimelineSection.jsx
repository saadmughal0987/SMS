import { motion } from "framer-motion";
import aboutData from "../../pages/AboutPage/aboutData.json";

/**
 * TimelineSection component displays the development timeline with phases
 * and their current status in a vertical timeline layout.
 */
const TimelineSection = () => {
  const { title, phases } = aboutData.timeline;

  // Status color mapping
  const getStatusColor = (status) => {
    const colors = {
      'Completed': {
        dot: 'bg-green-500',
        badge: 'bg-green-100 text-green-800'
      },
      'In Progress': {
        dot: 'bg-blue-500',
        badge: 'bg-blue-100 text-blue-800'
      },
      'Upcoming': {
        dot: 'bg-yellow-500',
        badge: 'bg-yellow-100 text-yellow-800'
      },
      'Future': {
        dot: 'bg-gray-400',
        badge: 'bg-gray-100 text-gray-800'
      }
    };
    return colors[status] || colors['Future'];
  };

  return (
    <motion.section
      className="bg-white rounded-lg shadow-md p-8 mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-semibold text-[#002E5D] mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#002E5D] opacity-30"></div>

        {phases.map((phase, index) => {
          const colors = getStatusColor(phase.status);

          return (
            <motion.div
              key={phase.phase}
              className="relative flex items-start mb-8 ml-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <motion.div
                className={`w-4 h-4 rounded-full absolute -left-6 ${colors.dot} border-2 border-white shadow-md`}
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              ></motion.div>

              {/* Content card */}
              <div className="bg-gray-50 rounded-lg p-6 w-full ml-4 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h3 className="text-xl font-semibold text-[#002E5D]">
                    {phase.phase}: {phase.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium self-start ${colors.badge}`}>
                    {phase.status}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default TimelineSection;