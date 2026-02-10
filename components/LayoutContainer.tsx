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
      <div className="w-full max-w-[1400px] px-4">
        {children}
      </div>
    </div>
  );
}
