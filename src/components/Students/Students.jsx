import { useState, useEffect } from "react";
import { FaSearch, FaPlus, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import AddStudentModal from "./AddStudentModal";
import StudentDetail from "./StudentDetail";
import DeleteConfirmation from "../CourseDetails/DeleteConfirmation";

/**
 * Students component - Main component for managing student records
 * Features: CRUD operations, search, responsive design, animations
 */
const Students = () => {
  // State management
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);

  // Persist students to localStorage
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  // Filter students based on search term
  const filteredStudents = students.filter((student, index) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.registrationNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (index + 1).toString().includes(searchTerm)
  );

  // Event handlers
  const handleStudentClick = (student) => setSelectedStudent(student);
  const handleBackToList = () => setSelectedStudent(null);

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleDeleteStudent = (student) => {
    setStudentToDelete(student);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteStudent = () => {
    setStudents(prev => prev.filter(student => student.id !== studentToDelete.id));
    setIsDeleteModalOpen(false);
    setStudentToDelete(null);
  };

  const handleAddStudent = (newStudent) => {
    if (editingStudent) {
      // Update existing student
      setStudents(prev => prev.map(student =>
        student.id === editingStudent.id
          ? { ...newStudent, id: editingStudent.id }
          : student
      ));
    } else {
      // Add new student
      const maxId = students.length > 0 ? Math.max(...students.map(s => s.id)) : 0;
      setStudents(prev => [...prev, { ...newStudent, id: maxId + 1 }]);
    }
  };

  if (selectedStudent) {
    return (
      <StudentDetail student={selectedStudent} onBack={handleBackToList} />
    );
  }

  // Render student detail view if a student is selected
  if (selectedStudent) {
    return <StudentDetail student={selectedStudent} onBack={handleBackToList} />;
  }

  return (
    <motion.div
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <h1 className="text-xl sm:text-2xl text-[#112b4f] mb-4 font-sans">Students</h1>
      <hr className="border-gray-300 mb-6" />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002e5d] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#002e5d] text-white px-4 py-2 rounded-lg hover:bg-[#02264b] flex items-center space-x-2 active:bg-[#044485] w-full sm:w-auto justify-center transition-colors"
        >
          <FaPlus />
          <span>Add New Student</span>
        </button>
      </div>

      {/* Content */}
      {filteredStudents.length === 0 ? (
        <EmptyState />
      ) : (
        <StudentsTable students={filteredStudents} onEdit={handleEditStudent} onDelete={handleDeleteStudent} onSelect={handleStudentClick} />
      )}

      {/* Modals */}
      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingStudent(null);
        }}
        onAddStudent={handleAddStudent}
        editingStudent={editingStudent}
      />
      <DeleteConfirmation
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteStudent}
        courseName={studentToDelete?.name}
      />
    </motion.div>
  );
};

// Sub-components for better organization
const EmptyState = () => (
  <div className="text-center py-8 sm:py-12">
    <FaUsers className="mx-auto h-16 w-16 sm:h-24 sm:w-24 text-gray-300 mb-4" />
    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No students found</h3>
    <p className="text-gray-500 mb-6 text-sm sm:text-base">Get started by adding your first student.</p>
  </div>
);

const StudentsTable = ({ students, onEdit, onDelete, onSelect }) => (
  <motion.div
    className="overflow-x-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    <table className="min-w-full table-auto text-sm">
      <thead>
        <tr className="bg-[#002e5d]">
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">Sr. No.</th>
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">Full Name</th>
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">Registration No</th>
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">Department</th>
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id} className="border-t hover:bg-gray-50 cursor-pointer transition-colors">
            <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900" onClick={() => onSelect(student)}>
              {index + 1}
            </td>
            <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900" onClick={() => onSelect(student)}>
              {student.name}
            </td>
            <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900" onClick={() => onSelect(student)}>
              {student.registrationNo}
            </td>
            <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900" onClick={() => onSelect(student)}>
              {student.department}
            </td>
            <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1">
                <button
                  onClick={() => onEdit(student)}
                  className="text-white bg-green-500 hover:bg-green-600 px-2 py-1 rounded text-xs transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(student)}
                  className="text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs transition-colors"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </motion.div>
);

export default Students;
