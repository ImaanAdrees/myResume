"use client";

import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  icon: string;
  accentColor: "primary" | "accent";
};

const projects: Project[] = [
  {
    title: "SmartScribe AI",
    tagline: "Voice-to-Text Meeting Assistant",
    description:
      "An AI-powered mobile platform that records meetings, transcribes voice to text in real-time, and auto-generates concise summaries. Built end-to-end with React Native.",
    stack: ["React Native", "AI/ML", "Speech-to-Text"],
    icon: "🎙️",
    accentColor: "primary",
  },
  {
    title: "Food Blogging Site",
    tagline: "A modern web platform for food creators",
    description:
      "A full-stack Next.js food blogging site where users can browse, create and share recipes — with a clean UI, dynamic routing and image handling.",
    stack: ["Next.js", "React", "Node.js"],
    icon: "🍜",
    accentColor: "accent",
  },
  {
    title: "Pharmacy Management System",
    tagline: "Desktop app for pharmacy operations",
    description:
      "A C# desktop application to manage inventory, sales, customers and prescriptions for a pharmacy — backed by SQL Server with reporting and role-based access.",
    stack: ["C#", ".NET", "SQL Server"],
    icon: "💊",
    accentColor: "primary",
  },
];

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;
    const rotateY = px * 10;
    const rotateX = -py * 10;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
  };

  const isPrimary = project.accentColor === "primary";

  return (
    <div className="group [perspective:900px]">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="tilt-card relative bg-card rounded-2xl p-6 border border-white/5 hover:border-primary/50 h-full"
      >
        {/* Glow on hover */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10 ${
            isPrimary ? "bg-primary/20" : "bg-accent/20"
          }`}
        />

        {/* Icon "floating" */}
        <div
          className="text-5xl mb-4 inline-block"
          style={{ transform: "translateZ(40px)" }}
        >
          {project.icon}
        </div>

        <h3
          className={`text-2xl font-bold mb-1 ${
            isPrimary ? "text-primary" : "text-accent"
          }`}
          style={{ transform: "translateZ(30px)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm text-text/90 font-medium mb-3"
          style={{ transform: "translateZ(25px)" }}
        >
          {project.tagline}
        </p>
        <p
          className="text-sm text-muted leading-relaxed mb-5"
          style={{ transform: "translateZ(20px)" }}
        >
          {project.description}
        </p>

        <div
          className="flex flex-wrap gap-2"
          style={{ transform: "translateZ(20px)" }}
        >
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-background border border-white/10 text-text/80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="// my work"
          title="Featured Projects"
          description="A selection of things I've built across web, mobile and desktop."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} animation="fade-up" delay={i * 120}>
              <TiltCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
