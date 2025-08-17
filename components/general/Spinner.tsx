"use client";

export function Spinner({ className, border, diameter }: { className?: string, border: number, diameter: number }) {
  return (
    <div
      style={{
        width: diameter,
        height: diameter,
        borderWidth: border,
      }}
      className={`border-t-primary border-gray-200 rounded-full animate-spin ${className || ""}`}
    />
  );
}
