import { FaEnvelope } from "react-icons/fa";

const EmailInput = ({ form, setForm, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="relative">
      <FaEnvelope className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 pl-6"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
    </div>
  );
};

export default EmailInput;