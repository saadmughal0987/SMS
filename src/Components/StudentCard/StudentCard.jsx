const StudentCard = ({ name, rollNumber, course, department }) => {
  return (
    <div className="bg-white text-gray-800 p-4 md:p-6 rounded-xl shadow-lg max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center text-gray-900 underline">{name}</h2>
      <div className="space-y-2 text-sm md:text-base">
        <p><strong className="text-gray-600">Roll Number:</strong> <span className="text-gray-800">{rollNumber}</span></p>
        <p><strong className="text-gray-600">Course:</strong> <span className="text-gray-800">{course}</span></p>
        <p><strong className="text-gray-600">Department:</strong> <span className="text-gray-800">{department}</span></p>
      </div>
    </div>
  );
};

export default StudentCard;