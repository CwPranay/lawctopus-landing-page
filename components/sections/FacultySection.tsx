"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const faculty = [
  {
    image: "/Shashank.webp",
    name: "Shashank Sardesai",
    role: "Independent Litigator & Company Secretary",
    highlights: [
      "Co-Founder, EverTrust Legal",
      "Experience with Wadia Ghandy & Co., HSA Advocates and Khaitan Legal Associates",
      "Specializes in Commercial Contracts & Corporate Law",
    ],
  },
  {
    image: "/Akanksha.webp",
    name: "Akanksha Mishra",
    role: "Head, Lawctopus Law School",
    highlights: [
      "Taught 1500+ learners",
      "Average learner rating: 96.5/100",
      "Commercial & Real Estate Litigation Expert",
    ],
  },
  {
    image: "/Pranjal.webp",
    name: "Pranjal Doshi",
    role: "Associate, Walker Morris LLP (United Kingdom)",
    highlights: [
      "Cambridge Postgraduate",
      "Former Trilegal & Khaitan & Co.",
      "Expert in M&A & Shareholder Agreements",
    ],
  },
  {
    image: "/Arunima.webp",
    name: "Arunima Jha",
    role: "Head Legal Counsel, Omnicom Media Group",
    highlights: [
      "10+ Years Experience",
      "Former BookMyShow Legal Counsel",
      "Expert in Media Law & Privacy Law",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function FacultySection() {
  return (
    <section id="faculty" className="bg-gradient-to-br from-[#7F1D1D] to-[#991B1B] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-200">
              Meet Your Faculty
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
              Learn From Practicing Legal Experts
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-red-50">
              Learn directly from experienced litigators, corporate lawyers,
              legal counsels and industry professionals who have worked with
              leading law firms, multinational companies and global organizations.
            </p>
          </motion.div>
        </div>

        {/* Faculty Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group flex h-full flex-col overflow-hidden rounded-[10px]  bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-[280px] w-full overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-1 text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-medium leading-snug text-[#991B1B]">
                  {member.role}
                </p>

                {/* Highlights */}
                <div className="space-y-2 text-sm text-gray-600">
                  {member.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="mb-4 text-base text-red-100">
            Learn from  corporate counsels, legal educators, and industry experts from leading organizations.
          </p>
          <a
            href="#faculty"
            className="group inline-flex items-center gap-2 text-base font-semibold text-white transition-colors duration-200 hover:text-red-100"
          >
            View Complete Faculty
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
