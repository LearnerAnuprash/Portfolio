"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "quick-notes-content";
const MAX_CHARS = 50_000;

let cache = "";
const listeners = new Set<() => void>();

const readStorage = () => {
  try {
    cache = localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    cache = "";
  }
  return cache;
};

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return cache !== "" ? cache : readStorage();
}

export function QuickNotes() {
  const content = useSyncExternalStore(subscribe, getSnapshot, () => "");
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const mounted = useRef(false);

  const setContent = (value: string) => {
    cache = value;
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // storage unavailable
    }
    listeners.forEach((l) => l());
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const timer = setTimeout(() => {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 600);
    return () => clearTimeout(timer);
  }, [content]);

  const words = content.trim() ? content.trim().split(/\s+/).length : 0;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable, nothing to do
    }
  };

  return (
    <div className="flex min-h-120 flex-col rounded-2xl border border-slate-300 bg-white/60 p-3 backdrop-blur-sm transition-shadow hover:shadow-lg sm:p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900 sm:text-xl">
            Quick Notes
          </h3>
          <p className="mt-1 text-[11px] text-gray-500 sm:text-sm">
            A quiet corner for quick thoughts. Nothing leaves this tab.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {saved && (
            <span className="text-xs text-green-600 flex items-center gap-1">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Saved
            </span>
          )}
          <div className="size-10 rounded-lg bg-amber-50 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
        </div>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write anything. It saves itself as you type."
        maxLength={MAX_CHARS}
        className="h-44 w-full flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:h-64 sm:p-4 sm:text-base"
      />

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="text-[11px] text-gray-400 sm:text-xs">
          {words} {words === 1 ? "word" : "words"} ·{" "}
          {content.length.toLocaleString()} characters
        </p>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button
            onClick={copyToClipboard}
            disabled={!content}
            className="text-[11px] text-gray-500 transition-colors hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40 sm:text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={() => setContent("")}
            className="text-[11px] text-gray-500 transition-colors hover:text-red-600 sm:text-xs"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
}
