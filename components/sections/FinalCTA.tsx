"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustPoints = [
  "54 Live Sessions",
  "Lifetime Access",
  "24+ Agreements",
  "Expert Faculty",
];

const notes = [
  "Starts July 1",
  "One-Time Investment",
  "Money-Back Guarantee",
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#7F1D1D] to-[#991B1B] py-20 lg:py-32">
      {/* Subtle Background Gradient Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-[1280px] px-8 text-center lg:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-red-200">
            Ready to Start?
          </p>

          {/* Heading */}
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white lg:text-4xl xl:text-6xl">
            Become an Expert in Contract Drafting
            <br />
            and Start Freelancing with Confidence
          </h2>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-red-50 lg:text-xl">
            Join thousands of learners building successful legal careers through
            practical contract drafting, expert mentorship and career-focused
            training.
          </p>
        </motion.div>

        {/* Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-6 lg:gap-10"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-2 text-base font-semibold text-white lg:text-lg"
            >
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400" />
              <span>{point}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-3 rounded-lg bg-white px-12 py-5 text-lg font-bold text-[#991B1B] shadow-xl transition-all duration-200 hover:bg-gray-50 hover:shadow-2xl hover:scale-105 lg:px-16 lg:py-6 lg:text-xl"
          >
            Enroll Now
            <ArrowRight className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-3 text-sm text-red-100 lg:gap-4 lg:text-base"
        >
          {notes.map((note, index) => (
            <div key={index} className="flex items-center gap-3">
              <span>{note}</span>
              {index < notes.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-red-300" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="border-t border-red-800/30 pt-8 text-sm text-red-100"
        >
          <p className="mb-2">Still have questions?</p>
          <a
            href="mailto:courses@lawctopus.com"
            className="font-semibold text-white transition-colors hover:text-red-100"
          >
            Email courses@lawctopus.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
