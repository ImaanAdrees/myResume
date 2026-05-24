"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-primary">{"<"}</span>
          <span className="text-text">Imaan</span>
          <span className="text-accent">.dev</span>
          <span className="text-primary">{"/>"}</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "text-primary bg-card"
                      : "text-text/70 hover:text-primary hover:bg-card/60"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-text p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-text mb-1.5"></div>
          <div className="w-6 h-0.5 bg-text mb-1.5"></div>
          <div className="w-6 h-0.5 bg-text"></div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/5">
          <ul className="flex flex-col px-6 py-4 gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text/80 hover:text-primary hover:bg-card transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
