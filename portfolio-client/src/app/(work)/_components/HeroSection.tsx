"use client";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center sm:px-6">
      <div className="flex flex-col items-center justify-center gap-3 pt-24 pb-10 text-slate-900 sm:pt-32 sm:pb-16 lg:pt-48 lg:pb-20">
        <h1 className="max-w-4xl text-balance font-semibold text-5xl leading-none sm:text-7xl lg:text-9xl">
          I&rsquo;m Anuprash.
        </h1>
        <h2 className="max-w-4xl text-balance font-semibold text-3xl leading-tight sm:text-5xl lg:text-6xl">
          A Frontend Developer.
        </h2>
      </div>
      <p className="max-w-2xl pb-16 text-lg text-gray-500 sm:pb-24 sm:text-xl lg:pb-30 lg:text-2xl">
        I build beautiful, functional user interfaces, from pixel-perfect UI to
        secure auth flows.
      </p>
    </div>
  );
}
