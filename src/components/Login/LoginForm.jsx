import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import SocialLoginButtons from "./SocialLoginButtons";

const LoginForm = () => {
  const { login, loginWithGoogle, loginWithMicrosoft } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const inputStyle =
    "w-80 px-4 py-2 mb-4 rounded-full backdrop-blur-sm border border-gray-300 focus:border-2 focus:border-[#b6d5fd] focus:ring-2 focus:ring-[#b6d5fd] focus:shadow-lg focus:outline-none placeholder-gray-500 transition-all duration-200";
  const gradientBg = {
    background: "linear-gradient(to left, #e7f2fc, #f9fcff)",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await login();
    setLoading(false);
    if (success) {
      navigate('/dashboard');
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const success = await loginWithGoogle();
    setLoading(false);
    if (success) {
      navigate('/dashboard');
    }
  };

  const handleMicrosoftLogin = async () => {
    setLoading(true);
    const success = await loginWithMicrosoft();
    setLoading(false);
    if (success) {
      navigate('/dashboard');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center px-6 py-10 md:ml-7 bg-transparent rounded-br-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex flex-col items-center" variants={itemVariants}>
        <motion.input
          type="email"
          placeholder="Enter Email"
          className={inputStyle}
          style={gradientBg}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(e); }}
          variants={itemVariants}
        />
        <motion.input
          type="password"
          placeholder="Enter Password"
          className={`${inputStyle} mb-4`}
          style={gradientBg}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(e); }}
          variants={itemVariants}
        />
      </motion.div>

      <motion.div className="flex flex-col items-center" variants={itemVariants}>
        <SocialLoginButtons
          onGoogleLogin={handleGoogleLogin}
          onMicrosoftLogin={handleMicrosoftLogin}
          loading={loading}
        />

        <div className="mt-4 text-center">
          <Link to="/signup" className="text-[#002E5D] hover:underline">Don't have an account? Sign up</Link>
        </div>
      </motion.div>
    </motion.form>
  );
};

export default LoginForm;
