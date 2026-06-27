"use client";

import { motion } from "framer-motion";
import { FileText, Video, Briefcase, MessageSquare, Infinity, Rocket } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Draft 24+ Real Agreements",
    description: "Learn to draft high-demand agreements through practical exercises and expert guidance.",
  },
  {
    icon: Video,
    title: "54 Live Expert Sessions",
    description: "Interactive live classes led by experienced legal professionals.",
  },
  {
    icon: Briefcase,
    title: "Freelancing Training",
    description: "Build your Upwork profile, portfolio and confidently work with your first client.",
  },
  {
    icon: MessageSquare,
    title: "Personalized Feedback",
    description: "Receive detailed reviews on your assignments to improve your drafting skills.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description: "Revisit recorded lectures, reading materials and templates anytime.",
  },
  {
    icon: Rocket,
    title: "Accelerate Your Career",
    description: "Learn in 6 months what many lawyers gain through years of practical experience.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="bg-white py-20 lg:py-28">
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
              Why Choose This Course
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
              Everything You Need to Become
              <br />a Contract Drafting Expert
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              This program combines practical legal drafting, expert mentorship,
              freelancing guidance, and career support to help learners become
              industry-ready.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-[#991B1B] transition-colors duration-200 group-hover:bg-[#991B1B] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
