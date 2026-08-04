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
    <section className="w-full max-w-5xl mx-auto px-6 pt-30 pb-20">
      <div className="mb-12">
        <h1 className="text-5xl font-semibold text-slate-900 mb-3">Blog</h1>
        <p className="text-lg text-gray-500">
          Thoughts on frontend engineering, React patterns, and building things
          that work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BLOGS.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}
