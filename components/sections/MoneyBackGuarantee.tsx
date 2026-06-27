"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle } from "lucide-react";

const highlights = [
  "Risk-Free Enrollment",
  "Transparent Refund Policy",
  "Dedicated Learner Support",
];

export default function MoneyBackGuarantee() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-gray-200 bg-white px-8 py-16 text-center lg:px-16 lg:py-20"
        >
          {/* Icon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 lg:h-24 lg:w-24">
              <ShieldCheck className="h-10 w-10 text-[#991B1B] lg:h-12 lg:w-12" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Label */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#991B1B]">
            Money-Back Guarantee
          </p>

          {/* Heading */}
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
            Learn With Complete Confidence
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl">
            If the course does not meet the stated guarantee terms, eligible
            learners can request a refund according to Lawctopus' refund policy.
            This allows learners to enroll with greater confidence while
            committing to the program.
          </p>

          {/* Trust Highlights */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 text-base font-semibold text-gray-900"
              >
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-auto mb-8 h-px w-24 bg-gray-300" />

          {/* Bottom Text */}
          <p className="mx-auto max-w-2xl text-base text-gray-600">
            Your learning journey is backed by expert support and a commitment to
            delivering practical legal education.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
