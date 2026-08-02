"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAVBAR_ITEMS } from "../constants/constants";
import { navbarItemsType } from "../types/types";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-10">
      {NAVBAR_ITEMS.map(({ route, label }: navbarItemsType) => {
        const isActive = pathname === route;
        return (
          <Link key={route} href={route} className="relative">
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 rounded-3xl bg-gray-700"
                transition={{ type: "spring", stiffness: 600, damping: 35 }}
              />
            )}
            <div
              className={clsx(
                "relative z-10 flex items-center gap-1 text-lg px-7 py-1 rounded-3xl transition-colors",
                isActive ? "text-white" : "text-gray-800",
              )}
            >
              {label}
              {route === "/" && (
                <div className="flex justify-center items-center border-[2px] size-5 border-gray-400 rounded-sm">
                  <span
                    className={clsx(
                      "text-gray-500 text-xs",
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
  );
}
