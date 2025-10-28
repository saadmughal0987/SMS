import { Link } from "react-router-dom";

const BottomText = () => {
  return (
    <p className="text-center text-sm text-gray-600 mt-6">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-600 hover:underline">
        Sign in
      </Link>
    </p>
  );
};

export default BottomText;