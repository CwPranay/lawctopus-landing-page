"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who should enroll in this course?",
    answer:
      "This course is designed for law students, young lawyers, experienced advocates, business professionals, chartered accountants and anyone who wants to master contract drafting and build a freelancing career.",
  },
  {
    question: "Is the course live or recorded?",
    answer:
      "The program consists primarily of live online sessions. All live sessions are recorded, allowing learners to revisit them anytime through lifetime access.",
  },
  {
    question: "Will I receive lifetime access?",
    answer:
      "Yes. You'll receive lifetime access to recorded lectures, reading resources, assignments and other course materials.",
  },
  {
    question: "Will I receive feedback on my assignments?",
    answer:
      "Yes. Learners receive personalized feedback on contract drafting assignments as well as guidance on freelancing, CV building and career preparation.",
  },
  {
    question: "Does this course include freelancing training?",
    answer:
      "Yes. Dedicated sessions cover Upwork, Fiverr, LinkedIn optimization, proposal writing, networking and client communication to help learners start freelancing confidently.",
  },
  {
    question: "How much time should I dedicate each week?",
    answer:
      "Professionals typically require around 5–6 hours per week, while law students should expect to dedicate approximately 6–7 hours weekly.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes. The course includes a money-back guarantee as mentioned on the official course page, subject to the applicable terms and conditions.",
  },
  {
    question: "Still have questions?",
    answer: "email",
    isSpecial: true,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              FAQ
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Everything you need to know before enrolling in the Expert-Level
              Contract Drafting & Freelancing Course.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:border-gray-300">
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors duration-200 lg:p-8"
                  aria-expanded={openIndex === index}
                >
                  <span className="flex-1 text-lg font-semibold text-gray-900 lg:text-xl">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-[#991B1B]" strokeWidth={2} />
                    ) : (
                      <Plus className="h-6 w-6 text-gray-400" strokeWidth={2} />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-gray-100 px-6 pb-6 pt-4 lg:px-8 lg:pb-8">
                        {faq.isSpecial ? (
                          <div>
                            <p className="mb-4 text-base leading-relaxed text-gray-600">
                              Email us at:
                            </p>
                            <div className="inline-block rounded-lg bg-gray-50 px-4 py-3">
                              <a
                                href="mailto:courses@lawctopus.com"
                                className="text-base font-semibold text-[#991B1B] transition-colors hover:text-[#7f1616]"
                              >
                                courses@lawctopus.com
                              </a>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                              We usually respond within 24 hours.
                            </p>
                          </div>
                        ) : (
                          <p className="text-base leading-relaxed text-gray-600">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
