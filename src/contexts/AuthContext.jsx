import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async () => {
    // Dummy login: always succeed
    setIsAuthenticated(true);
    const storedUser = JSON.parse(localStorage.getItem('user')) || { email: 'user@example.com', name: 'User', profilePhoto: null };
    setUser(storedUser);
    localStorage.setItem('user', JSON.stringify(storedUser));
    return true;
  };

  const loginWithGoogle = async () => {
    // Dummy Google login
    setIsAuthenticated(true);
    const storedUser = JSON.parse(localStorage.getItem('user')) || { email: 'google@example.com', name: 'Google User', profilePhoto: null };
    setUser(storedUser);
    localStorage.setItem('user', JSON.stringify(storedUser));
    return true;
  };

  const loginWithMicrosoft = async () => {
    // Dummy Microsoft login
    setIsAuthenticated(true);
    const storedUser = JSON.parse(localStorage.getItem('user')) || { email: 'microsoft@example.com', name: 'Microsoft User', profilePhoto: null };
    setUser(storedUser);
    localStorage.setItem('user', JSON.stringify(storedUser));
    return true;
  };

  const signup = async (name) => {
    // Dummy signup: always succeed
    setIsAuthenticated(true);
    const newUser = { email: 'user@example.com', name, profilePhoto: null };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const updateProfilePhoto = (photo) => {
    const updatedUser = { ...user, profilePhoto: photo };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, loginWithGoogle, loginWithMicrosoft, signup, logout, updateProfilePhoto }}>
      {children}
    </AuthContext.Provider>
  );
};