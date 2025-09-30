import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import StudentCard from '../StudentCard/StudentCard';

const StudentList = ({ students, onRemove }) => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          ease: "easeInOut"
        }
      }
    }}
  >
    {students.map((student, index) => (
      <motion.div
        key={index}
        className="relative"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(20,35,74,0.1)", transition: { duration: 0.3, ease: "easeInOut" } }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <StudentCard
          name={student.name}
          rollNumber={student.rollNumber}
          course={student.course}
          department={student.department}
        />
        <motion.button
          onClick={() => onRemove(index)}
          className="absolute top-3 right-5 text-red-700 w-7 h-7 flex items-center justify-center bg-red-100 hover:bg-red-200 rounded-full"
          whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.1, ease: "easeInOut" } }}
        >
          <MdClose />
        </motion.button>
      </motion.div>
    ))}
  </motion.div>
);

export default StudentList;