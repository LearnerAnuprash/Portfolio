"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
};

export function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  return (
    <div className="not-prose my-6 rounded-xl overflow-hidden border border-slate-700 bg-[#1e1e1e]">
      {filename && (
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2d2d2d] border-b border-slate-700">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs text-slate-400 ml-2 font-mono">
            {filename}
          </span>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          background: "#1e1e1e",
          fontSize: "0.875rem",
          lineHeight: "1.7",
          borderRadius: 0,
        }}
        showLineNumbers={false}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
