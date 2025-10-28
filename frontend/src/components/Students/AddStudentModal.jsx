import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const AddStudentModal = ({ isOpen, onClose, onAddStudent, editingStudent }) => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    gender: "",
    cnic: "",
    dateOfBirth: "",
    registrationNo: "",
    department: "",
    program: "",
    semester: "",
    section: "",
    currentCgpa: "",
    graduated: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    guardianPhone: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (editingStudent) {
      const [firstName, ...lastNameParts] =
        editingStudent.name?.split(" ") || [];
      const lastName = lastNameParts.join(" ");
      setFormData({
        firstName: firstName || "",
        lastName: lastName || "",
        gender: editingStudent.gender || "",
        cnic: editingStudent.cnic || "",
        dateOfBirth: editingStudent.dateOfBirth || "",
        registrationNo: editingStudent.registrationNo || "",
        department: editingStudent.department || "",
        program: editingStudent.program || "",
        semester: editingStudent.semester || "",
        section: editingStudent.section || "",
        currentCgpa: editingStudent.currentCgpa || "",
        graduated: editingStudent.graduated || "",
        email: editingStudent.email || "",
        phone: editingStudent.phone || "",
        country: editingStudent.country || "",
        city: editingStudent.city || "",
        guardianPhone: editingStudent.guardianPhone || "",
      });
    } else {
      setFormData(initialFormData);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      registrationNo: formData.registrationNo,
      department: formData.department,
      ...formData,
    };

    onAddStudent(studentData);
    setFormData(initialFormData);
    onClose();
  };

  const resetForm = () => {
    setFormData(initialFormData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#112b4f]">
            {editingStudent ? "Edit Student" : "Add New Student"}
          </h2>
          <button
            onClick={resetForm}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormSection title="Basic Information">
            <FormGrid>
              <FormField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <FormField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <FormSelect
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </FormSelect>
              <FormField
                label="CNIC Number"
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
                required
              />
              <FormField
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </FormGrid>
          </FormSection>

          <FormSection title="Academic Information">
            <FormGrid>
              <FormField
                label="Student Registration No"
                name="registrationNo"
                value={formData.registrationNo}
                onChange={handleChange}
                required
              />
              <FormField
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
              <FormField
                label="Program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
              />
              <FormField
                label="Semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
              />
              <FormField
                label="Section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                required
              />
              <FormField
                label="Current CGPA"
                name="currentCgpa"
                type="number"
                step="0.01"
                value={formData.currentCgpa}
                onChange={handleChange}
                required
              />
              <FormSelect
                label="Graduated"
                name="graduated"
                value={formData.graduated}
                onChange={handleChange}
                required
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </FormSelect>
            </FormGrid>
          </FormSection>

          <FormSection title="Contact Information">
            <FormGrid>
              <FormField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <FormField
                label="Guardian Phone Number"
                name="guardianPhone"
                type="tel"
                value={formData.guardianPhone}
                onChange={handleChange}
                required
              />
              <FormField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
              <FormField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </FormGrid>
          </FormSection>

          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors order-2 sm:order-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#002e5d] text-white rounded-md hover:bg-[#01284f] transition-colors order-1 sm:order-2"
            >
              {editingStudent ? "Update Student" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FormSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-[#112b4f]">{title}</h3>
    <hr className="border-gray-300" />
    {children}
  </div>
);

const FormGrid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
);

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  step,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      step={step}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002e5d] transition-colors"
      required={required}
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, required, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002e5d] transition-colors"
      required={required}
    >
      {children}
    </select>
  </div>
);

export default AddStudentModal;
