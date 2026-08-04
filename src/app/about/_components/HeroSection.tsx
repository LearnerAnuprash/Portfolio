"use client";

import Image from "next/image";
import profileImg from "@/shared/images/profile.png";

export function HeroSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 pt-24 pb-10 sm:px-6 sm:pt-30 sm:pb-12">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        <div className="relative shrink-0">
          <div className="relative h-56 w-44 overflow-hidden rounded-t-[88px] rounded-b-none border-[3px] border-white bg-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:h-72 sm:w-56 sm:rounded-t-[100px]">
            <Image
              src={profileImg}
              alt="Anuprash Subedi"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 shadow-md sm:-bottom-3 sm:-right-4 sm:px-3 sm:py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
            </span>
            <span className="text-[11px] font-semibold text-slate-900 sm:text-xs">
              Open to work
            </span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-3 text-4xl font-semibold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
            About Me
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-xl md:mx-0">
            <span className="sm:hidden">
              Frontend Developer building clean, scalable interfaces with
              reusable components and thoughtful UI patterns.
            </span>
            <span className="hidden sm:inline">
              Frontend Developer building scalable systems. I build interactive
              interfaces with reusable components, predictable state management,
              and performance-first patterns that keep applications smooth as
              they grow.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
