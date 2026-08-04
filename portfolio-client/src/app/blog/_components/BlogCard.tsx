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
      className="group block rounded-2xl border border-slate-400 bg-white/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-800"
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

      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-gray-400" />
          <span>{readTime}</span>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
