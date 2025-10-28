import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const AddCourseForm = ({ isOpen, onClose, onAddCourse }) => {
  const [formData, setFormData] = useState({
    subjectName: "",
    semester: "",
    section: "",
    creditHrs: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subjectName, semester, section, creditHrs } = formData;

    if (subjectName.trim() && semester.trim() && section.trim() && creditHrs) {
      onAddCourse(formData);
      setFormData({
        subjectName: "",
        semester: "",
        section: "",
        creditHrs: ""
      });
      onClose();
    }
  };

  const resetForm = () => {
    setFormData({
      subjectName: "",
      semester: "",
      section: "",
      creditHrs: ""
    });
  };

  const formFields = [
    { name: "subjectName", label: "Subject Name", type: "text" },
    { name: "semester", label: "Semester", type: "text" },
    { name: "section", label: "Section", type: "text" },
    { name: "creditHrs", label: "Credit Hours", type: "number" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-full max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#002E5D]">Add Course</h2>
              <motion.button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={20} />
              </motion.button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {formFields.map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {field.label}:
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002E5D] focus:border-transparent"
                    required
                  />
                </div>
              ))}

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#002E5D] text-white rounded-md hover:bg-[#001F3D] transition-colors"
                >
                  Add Course
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddCourseForm;