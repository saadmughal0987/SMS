import { motion } from "framer-motion";
import aboutData from "../../pages/AboutPage/aboutData.json";

/**
 * TeamSection component displays team member information with skills
 * and social links in an elegant card layout with animations.
 */
const TeamSection = () => {
  const team = aboutData.team || [{
    name: "Muhammad Saad Nadeem",
    role: "Lead Developer & Founder",
    bio: "Full-stack developer with expertise in React, Node.js, and modern web technologies. Passionate about creating educational solutions.",
    image: "MS",
    skills: ["React", "Node.js", "MongoDB", "UI/UX"],
    social: {
      portfolio: "https://saad-portfolio-tau.vercel.app/",
      github: "https://github.com/saadmughal0987",
      linkedin: "https://www.linkedin.com/in/m-saad-dev/"
    }
  }];

  return (
    <motion.section
      className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 mb-10 shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold text-[#002E5D] mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h2>
      <div className="flex justify-center">
        <div className="max-w-lg">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <motion.div
                className="w-28 h-28 bg-gradient-to-br from-[#002E5D] to-[#003d7a] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {member.image}
              </motion.div>
              <h3 className="text-2xl font-bold text-[#002E5D] mb-3">{member.name}</h3>
              <p className="text-blue-600 font-semibold text-lg mb-4">{member.role}</p>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {member.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                    whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-center space-x-4">
                {Object.entries(member.social).map(([platform, url]) => {
                  if (!url || url === "#") return null;

                  const getIcon = (platform) => {
                    switch (platform) {
                      case 'portfolio':
                        return (
                          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0113.971 9h1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                        );
                      case 'github':
                        return (
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        );
                      case 'linkedin':
                        return (
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        );
                      default:
                        return null;
                    }
                  };

                  const getButtonClass = (platform) => {
                    switch (platform) {
                      case 'portfolio':
                        return "bg-[#002E5D] text-white hover:bg-[#003d7a]";
                      case 'github':
                        return "bg-gray-800 text-white hover:bg-gray-900";
                      case 'linkedin':
                        return "bg-blue-600 text-white hover:bg-blue-700";
                      default:
                        return "bg-gray-500 text-white hover:bg-gray-600";
                    }
                  };

                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${getButtonClass(platform)} p-3 rounded-full transition-all duration-300 shadow-lg`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`${platform} profile`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        {getIcon(platform)}
                      </svg>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;