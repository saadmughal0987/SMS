import { useState } from 'react';
import { motion } from 'framer-motion';
import StudentCard from './StudentCard';

const App = () => {
  const [currentView, setCurrentView] = useState('welcome');
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    course: '',
    department: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({
      name: '',
      rollNumber: '',
      course: '',
      department: ''
    });
    setCurrentView('dashboard');
  };

  const handleRemove = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const WelcomePage = () => (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative overflow-hidden" style={{ backgroundImage: "url('/src/assets/women/women.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        className="absolute w-16 h-16 bg-white rounded-full z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: [0, 200, 150, 200, 175, 200, 187.5, 200],
          opacity: [0, 1, 1, 1, 1, 1, 1, 0]
        }}
        transition={{
          duration: 3,
          times: [0, 0.1, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
          ease: "easeOut"
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.h1
          className="text-6xl font-bold mb-8"
          animate={{ y: [0, -20, 0] }}
          transition={{ delay: 3.8, duration: 2, repeat: Infinity }}
        >
          Welcome to the Student Management System
        </motion.h1>
        <motion.button
          onClick={() => setCurrentView('form')}
          className="bg-white text-blue-500 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );

  const FormPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              placeholder="Enter roll number"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
            <input
              type="text"
              name="course"
              placeholder="Enter course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <input
              type="text"
              name="department"
              placeholder="Enter department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add Student
          </motion.button>
        </form>
        <motion.button
          onClick={() => setCurrentView('dashboard')}
          className="w-full mt-4 bg-gray-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Students
        </motion.button>
      </motion.div>
    </div>
  );

  const DashboardPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Student Dashboard</h1>
          <motion.button
            onClick={() => setCurrentView('form')}
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add New Student
          </motion.button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {students.map((student, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <StudentCard
                name={student.name}
                rollNumber={student.rollNumber}
                course={student.course}
                department={student.department}
              />
              <motion.button
                onClick={() => handleRemove(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );

  if (currentView === 'welcome') return <WelcomePage />;
  if (currentView === 'form') return <FormPage />;
  return <DashboardPage />;
};

export default App;
