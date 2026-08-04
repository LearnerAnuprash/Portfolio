"use client";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-slate-900 pt-50 pb-20">
        <h1 className="font-semibold text-9xl">I&rsquo;m Anuprash.</h1>
        <h2 className="font-semibold text-6xl">A Frontend Developer.</h2>
      </div>
      <p className="text-2xl text-gray-500 max-w-190 text-center pb-30">
        I build beautiful, functional user interfaces, from pixel-perfect UI to
        secure auth flows.
      </p>
    </div>
  );
}
