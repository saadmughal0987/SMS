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
  const [loading, setLoading] = useState(false);

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChar
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid.";

    if (!form.password) newErrors.password = "Password is required.";
    else if (!validatePassword(form.password))
      newErrors.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required.";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        // ✅ Fixed backend route URL
        const res = await fetch("http://localhost:5000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            confirmPassword: form.confirmPassword,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          alert("Signup successful! Please log in.");
          navigate("/login");
        } else {
          alert(data.message || "Signup failed. Try again.");
        }
      } catch (error) {
        alert("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <FormHeading />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <NameInput form={form} setForm={setForm} errors={errors} />
        <EmailInput form={form} setForm={setForm} errors={errors} />
        <PasswordInput form={form} setForm={setForm} errors={errors} />
        <ConfirmPasswordInput form={form} setForm={setForm} errors={errors} />
        <RememberMe form={form} setForm={setForm} />
        <SubmitButton loading={loading} />
      </form>
      <BottomText />
    </>
  );
};

export default SignupForm;
