import logo from "/src/assets/logo.png";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="self-center mb-6"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <img
        src={logo}
        alt="UCP Logo"
        className="w-32 h-32 mx-auto shadow-sm md:mr-24 md:mt-14"
      />
    </motion.div>
  );
};

export default Logo;
