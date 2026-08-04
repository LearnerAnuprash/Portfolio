"use client";

export function BackgroundSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
      <h3 className="mb-5 text-2xl font-semibold text-slate-800 sm:mb-6 sm:text-4xl">
        Background
      </h3>

      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
        <p className="sm:hidden">
          I care about understanding how code works, not just shipping it.
        </p>
        <p className="hidden sm:block">
          I&apos;m a research-focused individual who wants to know the essence
          of every line of code I ship. Not just what it does, why it works, and
          what breaks when it doesn&apos;t.
        </p>
        <p className="sm:hidden">
          Outside code, I paint, brew coffee, and keep ideas slow and steady.
        </p>
        <p className="hidden sm:block">
          Outside of code, I paint, brew coffee, and listen to music. I believe
          in slowing down, relaxing, meditating, and letting ideas settle before
          forcing them into shape.
        </p>
      </div>
    </section>
  );
}
