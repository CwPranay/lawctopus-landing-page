"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { RemoveScroll } from "react-remove-scroll";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <RemoveScroll>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                <h2 className="text-base font-semibold text-gray-900">
                  Menu
                </h2>

                <button
                  onClick={onClose}
                  aria-label="Close Menu"
                  className="text-gray-500 transition-colors hover:text-gray-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 p-6">
                <NavLinks
                  className="text-base py-1"
                  onClick={onClose}
                />

                <a
                  href="#pricing"
                  className="group mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#991B1B] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:bg-[#7f1616]"
                  onClick={onClose}
                >
                  Enroll Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}