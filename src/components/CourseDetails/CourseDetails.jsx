import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import AddCourseForm from "./AddCourseForm";
import DeleteConfirmation from "./DeleteConfirmation";
import { FaPlus } from "react-icons/fa";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteCourse, setDeleteCourse] = useState(null);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses") || "[]");
    setCourses(storedCourses);
  }, []);

  const handleAddCourse = (courseData) => {
    const newCourse = { ...courseData, id: Date.now() };
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const handleDeleteCourse = (courseId) => {
    const courseToDelete = courses.find(course => course.id === courseId);
    setDeleteCourse(courseToDelete);
  };

  const confirmDelete = () => {
    const updatedCourses = courses.filter(course => course.id !== deleteCourse.id);
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setDeleteCourse(null);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 2.0 }
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
      className="mt-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start mb-2 gap-4 md:gap-0">
        <motion.h2
          className="text-xl font-sans text-[#002E5D]"
          variants={itemVariants}
          custom={2.2}
        >
          Course Details
        </motion.h2>

        <motion.button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 bg-[#002E5D] text-white px-4 py-2 rounded-md self-start md:self-auto"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
          custom={2.4}
        >
          <FaPlus size={16} />
          Add Course
        </motion.button>
      </div>

      <motion.hr
        className="mb-6 border-gray-300"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 2.6 }}
      />

      {courses.length === 0 ? (
        <motion.div
          className="text-center py-12"
          variants={itemVariants}
          custom={2.8}
        >
          <div className="text-gray-400 mb-4">
            <svg
              className="mx-auto h-24 w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            No courses added yet
          </h3>
          <p className="text-gray-500">Click "Add Course" to get started</p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={itemVariants}
          custom={2.8}
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              onDelete={handleDeleteCourse}
            />
          ))}
        </motion.div>
      )}

      <AddCourseForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAddCourse={handleAddCourse}
      />

      <DeleteConfirmation
        isOpen={!!deleteCourse}
        onClose={() => setDeleteCourse(null)}
        onConfirm={confirmDelete}
        courseName={deleteCourse?.subjectName}
      />
    </motion.div>
  );
};

export default CourseDetails;
