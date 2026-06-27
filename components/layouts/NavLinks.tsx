"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Why Choose",
    href: "#why-choose",
  },
  {
    label: "Learning",
    href: "#learning",
  },
  {
    label: "Career",
    href: "#career",
  },
  {
    label: "Faculty",
    href: "#faculty",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

type NavLinksProps = {
  onClick?: () => void;
  className?: string;
};

export default function NavLinks({
  onClick,
  className,
}: NavLinksProps) {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={cn(
            "relative text-[15px] font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900",
            "after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full",
            className
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}