"use client";

import Image from "next/image";
import profileImg from "@/shared/images/profile.png";

export function BlogAuthor() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 border-t border-slate-200 px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-slate-200 sm:h-12 sm:w-12">
          <Image
            src={profileImg}
            alt="Anuprash Subedi"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs text-gray-500 sm:text-sm">Written by</p>
          <p className="text-sm font-semibold text-slate-900 sm:text-base">
            Anuprash Subedi
          </p>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            Frontend Developer building scalable systems. I write about React,
            TypeScript, and the patterns that make interfaces work at scale.
          </p>
        </div>
      </div>
    </div>
  );
}
