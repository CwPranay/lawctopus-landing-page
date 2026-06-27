"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Globe } from "lucide-react";

const navigation = [
  { name: "Why Choose", href: "#why-choose" },
  { name: "Learning", href: "#learning" },
  { name: "Career", href: "#career" },
  { name: "Faculty", href: "#faculty" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/lawctopus" },
  { name: "Instagram", href: "https://www.instagram.com/lawctopus.official/" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UC6fghSCgphfU1U4FfRF7pSg" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1280px] px-8 py-16 lg:px-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top Section - Logo & Description */}
          <div className="mb-12 lg:mb-16">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/Lawctopus.webp"
                alt="Lawctopus"
                width={160}
                height={50}
                className="h-auto w-36"
              />
            </Link>
            <p className="max-w-md text-base leading-relaxed text-gray-600">
              Empowering law students and legal professionals through practical,
              industry-focused online education.
            </p>
          </div>

          {/* Three Columns */}
          <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {/* Column 1 - Navigation */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 transition-colors duration-200 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  
                  <a
                    href="mailto:courses@lawctopus.com"
                    className="text-base font-medium text-gray-900 transition-colors hover:text-[#991B1B]"
                  >
                    courses@lawctopus.com
                  </a>
                </li>
                <li>
                 
                  <a
                    href="https://www.lawctopus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-gray-900 transition-colors hover:text-[#991B1B]"
                  >
                    www.lawctopus.com
                  </a>
                </li>
                <li className="pt-2">
                  <p className="text-sm text-gray-500">
                    Response within 24 hours
                  </p>
                </li>
              </ul>
            </div>

            {/* Column 3 - Follow Us */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                Follow Us
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-600 transition-colors duration-200 hover:text-[#991B1B]"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2026 Lawctopus. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
