import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const ConfirmPasswordInput = ({ form, setForm, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="relative">
      <FaLock className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 pl-6 pr-8"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
      {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
    </div>
  );
};

export default ConfirmPasswordInput;