import { QuickNotes } from "./_components/QuickNotes";
import { Whiteboard } from "./_components/Whiteboard";

export default function FreeToolsPage() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-30 pb-16 sm:pb-20">
      <div className="mb-9 sm:mb-12">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-teal-900/10 bg-teal-900/5 px-3 py-1 text-[11px] font-medium text-teal-900 sm:text-xs">
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
        <h1 className="flex flex-wrap items-center gap-2 text-3xl font-semibold text-slate-900 sm:gap-3 sm:text-5xl">
          Free Tools
          <span className="fire-icon text-2xl sm:text-4xl">🔥</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm text-gray-500 sm:text-lg">
          <span className="sm:hidden">
            Simple tools that stay local and load fast.
          </span>
          <span className="hidden sm:inline">
            Simple, useful tools for everyday moments. No sign-up, no install,
            no waiting for the internet to cooperate.
          </span>
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
