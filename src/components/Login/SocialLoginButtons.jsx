import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const SocialLoginButtons = ({ onGoogleLogin, onMicrosoftLogin, loading }) => {
  const buttonBase = "w-full max-w-52 flex items-center justify-center gap-2 rounded-md py-2 px-3 font-medium transition-all duration-300";

  return (
    <>
      <motion.button
        onClick={onGoogleLogin}
        disabled={loading}
        className={`${buttonBase} border border-[#002E5D] text-[#002E5D] hover:bg-[#1d2c55] hover:text-white mb-1 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <FcGoogle className="w-5 h-5" />
        Login With Google
      </motion.button>

      <div className="text-gray-600 font-medium text-center mb-1">Or</div>

      <motion.button
        onClick={onMicrosoftLogin}
        disabled={loading}
        className={`${buttonBase} border border-gray-400 text-gray-700 hover:bg-[#1d2c55] hover:text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <img
          src="https://img.icons8.com/color/24/microsoft.png"
          alt="Microsoft"
          className="w-5 h-5"
        />
        Login With Microsoft
      </motion.button>
    </>
  );
};

export default SocialLoginButtons;