import { QuickNotes } from "./_components/QuickNotes";
import { Whiteboard } from "./_components/Whiteboard";

export default function FreeToolsPage() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-30 pb-16 sm:pb-20">
      <div className="mb-10 sm:mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-900/5 text-teal-900 border border-teal-900/10 mb-4">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          Runs entirely in your browser
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 flex flex-wrap items-center gap-3">
          Free Tools
          <span className="fire-icon text-3xl sm:text-4xl">🔥</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mt-3 max-w-xl">
          Simple, useful tools for everyday moments. No sign-up, no install, no
          waiting for the internet to cooperate.
        </p>
      </div>

      <QuickNotes />

      <div className="mt-4 sm:mt-6">
        <Whiteboard />
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          Every tool runs right here in this tab. Your notes, drawings and test
          results never leave your device, sign you out of anything, or follow
          you around.
        </p>
      </div>
    </section>
  );
}
