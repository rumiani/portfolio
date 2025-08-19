"use client";

export function Spinner({ className, border, diameter }: { className?: string, border: number, diameter: number }) {
  return (
    <div
      style={{
        width: diameter,
        height: diameter,
        borderWidth: border,
      }}
      className={` border-gray-200 border-t-gray-500 rounded-full animate-spin ${className || ""}`}
    />
  );
}
