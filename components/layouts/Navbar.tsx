"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-40 w-full bg-white transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-100 shadow-sm"
            : ""
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Lawctopus.webp"
              alt="Lawctopus"
              width={160}
              height={50}
              priority
              className="h-auto w-36 lg:w-40"
            />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLinks />
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#991B1B] px-6 py-2.5 text-[15px] font-medium text-white transition-all duration-200 hover:bg-[#7f1616]"
            >
              Enroll Now
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}