"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const benefits = [
  "Build a professional LinkedIn profile",
  "Create an Upwork & Fiverr profile",
  "Draft job-winning CVs & cover letters",
  "Learn networking & client communication",
  "Get freelancing guidance from industry experts",
  "Receive career mentorship and practical support",
  "Internship & Job Opportunity Sharing",
  "One-to-One Career Coaching",
];

const careerSessions = [
  "LinkedIn Profile Building",
  "CV & Cover Letter Reviews",
  "Upwork & Fiverr Training",
  "Networking Sessions",
  "One-to-One Career Coaching",
  "Internship & Freelancing Opportunities",
];

export default function CareerSupport() {
  return (
    <section id="career" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 xl:gap-20">
          {/* Left Side - 55% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Label */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Career Support
            </p>

            {/* Heading */}
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl xl:text-6xl">
              Learn. Build. Earn.
            </h2>

            {/* Description */}
            <p className="mb-10 text-lg leading-relaxed text-gray-600 lg:text-xl">
              Designed for law students, young lawyers, and aspiring legal professionals, this course helps you build a strong professional profile, secure internships, and confidently launch your freelancing career through expert guidance and practical mentorship.
            </p>

            {/* Checklist */}
            <div className="mb-10 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600" />
                  <span className="text-base font-medium text-gray-700">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#991B1B] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#7f1616] hover:shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - 45% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-full rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 lg:p-10">
              {/* Header */}
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 lg:text-3xl">
                    Career Advancement
                  </h3>
                  <p className="text-lg font-bold text-[#991B1B]">
                    22 Live Career Sessions
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#991B1B]/10">
                  <Sparkles className="h-6 w-6 text-[#991B1B]" />
                </div>
              </div>

              {/* Sessions List */}
              <div className="mb-8 space-y-3">
                {careerSessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-base text-gray-700"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#991B1B]" />
                    <span className="leading-relaxed">{session}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Badge */}
              <div className="rounded-lg bg-white px-4 py-3 text-center">
                <p className="text-sm font-medium text-gray-700">
                  Helping learners become confident legal professionals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
