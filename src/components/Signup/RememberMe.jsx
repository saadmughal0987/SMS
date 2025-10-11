const RememberMe = ({ form, setForm }) => {
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="flex items-center mt-3">
      <input
        type="checkbox"
        name="remember"
        checked={form.remember}
        onChange={handleChange}
        className="mr-2 accent-blue-500"
      />
      <label className="text-gray-700 text-sm">Remember me</label>
    </div>
  );
};

export default RememberMe;