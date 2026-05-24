"use client";

import dynamic from "next/dynamic";
import SectionHeading from "./SectionHeading";

const SkillsOrb = dynamic(() => import("./three/SkillsOrb"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
    </div>
  ),
});

const skillGroups: { title: string; items: string[]; color: "primary" | "accent" }[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "React Native", "HTML", "CSS", "JavaScript", "TypeScript"],
    color: "primary",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "C#", ".NET"],
    color: "accent",
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "SQL Server (SSMS)"],
    color: "primary",
  },
  {
    title: "Tools & Deploy",
    items: ["GitHub", "Vercel", "Git"],
    color: "accent",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="// what i use"
          title="Skills & Tools"
          description="The technologies I reach for when building things."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D orb */}
          <div className="relative h-[420px] md:h-[500px] order-2 lg:order-1">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />
            <div className="relative w-full h-full">
              <SkillsOrb />
            </div>
          </div>

          {/* Skill groups */}
          <div className="space-y-5 order-1 lg:order-2">
            {skillGroups.map((g) => (
              <div
                key={g.title}
                className="bg-card rounded-2xl p-5 border border-white/5 hover:border-primary/30 transition-colors"
              >
                <h3
                  className={`text-sm font-mono mb-3 uppercase tracking-widest ${
                    g.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                >
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-sm rounded-lg bg-background border border-white/10 text-text/90 hover:text-primary hover:border-primary/40 transition-all hover:-translate-y-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
