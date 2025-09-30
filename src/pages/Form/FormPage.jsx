import { motion } from 'framer-motion';
import FormHeader from '../../Components/Form/FormHeader';
import FormFields from '../../Components/Form/FormFields';
import SubmitButton from '../../Components/Form/SubmitButton';
import ViewStudentsButton from '../../Components/Form/ViewStudentsButton';

const FormPage = ({ formData, onChange, onSubmit, onViewStudents, logo }) => (
  <motion.div className="min-h-screen bg-gray-50 flex items-center justify-center p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}>
    <div className="bg-white p-6 md:p-10 rounded-2xl max-w-lg w-full border border-gray-200 shadow-xl">
      <FormHeader logo={logo} />
      <form onSubmit={onSubmit} className="space-y-6">
        <FormFields formData={formData} onChange={onChange} />
        <SubmitButton />
      </form>
      <ViewStudentsButton onClick={onViewStudents} />
    </div>
  </motion.div>
);

export default FormPage;