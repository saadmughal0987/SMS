import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import aboutData from "../../pages/AboutPage/aboutData.json";

/**
 * FAQSection component displays frequently asked questions with
 * expandable/collapsible answers and smooth animations.
 */
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { title, questions } = aboutData.faq;

  return (
    <motion.section
      className="bg-white rounded-lg shadow-md p-8 mb-10"
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
      <div className="max-w-4xl mx-auto space-y-4">
        {questions.map((faq, index) => (
          <motion.div
            key={faq.question}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="w-full px-6 py-5 text-left bg-gray-50 hover:bg-gray-100 transition-all duration-300 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#002E5D] focus:ring-opacity-50"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              whileHover={{ backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="font-semibold text-[#002E5D] text-left pr-4">{faq.question}</span>
              <motion.div
                className="flex-shrink-0"
                animate={{ rotate: openFAQ === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <svg
                  className="w-5 h-5 text-[#002E5D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-white border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;