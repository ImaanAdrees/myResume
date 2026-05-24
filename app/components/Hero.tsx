"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D scene as background */}
      <div className="absolute inset-0 -z-0">
        <HeroScene />
      </div>

      {/* gradient overlay so text reads */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-background/40 via-background/20 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 backdrop-blur border border-green-500/30 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 pulse-ring" />
          <span className="text-sm font-medium text-text/90">
            Open to work
          </span>
        </div>

        <p className="text-primary font-mono text-sm md:text-base mb-3 tracking-widest">
          {"// hello world, i'm"}
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Imaan Adrees
          </span>
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold text-text/90 mb-6">
          Computer Science Graduate &{" "}
          <span className="text-accent">Full-Stack Developer</span>
        </h2>

        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10">
          I build interactive web & mobile experiences — from AI-powered voice
          tools to full-stack platforms. Crafting clean code with React, Next.js,
          React Native, and .NET.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-semibold transition-all hover:scale-105 hover:glow-primary"
          >
            Get in touch
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="https://github.com/ImaanAdrees"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-white/10 text-text font-semibold transition-all hover:border-primary hover:text-primary"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            GitHub
          </a>

          <a
            href="mailto:imaanadrees124@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-white/10 text-text font-semibold transition-all hover:border-accent hover:text-accent"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            Email
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
