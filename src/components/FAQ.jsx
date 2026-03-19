import React, { useState } from "react";

const faqData = [
  {
    question: "How can I hire a housemaid/babysitter/cook from Broomees?",
    answer: `1: Choose your desired service, fill in your requirements and make a booking on our platform.
2: Confirm your requirements with the relationship manager assigned to you.
3: Sit tight while our relationship manager finds the right fit for your home.`,
  },
  {
    question: "What if I’m not satisfied with the services?",
    answer:
      "We provide replacement guarantee. If you are not satisfied, our team will help you find another verified helper quickly.",
  },
  {
    question: "How much will a cook/maid/babysitter cost in Delhi NCR?",
    answer:
      "Prices depend on service type, location, and working hours. Our platform provides transparent pricing.",
  },
  {
    question:
      "Why do your services seem more expensive than other helpers in the market?",
    answer:
      "Our helpers go through strict verification, background checks, training, and quality assessment.",
  },
  {
    question: "Is a maid/cook/babysitter from Broomees reliable?",
    answer:
      "Yes. All helpers are verified, background checked, and monitored for service quality.",
  },
  {
    question:
      "Is it safe to hire a maid/cook/babysitter during the pandemic?",
    answer:
      "Yes. Our workers follow strict hygiene protocols and health checks.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          FAQs
        </h2>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">

          {faqData.map((faq, index) => (
            <div key={index} className="border-b">

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                {faq.question}

                <span className="text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 text-gray-600 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 pb-5"
                    : "max-h-0"
                }`}
              >
                <p className="whitespace-pre-line">{faq.answer}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;