import { BlogCard } from "./_components/BlogCard";

const BLOGS = [
  {
    id: "react-hooks-deep-dive",
    title: "React Hooks: A Deep Dive Into the Essentials",
    excerpt:
      "Understanding useState, useEffect, useRef, useMemo, useCallback, and useReducer: when to use each, common mistakes, and patterns that scale.",
    date: "Aug 3, 2026",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Frontend"],
  },
];

export default function BlogPage() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 pt-24 pb-16 sm:px-6 sm:pt-30 sm:pb-20">
      <div className="mb-10 sm:mb-12">
        <h1 className="mb-3 text-3xl font-semibold text-slate-900 sm:text-5xl">
          Blog
        </h1>
        <p className="text-base text-gray-500 sm:text-lg">
          <span className="sm:hidden">
            Notes on React, frontend craft, and practical patterns.
          </span>
          <span className="hidden sm:inline">
            Thoughts on frontend engineering, React patterns, and building
            things that work.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6">
        {BLOGS.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}
