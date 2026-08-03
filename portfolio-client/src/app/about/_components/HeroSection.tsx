"use client";

import Image from "next/image";
import profileImg from "@/shared/images/profile.png";

export function HeroSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 pt-30 pb-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="relative shrink-0">
          <div className="relative w-56 h-72 bg-slate-200 overflow-hidden rounded-t-[100px] rounded-b-none border-[3px] border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <Image
              src={profileImg}
              alt="Anuprash Subedi"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-3 -right-4 bg-white rounded-full px-3 py-1.5 shadow-md border border-slate-200 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
            </span>
            <span className="text-xs font-semibold text-slate-900">
              Open to work
            </span>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-semibold text-6xl text-slate-900 leading-tight mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Frontend Developer building scalable systems. I build interactive
            interfaces with reusable components, predictable state management,
            and performance-first patterns that keep applications smooth as they
            grow.
          </p>
        </div>
      </div>
    </section>
  );
}
