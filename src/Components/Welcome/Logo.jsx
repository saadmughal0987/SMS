import { motion } from 'framer-motion';

const Logo = ({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    className="w-30 h-24 md:w-36 md:h-36 mb-6 mx-auto"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 3.2, duration: 0.5, ease: "easeInOut" }}
  />
);

export default Logo;