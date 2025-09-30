import { motion } from 'framer-motion';
import BouncingBall from '../../Components/Welcome/BouncingBall';
import Logo from '../../Components/Welcome/Logo';
import Title from '../../Components/Welcome/Title';
import GetStartedButton from '../../Components/Welcome/GetStartedButton';

const WelcomePage = ({ onGetStarted, logo, bgImage }) => (
  <motion.div className="min-h-screen flex flex-col items-center justify-center text-gray-800 relative overflow-hidden" style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'right'}} exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}>
    <BouncingBall />
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.8, ease: "easeInOut" }}
      className="text-center relative z-10"
    >
      <Logo src={logo} alt="Logo" />
      <Title />
      <GetStartedButton onClick={onGetStarted} />
    </motion.div>
  </motion.div>
);

export default WelcomePage;