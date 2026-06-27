"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Shield, Clock, Award } from "lucide-react";

const benefits = [
  "54 Live Sessions",
  "24+ Agreements",
  "Lifetime Access",
  "Practical Assignments",
  "Detailed Feedback",
  "Industry Expert Faculty",
  "Career & Freelancing Support",
  "Money-Back Guarantee",
];

const trustNotes = [
  { icon: Shield, text: "One-time payment" },
  { icon: Clock, text: "No hidden charges" },
  { icon: Award, text: "Lifetime access included" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 py-20 lg:py-28">
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
              Course Fee
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
              Invest in Skills That Last a Lifetime
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Master contract drafting, freelancing and career development
              through one complete program designed by legal industry experts.
            </p>
          </motion.div>
        </div>

        {/* Pricing Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-10 lg:p-16"
        >
          {/* Pricing */}
          <div className="mb-12 text-center">
            <div className="mb-3 text-base text-gray-500">Original Price</div>
            <div className="mb-4 text-3xl text-gray-400 line-through">₹60,000</div>
            
            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-600">
              Current Price
            </div>
            <div className="mb-4 text-6xl font-bold text-gray-900 lg:text-7xl">₹24,999</div>
            
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
              <span className="text-base font-bold text-green-700">Save ₹35,001</span>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-10 h-px bg-gray-200" />

          {/* Benefits Grid */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-base font-medium text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mb-8 text-center">
            <a
              href="#enroll"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#991B1B] px-12 py-5 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#7f1616] hover:shadow-xl"
            >
              Enroll Now
              <ArrowRight className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust Notes */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            {trustNotes.map((note, index) => {
              const Icon = note.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-gray-400" />
                  <span>{note.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-base text-gray-600"
        >
          <p>
            Program starts <span className="font-semibold text-gray-900">July 1, 2026</span> • 
            Duration: <span className="font-semibold text-gray-900">6 Months</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
