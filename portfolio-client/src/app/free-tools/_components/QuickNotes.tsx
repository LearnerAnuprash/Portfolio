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
    <div className="rounded-2xl border border-slate-300 min-h-120 bg-white/60 backdrop-blur-sm p-4 sm:p-6 transition-shadow hover:shadow-lg flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
            Quick Notes
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
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
        className="w-full flex-1 h-52 sm:h-64 p-4 text-base text-gray-700 bg-slate-50 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 placeholder:text-gray-400"
      />

      <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
        <p className="text-xs text-gray-400">
          {words} {words === 1 ? "word" : "words"} ·{" "}
          {content.length.toLocaleString()} characters
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={copyToClipboard}
            disabled={!content}
            className="text-xs text-gray-500 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={() => setContent("")}
            className="text-xs text-gray-500 hover:text-red-600 transition-colors"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
}
