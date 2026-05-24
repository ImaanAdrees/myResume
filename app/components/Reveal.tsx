"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";

export default function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header" | "p" | "h2" | "h3";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users who prefer reduced motion — show immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal reveal-${animation} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
