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
    <header className="w-full max-w-3xl mx-auto px-6 pt-28 pb-10">
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
        <span>{date}</span>
        <span className="h-1 w-1 rounded-full bg-gray-400" />
        <span>{readTime}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
        {title}
      </h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-teal-900 bg-teal-900/5 rounded-full px-3 py-1 border border-slate-200"
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
