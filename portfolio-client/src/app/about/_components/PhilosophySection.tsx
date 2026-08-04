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
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-4xl font-semibold text-slate-800 mb-8">
        How I Approach Engineering
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRINCIPLES.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-300 bg-white/60 backdrop-blur-sm p-5"
          >
            <span className="text-base font-semibold text-teal-900 uppercase tracking-wide">
              {item.label}
            </span>
            <p className="text-base text-gray-600 mt-2 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
