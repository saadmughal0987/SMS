import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import bgImage from './assets/bg.png';
import WelcomePage from './pages/Welcome/WelcomePage';
import FormPage from './pages/Form/FormPage';
import DashboardPage from './pages/Dashboard/DashboardPage';

const App = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Overview');
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [];
  });
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    course: '',
    department: ''
  });

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

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
    navigate('/dashboard');
    setActiveNav('Overview');
  };

  const handleRemove = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <Routes>
      <Route path="/" element={<WelcomePage onGetStarted={() => navigate('/form')} logo={logo} bgImage={bgImage} />} />
      <Route path="/form" element={<FormPage formData={formData} onChange={handleChange} onSubmit={handleSubmit} onViewStudents={() => navigate('/dashboard')} logo={logo} />} />
      <Route path="/dashboard" element={<DashboardPage students={students} onRemove={handleRemove} onAddNew={() => navigate('/form')} activeNav={activeNav} logo={logo} />} />
    </Routes>
  );
};

export default App;

