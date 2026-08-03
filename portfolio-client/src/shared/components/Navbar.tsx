"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAVBAR_ITEMS } from "../constants/constants";
import { navbarItemsType } from "../types/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

const SCROLL_THRESHOLD = 20;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-5 z-10 flex justify-center">
      <nav
        className={clsx(
          "inline-flex items-center gap-10 py-3 px-6 rounded-full border transition-all duration-300",
          scrolled
            ? "bg-white/50 backdrop-blur-md backdrop-saturate-150 border-white/50 shadow-lg shadow-black/5"
            : "bg-transparent backdrop-blur-0 border-transparent shadow-none",
        )}
      >
        {NAVBAR_ITEMS.map(({ route, label }: navbarItemsType) => {
          const isActive = pathname === route;
          return (
            <Link key={route} href={route} className="relative">
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-3xl bg-slate-900"
                  transition={{ type: "spring", stiffness: 600, damping: 35 }}
                />
              )}
              <div
                className={clsx(
                  "relative z-10 flex items-center gap-1 px-7 py-1 text-lg rounded-3xl transition-colors",
                  isActive ? "text-white" : "text-gray-800",
                )}
              >
                {label}
                {route === "/" && (
                  <div className="flex items-center justify-center size-5 rounded-sm border-2 border-gray-400">
                    <span
                      className={clsx(
                        "text-xs text-gray-500",
                        isActive && "text-white",
                      )}
                    >
                      /
                    </span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
