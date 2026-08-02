"use client";

import Link from "next/link";
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
          <Link key={route} href={route}>
            <div
              className={clsx(
                "flex items-center gap-1 text-lg text-gray-800 px-7 py-1 rounded-3xl",
                isActive && "bg-gray-700 text-white",
              )}
            >
              {label}
              {route === "/" && (
                <div className="flex justify-center items-center border-[2px] size-5 border-gray-200 rounded-sm">
                  <span className="text-gray-500 text-xs"> /</span>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
