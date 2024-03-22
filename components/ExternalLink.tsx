"use client";

import { useEffect, useState } from "react";

export default function ExternalLink({
  href,
  newTab = true,
  underline = true,
  children,
  className = "",
}: {
  href: string;
  newTab?: boolean;
  underline?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <a
      href={href}
      title={href}
      target={!isMobile && newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`fill-white stroke-white font-semibold text-white hover:fill-sky-400 hover:stroke-sky-400 hover:text-sky-400 ${
        underline ? "border-b-2 border-b-sky-400" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
}
