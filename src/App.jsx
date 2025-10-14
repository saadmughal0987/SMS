import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import StudentsPage from './pages/StudentsPage/StudentsPage'
import { AuthProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
