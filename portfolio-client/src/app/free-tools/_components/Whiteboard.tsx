"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const COLORS = ["#1e293b", "#ef4444", "#3b82f6", "#22c55e", "#f59e0b"];

export function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const historyRef = useRef<ImageData[]>([]);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState(COLORS[0]);
  const [lineWidth, setLineWidth] = useState(3);
  const [erasing, setErasing] = useState(false);
  const [historyCount, setHistoryCount] = useState(0);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  const getPoint = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height),
    };
  }, []);

  const pushSnapshot = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    historyRef.current.push(
      ctx.getImageData(0, 0, canvas.width, canvas.height),
    );
    if (historyRef.current.length > 20) historyRef.current.shift();
    setHistoryCount(historyRef.current.length);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      const canvas = e.currentTarget;
      canvas.setPointerCapture(e.pointerId);
      pushSnapshot();
      setDrawing(true);
      lastPoint.current = getPoint(e.clientX, e.clientY);
    },
    [getPoint, pushSnapshot],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!drawing) return;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx || !lastPoint.current) return;

      const point = getPoint(e.clientX, e.clientY);
      ctx.beginPath();
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(point.x, point.y);
      ctx.strokeStyle = erasing ? "#ffffff" : color;
      ctx.lineWidth = erasing ? Math.max(lineWidth * 4, 12) : lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      lastPoint.current = point;
    },
    [drawing, color, lineWidth, erasing, getPoint],
  );

  const stopDrawing = useCallback(() => {
    setDrawing(false);
    lastPoint.current = null;
  }, []);

  const undo = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const snapshot = historyRef.current.pop();
    if (!canvas || !ctx || !snapshot) return;
    ctx.putImageData(snapshot, 0, 0);
    setHistoryCount(historyRef.current.length);
  }, []);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    historyRef.current = [];
    setHistoryCount(0);
  }, []);

  const downloadPng = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "whiteboard.png";
      link.click();
      URL.revokeObjectURL(url);
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  return (
    <div className="rounded-2xl border border-slate-300 bg-white/60 p-3 backdrop-blur-sm transition-shadow hover:shadow-lg sm:p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900 sm:text-xl">
            Whiteboard
          </h3>
          <p className="mt-1 text-[11px] text-gray-500 sm:text-sm">
            A scratchpad for doodles, diagrams and rough ideas.
          </p>
        </div>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-purple-50 sm:size-10">
          <svg
            className="h-4 w-4 text-purple-600 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className={`h-44 w-full touch-none rounded-xl border border-slate-200 bg-white sm:h-64 md:h-72 ${
          erasing ? "cursor-cell" : "cursor-crosshair"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrawing}
        onPointerCancel={stopDrawing}
      />

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            {COLORS.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setColor(c);
                  setErasing(false);
                }}
                aria-label="Pick color"
                className={`size-5 rounded-full border-2 transition-transform sm:size-6 ${
                  color === c && !erasing
                    ? "border-slate-900 scale-110"
                    : "border-slate-200 hover:scale-110"
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          <button
            onClick={() => setErasing((prev) => !prev)}
            aria-label="Toggle eraser"
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
              erasing
                ? "bg-slate-900 text-white"
                : "bg-slate-50 text-gray-500 hover:text-slate-900"
            }`}
          >
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
                d="M6.75 12.75l4.5 4.5M5.25 17.25l-1.5-1.5a2.25 2.25 0 010-3.18l6.83-6.83a2.25 2.25 0 013.18 0l3.18 3.18a2.25 2.25 0 010 3.18L10.5 19.5H5.25"
              />
            </svg>
            Eraser
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-500 sm:text-xs">Size</span>
            <input
              type="range"
              min={1}
              max={10}
              value={lineWidth}
              onChange={(e) => setLineWidth(Number(e.target.value))}
              className="w-20 accent-slate-900"
              aria-label="Stroke size"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={undo}
            disabled={historyCount === 0}
            className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 transition-colors hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40 sm:text-xs"
          >
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
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Undo
          </button>
          <button
            onClick={downloadPng}
            className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 transition-colors hover:text-slate-900 sm:text-xs"
          >
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download
          </button>
          <button
            onClick={clearCanvas}
            className="text-[11px] text-gray-500 transition-colors hover:text-red-600 sm:text-xs"
          >
            Clear
          </button>
        </div>
      </div>

      <p className="mt-3 text-[10px] text-gray-400 sm:text-[11px]">
        Drag to draw, works with mouse or finger. Undo a slip, download when it
        is a masterpiece.
      </p>
    </div>
  );
}
