const StudentCard = ({ name, rollNumber, course, department }) => {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">{name}</h2>
      <div className="space-y-2">
        <p><strong>Roll Number:</strong> {rollNumber}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Department:</strong> {department}</p>
      </div>
    </div>
  );
};

export default StudentCard;