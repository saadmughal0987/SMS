import { motion } from "framer-motion";
import { useState } from "react";
import aboutData from "../../pages/AboutPage/aboutData.json";

const ContactFormSection = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const { title } = aboutData.contact;

  // Basic validation
  const validateForm = () => {
    const newErrors = {};
    if (!contactForm.name.trim()) newErrors.name = "Name is required";
    if (!contactForm.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(contactForm.email))
      newErrors.email = "Email is invalid";
    if (!contactForm.subject.trim()) newErrors.subject = "Subject is required";
    if (!contactForm.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully!", contactForm);
      setContactForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleInputChange = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <motion.section
      className="bg-white rounded-lg shadow-md p-8 mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-semibold text-[#002E5D] mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#002E5D] focus:border-transparent ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#002E5D] focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={contactForm.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#002E5D] focus:border-transparent ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              value={contactForm.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#002E5D] focus:border-transparent resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tell us how we can help you..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#002E5D] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#003d7a] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#002E5D] focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactFormSection;
