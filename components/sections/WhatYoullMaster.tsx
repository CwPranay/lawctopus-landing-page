"use client";

import { motion } from "framer-motion";
import { FileText, Building2, Shield, Home, TrendingUp } from "lucide-react";

const domains = [
  {
    icon: FileText,
    title: "Contract Foundations",
    description: "Build a strong foundation in contract structure, drafting essentials and negotiation fundamentals.",
    skills: ["Contract Structure", "Essential Clauses", "Drafting Basics", "Negotiation Fundamentals"],
  },
  {
    icon: Building2,
    title: "Corporate & Commercial Agreements",
    description: "Draft complex business agreements that drive partnerships and commercial relationships.",
    skills: ["Shareholders Agreement", "Partnership Agreement", "Joint Venture Agreement", "Employment Agreement"],
  },
  {
    icon: Shield,
    title: "Intellectual Property & Technology",
    description: "Master modern tech agreements covering licensing, SaaS, and digital compliance.",
    skills: ["Trademark Licensing", "Copyright Agreements", "SaaS Agreements", "Website Terms", "Privacy Policy"],
  },
  {
    icon: Home,
    title: "Real Estate & International Contracts",
    description: "Learn to draft property transactions and cross-border commercial agreements.",
    skills: ["Sale Deed", "Leave & License", "Power of Attorney", "International Commercial Contracts"],
  },
  {
    icon: TrendingUp,
    title: "Freelancing & Career Growth",
    description: "Launch your freelancing career with practical skills in client acquisition and professional branding.",
    skills: ["Upwork", "Fiverr", "LinkedIn", "CV Building", "Cover Letters", "Networking", "Client Communication", "Negotiation"],
  },
];

export default function WhatYoullMaster() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20 text-center lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              What You'll Master
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
              Master the most in-demand legal drafting skills through practical assignments, live sessions and expert guidance.
            </h2>
          </motion.div>
        </div>

        {/* Learning Domains */}
        <div className="space-y-20 lg:space-y-24">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-16 ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Icon & Title Block */}
                <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-[#991B1B] transition-colors duration-200 hover:bg-[#991B1B] hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl">
                    {domain.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {domain.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {domain.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 text-base text-gray-700"
                      >
                        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#991B1B]" />
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 border-t border-gray-200 pt-16 text-center lg:mt-24"
        >
          <p className="mb-6 text-lg text-gray-600">
            Over 54 live sessions, 24+ real-world agreements, and lifetime access to all materials.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-[#991B1B] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#7f1616]"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
