"use client";

import React from "react";

export default function LayoutContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="w-full max-w-6xl px-6">
        {children}
      </div>
    </div>
  );
}
