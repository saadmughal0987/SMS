import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

const CourseCard = ({ course, index, onDelete }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.1 }
    },
    hover: { y: -5 }
  };

  return (
    <motion.div
      className="bg-white rounded-md shadow-md overflow-hidden border-2 border-[#d9dadb] hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer relative group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="bg-[#002E5D] text-white px-3 py-2 flex items-center justify-between">
        <h3 className="text-md font-sans truncate">{course.subjectName}</h3>
        <motion.button
          className="text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 hover:text-red-400 ml-2 flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(course.id);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTrash size={14} />
        </motion.button>
      </div>

      <div className="p-3 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium border-b border-[#002E5D] mr-2">Semester:</span>
          <span>{course.semester} Semester</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium border-b border-[#002E5D] mr-2">Section:</span>
          <span>{course.section} Section</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium border-b border-[#002E5D] mr-2">Credit Hours:</span>
          <span>{parseFloat(course.creditHrs).toFixed(1)} Credit Hours</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
