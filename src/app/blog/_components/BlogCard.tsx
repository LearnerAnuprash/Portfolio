"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { StaticImageData } from "next/image";

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: StaticImageData;
};

export function BlogCard({
  id,
  title,
  excerpt,
  date,
  readTime,
  tags,
  image,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-400 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:border-slate-800 hover:shadow-lg"
    >
      {image && (
        <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-4 sm:p-6">
        <div className="mb-3 flex items-center gap-2 text-[11px] text-gray-500 sm:gap-3 sm:text-xs">
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-gray-400" />
          <span>{readTime}</span>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-teal-900 sm:text-xl">
          {title}
        </h3>

        <p className="mb-4 line-clamp-1 text-sm leading-relaxed text-gray-600 sm:line-clamp-2">
          {excerpt}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRight className="size-4 self-end text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:self-auto" />
        </div>
      </div>
    </Link>
  );
}
