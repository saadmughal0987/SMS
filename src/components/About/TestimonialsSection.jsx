import { motion } from "framer-motion";
import aboutData from "../../pages/AboutPage/aboutData.json";

/**
 * TestimonialsSection component displays user testimonials with ratings
 * in a responsive grid layout with smooth animations.
 */
const TestimonialsSection = () => {
  const { title, items } = aboutData.testimonials;

  // Generate star rating display
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <motion.section
      className="bg-gray-50 rounded-lg p-8 mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-semibold text-[#002E5D] mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="w-12 h-12 bg-[#002E5D] rounded-full flex items-center justify-center text-white font-bold text-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {testimonial.name.charAt(0)}
              </motion.div>
              <div className="ml-4">
                <h4 className="font-semibold text-[#002E5D]">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <blockquote className="text-gray-700 italic leading-relaxed mb-4">
              "{testimonial.testimonial}"
            </blockquote>
            <div className="flex items-center space-x-1">
              {renderStars(testimonial.rating)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;