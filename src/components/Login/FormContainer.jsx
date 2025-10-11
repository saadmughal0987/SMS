import { motion } from "framer-motion";

const FormContainer = ({ children }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 md:relative md:-top-6 md:left-0 h-[590px] w-full max-w-[640px] flex flex-col justify-center items-center md:items-start text-center form-bg"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <img
        src="/src/assets/formContainer.png"
        alt=""
        className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover opacity-90 -z-10"
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FormContainer;