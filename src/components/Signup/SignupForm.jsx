import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import FormHeading from "./FormHeading";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import RememberMe from "./RememberMe";
import SubmitButton from "./SubmitButton";
import BottomText from "./BottomText";

const SignupForm = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (!validatePassword(form.password)) {
      newErrors.password = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const success = await signup(form.name);
      if (success) {
        alert("Signup successful!");
        navigate('/login');
      }
    }
  };

  return (
    <>
      <FormHeading />

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <NameInput form={form} setForm={setForm} errors={errors} />
        <EmailInput form={form} setForm={setForm} errors={errors} />
        <PasswordInput form={form} setForm={setForm} errors={errors} />
        <ConfirmPasswordInput form={form} setForm={setForm} errors={errors} />
        <RememberMe form={form} setForm={setForm} />
        <SubmitButton />
      </form>



      <BottomText />
    </>
  );
};

export default SignupForm;
