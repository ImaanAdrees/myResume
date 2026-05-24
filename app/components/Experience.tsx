import SectionHeading from "./SectionHeading";

const items = [
  {
    period: "2022 — 2026",
    role: "BS Computer Science",
    org: "University",
    points: [
      "Completed a 4-year Bachelor's in Computer Science.",
      "Built several end-to-end university projects spanning web, mobile and desktop.",
      "Studied algorithms, databases, software engineering, AI fundamentals.",
    ],
    badge: "Education",
    color: "primary",
  },
  {
    period: "Freelance / Collaboration",
    role: "Developer Collaboration",
    org: "Side projects",
    points: [
      "Collaborated with other developers on shipping real-world software.",
      "Worked across the stack — frontend, backend and mobile.",
      "Currently not engaged — actively open to new opportunities.",
    ],
    badge: "Experience",
    color: "accent",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="// my journey"
          title="Experience"
          description="University, projects and collaborations that shaped my skills."
        />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={item.role}
                  className={`relative grid md:grid-cols-2 gap-6 items-start ${
                    left ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 glow-primary z-10" />

                  {/* card */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      left ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left [direction:ltr]"
                    }`}
                  >
                    <div className="bg-card rounded-2xl p-6 border border-white/5 hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className={`text-xs font-mono px-2 py-1 rounded ${
                            item.color === "primary"
                              ? "bg-primary/20 text-primary"
                              : "bg-accent/20 text-accent"
                          }`}
                        >
                          {item.badge}
                        </span>
                        <span className="text-xs text-muted font-mono">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-text mb-1">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted mb-3">{item.org}</p>
                      <ul
                        className={`space-y-2 text-sm text-text/80 ${
                          left ? "md:list-none" : "md:list-none"
                        }`}
                      >
                        {item.points.map((p) => (
                          <li
                            key={p}
                            className="flex gap-2 items-start text-left [direction:ltr]"
                          >
                            <span className="text-primary mt-1">▸</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* spacer for opposite side on desktop */}
                  <div className="hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-card border border-green-500/30 rounded-full px-5 py-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 pulse-ring" />
            <span className="text-sm">
              <span className="font-semibold text-text">
                Currently available
              </span>{" "}
              <span className="text-muted">— open to full-time / freelance roles</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
