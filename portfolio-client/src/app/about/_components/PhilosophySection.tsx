"use client";

const PRINCIPLES = [
  {
    label: "Auth first",
    text: "JWT tokens, refresh rotation, protected routes, security layer before features.",
  },
  {
    label: "Scale the UI",
    text: "Component systems that handle growth without spaghetti, lazy loading, clean state.",
  },
  {
    label: "Ship, then optimize",
    text: "Working features first. Then cut re-renders, reduce bundle, smooth transitions.",
  },
  {
    label: "Readable code",
    text: "Written for the next developer at 2 AM. Clear naming, consistent patterns.",
  },
];

export function PhilosophySection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
      <h3 className="mb-6 text-2xl font-semibold text-slate-800 sm:mb-8 sm:text-4xl">
        How I Approach Engineering
      </h3>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {PRINCIPLES.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-300 bg-white/60 p-4 backdrop-blur-sm sm:p-5"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-teal-900 sm:text-base">
              {item.label}
            </span>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
