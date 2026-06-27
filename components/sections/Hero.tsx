"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Star, Video, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white pt-10 pb-20 lg:pt-18 lg:pb-28">
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16 xl:gap-20">
          {/* Left Content - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
          

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl xl:text-6xl">
              Become an Expert in{" "}
              <span className="text-[#991B1B]">Contract Drafting</span> & Start
              Freelancing with Confidence
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg leading-relaxed text-gray-600 lg:text-xl">
              Learn to draft 24+ real-world agreements through 54 live sessions
              led by industry experts. Build practical legal skills, create a
              freelancing portfolio, and launch your career with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#991B1B] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#7f1616] hover:shadow-lg"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
              >
                View Curriculum
              </a>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="flex flex-col">
                <div className="mb-1 flex items-center gap-1.5 text-gray-400">
                  <Users className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold text-gray-900">20,000+</div>
                <div className="text-sm text-gray-600">Learners</div>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 flex items-center gap-1.5 text-gray-400">
                  <Star className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold text-gray-900">93.2/100</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 flex items-center gap-1.5 text-gray-400">
                  <Video className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold text-gray-900">54</div>
                <div className="text-sm text-gray-600">Live Sessions</div>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 flex items-center gap-1.5 text-gray-400">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24+</div>
                <div className="text-sm text-gray-600">Agreements</div>
              </div>
            </div>

            
          </motion.div>

          {/* Right Pricing Card - 40% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 shadow-lg lg:p-10">
              {/* Pricing */}
              <div className="mb-6 border-b border-gray-100 pb-6">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-gray-900">₹24,999</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-400 line-through">₹60,000</span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    Save ₹35,001
                  </span>
                </div>
              </div>

              {/* Course Details */}
              <div className="mb-6 space-y-3 border-b border-gray-100 pb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Duration</span>
                  <span className="text-base font-semibold text-gray-900">6 Months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Starts</span>
                  <span className="text-base font-semibold text-gray-900">July 1</span>
                </div>
              </div>

              {/* Includes */}
              <div className="mb-8 space-y-3">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Includes
                </h3>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-gray-700">Lifetime Access</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-gray-700">Industry Expert Faculty</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-gray-700">Money-Back Guarantee</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#pricing"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#991B1B] px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#7f1616] hover:shadow-lg"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
