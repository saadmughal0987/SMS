import { useState, useEffect } from "react";
import { FaSearch, FaPlus, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import AddStudentModal from "./AddStudentModal";
import StudentDetail from "./StudentDetail";
import DeleteConfirmation from "../CourseDetails/DeleteConfirmation";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  // Auto-hide message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get("http://localhost:5000/api/students", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((res) => {
          console.log("Students fetched:", res.data.students);
          setStudents(res.data.students);
        })
        .catch((err) => {
          console.error("Error fetching students:", err);
          console.error("Error response:", err.response);
          setMessage("Failed to load students. Please check your login status.");
          setMessageType("error");
        });
    } else {
      console.log("No token found in localStorage");
      setMessage("Please login first to view students.");
      setMessageType("error");
    }
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);


  const filteredStudents = students.filter(
    (student, index) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.registrationNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (index + 1).toString().includes(searchTerm)
  );

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

  const confirmDeleteStudent = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage("Please login first to delete students.");
        setMessageType("error");
        return;
      }

      await axios.delete(`http://localhost:5000/api/students/${studentToDelete._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStudents((prev) =>
        prev.filter((student) => student._id !== studentToDelete._id)
      );
      setMessage("Student deleted successfully!");
      setMessageType("success");
    } catch (error) {
      console.error("Error deleting student:", error);
      if (error.response?.status === 401) {
        setMessage("Authentication failed. Please login again.");
        setMessageType("error");
      } else if (error.response?.status === 403) {
        setMessage("You don't have permission to perform this action.");
        setMessageType("error");
      } else {
        setMessage("Failed to delete student. Please try again.");
        setMessageType("error");
      }
    }
    setIsDeleteModalOpen(false);
    setStudentToDelete(null);
  };

  const handleAddStudent = async (newStudent) => {
    try {
      const token = localStorage.getItem('token');
      console.log("Token:", token);
      console.log("Student data:", newStudent);

      if (!token) {
        setMessage("Please login first to add students.");
        setMessageType("error");
        return;
      }

      if (editingStudent) {
        // PUT (Update existing)
        const response = await axios.put(
          `http://localhost:5000/api/students/${editingStudent._id}`,
          newStudent,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("Update response:", response.data);
        setStudents((prev) =>
          prev.map((s) => (s._id === editingStudent._id ? response.data.student : s))
        );
        setMessage("Student updated successfully!");
        setMessageType("success");
      } else {
        // POST (Add new)
        const response = await axios.post(
          "http://localhost:5000/api/students",
          newStudent,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("Add response:", response.data);
        setStudents((prev) => [...prev, response.data.student]);
        setMessage("Student added successfully!");
        setMessageType("success");
      }
    } catch (error) {
      console.error("Error saving student:", error);
      console.error("Error response:", error.response);
      console.error("Error status:", error.response?.status);
      console.error("Error data:", error.response?.data);

      // Show user-friendly error message
      if (error.response?.status === 401) {
        setMessage("Authentication failed. Please login again.");
        setMessageType("error");
      } else if (error.response?.status === 403) {
        setMessage("You don't have permission to perform this action.");
        setMessageType("error");
      } else if (error.response?.status === 400) {
        setMessage(error.response?.data?.message || "Invalid data provided.");
        setMessageType("error");
      } else {
        setMessage("Failed to save student. Please try again.");
        setMessageType("error");
      }
    }
  };

  if (selectedStudent) {
    return (
      <StudentDetail student={selectedStudent} onBack={handleBackToList} />
    );
  }

  return (
    <motion.div
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl sm:text-2xl text-[#112b4f] mb-4 font-sans">
        Students
      </h1>
      <hr className="border-gray-300 mb-6" />

      {/* Message Display */}
      {message && (
        <div className={`mb-4 p-3 rounded-md ${
          messageType === "success"
            ? "bg-green-100 text-green-800 border border-green-200"
            : "bg-red-100 text-red-800 border border-red-200"
        }`}>
          {message}
          <button
            onClick={() => setMessage("")}
            className="float-right ml-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      )}

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

      {filteredStudents.length === 0 ? (
        <EmptyState />
      ) : (
        <StudentsTable
          students={filteredStudents}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
          onSelect={handleStudentClick}
        />
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

      {/* Auto-hide message after 5 seconds */}
      {message && (
        <div className="fixed top-4 right-4 z-50">
          <div className={`p-4 rounded-md shadow-lg ${
            messageType === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}>
            {message}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const EmptyState = () => (
  <div className="text-center py-8 sm:py-12">
    <FaUsers className="mx-auto h-16 w-16 sm:h-24 sm:w-24 text-gray-300 mb-4" />
    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
      No students found
    </h3>
    <p className="text-gray-500 mb-6 text-sm sm:text-base">
      Get started by adding your first student.
    </p>
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
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">
            Sr. No.
          </th>
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">
            Full Name
          </th>
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">
            Registration No
          </th>
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">
            Department
          </th>
          <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-white">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr
            key={student._id}
            className="border-t hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <td
              className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900"
              onClick={() => onSelect(student)}
            >
              {index + 1}
            </td>
            <td
              className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900"
              onClick={() => onSelect(student)}
            >
              {student.name}
            </td>
            <td
              className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900"
              onClick={() => onSelect(student)}
            >
              {student.registrationNo}
            </td>
            <td
              className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900"
              onClick={() => onSelect(student)}
            >
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
