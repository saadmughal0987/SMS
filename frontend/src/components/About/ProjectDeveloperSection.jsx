import { motion } from "framer-motion";
import aboutData from "../../pages/AboutPage/aboutData.json";

/**
 * ProjectDeveloperSection component displays information about the project
 * and the developer in a two-column layout with hover animations.
 */
const ProjectDeveloperSection = () => {
  const { project, developer } = aboutData;

  return (
    <motion.section
      className="grid md:grid-cols-2 gap-8 mb-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Project Card */}
      <motion.div
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-2xl font-semibold text-[#002E5D] mb-4">{project.title}</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>Student Management System</strong> is a modern web-based platform designed to centralize and simplify all student-related data operations. The system stores and manages student <em>personal information</em>, <em>academic records</em>, <em>attendance</em>, <em>grades</em>, <em>sections</em>, <em>courses</em>, and <em>course materials</em> — accessible to admins, teachers, and students through role-based interfaces.
        </p>

        <h3 className="text-lg font-medium text-[#002E5D] mb-2">{project.purposeTitle}</h3>
        <p className="text-gray-700 mb-4">{project.purposeDescription}</p>

        <h3 className="text-lg font-medium text-[#002E5D] mb-2">{project.whyTitle}</h3>
        <p className="text-gray-700">{project.whyDescription}</p>
      </motion.div>

      {/* Developer Card */}
      <motion.div
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-2xl font-semibold text-[#002E5D] mb-4">{developer.title}</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This project is developed by <strong>Muhammad Saad Nadeem</strong>, an undergraduate student at the University of Central Punjab and a frontend developer currently interning at Digitech. Saad focuses on clean UI, performance, and building practical, production-ready features.
        </p>

        <p className="text-gray-700 mb-4">{developer.techStack}</p>

        <div className="flex flex-wrap gap-3 mt-4">
          {Object.entries(developer.socialLinks).map(([key, url]) => (
            <motion.a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                key === 'portfolio'
                  ? 'bg-[#002E5D] text-white hover:bg-[#003d7a]'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDeveloperSection;