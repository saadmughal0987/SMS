import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const LoginForm = () => {
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

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save user data + token in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Directly navigate to dashboard without alert
        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
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
          variants={itemVariants}
        />
        <motion.input
          type="password"
          placeholder="Enter Password"
          className={`${inputStyle} mb-4`}
          style={gradientBg}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variants={itemVariants}
        />
      </motion.div>

      <motion.div className="flex flex-col items-center" variants={itemVariants}>
        <motion.button
          type="submit"
          disabled={loading}
          className={`w-full max-w-52 py-2 px-3 rounded-md font-medium transition-all duration-300 border border-[#002E5D] text-[#002E5D] hover:bg-[#1d2c55] hover:text-white ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          } flex items-center justify-center gap-2`}
          variants={itemVariants}
        >
          <FiLogIn className="w-5 h-5 text-[#f4931e] font-bold " />
          <span>{loading ? "Logging in..." : "Login"}</span>
        </motion.button>

        <div className="mt-4 text-center">
          <Link to="/signup" className="text-[#002E5D] hover:underline">
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </motion.div>
    </motion.form>
  );
};

export default LoginForm;
