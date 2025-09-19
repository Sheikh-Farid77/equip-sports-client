// FAQ.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What types of sports equipment do you sell?",
    answer:
      "We offer a wide range of equipment including footballs, cricket gear, badminton rackets, gloves, kits, and much more to support all levels of players.",
  },
  {
    question: "Do you provide international shipping?",
    answer:
      "Yes, we ship worldwide with fast and secure delivery. Shipping charges may vary depending on the country.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Absolutely! We have a 7-day return and exchange policy if the product is unused and in original condition.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you’ll receive a tracking ID via email or SMS to monitor your delivery in real-time.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes, we provide special discounts for bulk purchases. Contact our support team for more details.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-t-xl focus:outline-none transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
