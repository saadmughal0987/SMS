import { Link } from 'react-router-dom';

const FormHeader = ({ logo }) => (
  <div className="text-center mb-8">
    <Link to="/">
      <img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 cursor-pointer" />
    </Link>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Add New Student</h2>
    <p className="text-gray-600 mt-2">Enter student details below</p>
  </div>
);

export default FormHeader;