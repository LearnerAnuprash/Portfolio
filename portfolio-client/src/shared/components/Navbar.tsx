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
    <div className="sticky top-5 z-10 flex justify-center px-2 sm:px-0">
      <nav
        className={clsx(
          "flex max-w-[calc(100vw-1rem)] flex-wrap items-center justify-center gap-2 rounded-2xl border px-3 py-2 transition-all duration-300 sm:max-w-none sm:gap-10 sm:px-6 sm:py-3 sm:rounded-full",
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
                  className="absolute inset-0 rounded-2xl bg-slate-900 sm:rounded-3xl"
                  transition={{ type: "spring", stiffness: 600, damping: 35 }}
                />
              )}
              <div
                className={clsx(
                  "relative z-10 flex items-center gap-1 whitespace-nowrap rounded-2xl px-4 py-1.5 text-sm transition-colors sm:rounded-3xl sm:px-7 sm:py-1 sm:text-lg",
                  isActive ? "text-white" : "text-gray-800",
                )}
              >
                {label}
                {route === "/free-tools" && (
                  <span className="fire-icon text-sm sm:text-base">🔥</span>
                )}
                {route === "/" && (
                  <div className="flex size-4 items-center justify-center rounded-sm border-2 border-gray-400 sm:size-5">
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
