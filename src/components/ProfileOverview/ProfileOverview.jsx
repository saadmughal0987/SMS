import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import CourseDetails from "../CourseDetails/CourseDetails";

const ProfileOverview = () => {
  const { user } = useAuth();

  if (!user) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: (delay) => ({
      opacity: 1,
      transition: { duration: 0.5, delay }
    })
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-xl mb-2 text-[#002E5D] font-sans"
        variants={itemVariants}
        custom={0.4}
      >
        Profile Overview
      </motion.h2>

      <motion.hr
        className="mb-6 border-gray-300"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left md:justify-start mb-8"
        variants={itemVariants}
        custom={0.8}
      >
        <motion.img
          src={user.profilePhoto || "https://via.placeholder.com/80"}
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300 mb-4 md:mb-0 md:mr-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        />

        <div className="space-y-1">
          <motion.h3
            className="text-xl font-semibold text-[#112b4f]"
            variants={itemVariants}
            custom={1.4}
          >
            {user.name}
          </motion.h3>

          <motion.p
            className="text-gray-600 text-sm"
            variants={itemVariants}
            custom={1.6}
          >
            ID: L1F23BSSE0177
          </motion.p>

          <motion.p
            className="text-gray-600 text-sm"
            variants={itemVariants}
            custom={1.8}
          >
            Faculty of Information Technology and Computer Science
          </motion.p>
        </div>
      </motion.div>

      <CourseDetails />
    </motion.div>
  );
};

export default ProfileOverview;