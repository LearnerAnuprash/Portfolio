"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";

type BlogHeaderProps = {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: StaticImageData;
};

export function BlogHeader({
  title,
  date,
  readTime,
  tags,
  coverImage,
}: BlogHeaderProps) {
  return (
    <header className="w-full max-w-3xl mx-auto px-4 pt-24 pb-8 sm:px-6 sm:pt-28 sm:pb-10">
      <div className="mb-4 flex items-center gap-2 text-xs text-gray-500 sm:gap-3 sm:text-sm">
        <span>{date}</span>
        <span className="h-1 w-1 rounded-full bg-gray-400" />
        <span>{readTime}</span>
      </div>

      <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
        {title}
      </h1>

      <div className="mb-7 flex flex-wrap gap-2 sm:mb-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-teal-900/5 px-2.5 py-1 text-[11px] font-medium text-teal-900 sm:px-3 sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {coverImage && (
        <div className="relative w-full aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </header>
  );
}
