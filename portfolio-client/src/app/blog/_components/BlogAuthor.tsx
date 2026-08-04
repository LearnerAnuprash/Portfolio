"use client";

import Image from "next/image";
import profileImg from "@/shared/images/profile.png";

export function BlogAuthor() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-10 mt-10 border-t border-slate-200">
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0">
          <Image
            src={profileImg}
            alt="Anuprash Subedi"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500">Written by</p>
          <p className="text-base font-semibold text-slate-900">
            Anuprash Subedi
          </p>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            Frontend Developer building scalable systems. I write about React,
            TypeScript, and the patterns that make interfaces work at scale.
          </p>
        </div>
      </div>
    </div>
  );
}
