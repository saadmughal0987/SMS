import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * StudentDetail component - Displays detailed information about a selected student
 * Features: Responsive design, animations, organized information sections
 */
const StudentDetail = ({ student, onBack }) => {
  if (!student) return null;

  return (
    <motion.div
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-[#112b4f] mb-6 transition-transform duration-300 hover:scale-110"
      >
        <FaArrowLeft />
        <span>Back to Students List</span>
      </button>

      {/* Student Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#112b4f] mb-2">
          {student.name}
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Registration No: {student.registrationNo}
        </p>
      </div>

      {/* Information Sections */}
      <div className="space-y-6">
        <InfoSection title="Basic Information">
          <InfoGrid>
            <InfoItem label="First Name" value={student.firstName} />
            <InfoItem label="Last Name" value={student.lastName} />
            <InfoItem label="Gender" value={student.gender} />
            <InfoItem label="CNIC" value={student.cnic} />
            <InfoItem label="Date of Birth" value={student.dateOfBirth} />
          </InfoGrid>
        </InfoSection>

        <InfoSection title="Academic Information">
          <InfoGrid>
            <InfoItem label="Registration No" value={student.registrationNo} />
            <InfoItem label="Department" value={student.department} />
            <InfoItem label="Program" value={student.program} />
            <InfoItem label="Semester" value={student.semester} />
            <InfoItem label="Section" value={student.section} />
            <InfoItem label="Current CGPA" value={student.currentCgpa} />
            <InfoItem label="Graduated" value={student.graduated} />
          </InfoGrid>
        </InfoSection>

        <InfoSection title="Contact Information">
          <InfoGrid>
            <InfoItem label="Email" value={student.email} />
            <InfoItem label="Phone" value={student.phone} />
            <InfoItem label="Guardian Phone" value={student.guardianPhone} />
            <InfoItem label="Country" value={student.country} />
            <InfoItem label="City" value={student.city} />
          </InfoGrid>
        </InfoSection>
      </div>
    </motion.div>
  );
};

// Reusable components
const InfoSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-lg sm:text-xl font-semibold text-[#112b4f]">{title}</h3>
    <hr className="border-gray-300" />
    {children}
  </div>
);

const InfoGrid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
);

const InfoItem = ({ label, value }) => (
  <div>
    <span className="font-medium text-gray-700">{label}:</span>
    <p className="text-gray-900 mt-1">{value || "N/A"}</p>
  </div>
);

export default StudentDetail;
