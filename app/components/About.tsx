import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="// about me"
          title="A passionate problem solver"
        />

        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-center">
          {/* Decorative 3D-ish card */}
          <Reveal animation="fade-right" className="md:col-span-2 flex justify-center">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 float">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
              <div
                className="relative w-full h-full rounded-3xl bg-card border border-white/10 p-1 overflow-hidden"
                style={{
                  transform: "perspective(800px) rotateY(-10deg) rotateX(6deg)",
                }}
              >
                <div className="w-full h-full rounded-[20px] bg-gradient-to-br from-background via-card to-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                      IA
                    </div>
                    <div className="mt-2 text-[10px] sm:text-xs font-mono text-muted tracking-widest">
                      IMAAN.ADREES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div className="md:col-span-3 space-y-4 sm:space-y-5">
            <Reveal animation="fade-left" delay={100}>
              <p className="text-base sm:text-lg text-text/90 leading-relaxed">
                Hi, I&apos;m{" "}
                <span className="text-primary font-semibold">Imaan Adrees</span>{" "}
                — a Computer Science graduate who loves turning ideas into
                interactive, real-world products. From web platforms to mobile
                apps and desktop systems, I enjoy building things that people
                actually use.
              </p>
            </Reveal>

            <Reveal animation="fade-left" delay={200}>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                I completed my{" "}
                <span className="text-text">
                  Bachelor&apos;s in Computer Science (2022 – 2026)
                </span>
                , and along the way I&apos;ve worked on AI-driven products,
                full-stack web apps and academic projects. I&apos;m comfortable
                across the stack — React, Next.js, React Native, Node, C#, and a
                handful of databases.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <Reveal animation="fade-up" delay={300}>
                <div className="bg-card rounded-xl p-3 sm:p-4 border border-white/5">
                  <div className="text-xl sm:text-2xl font-bold text-primary">2026</div>
                  <div className="text-xs text-muted mt-1">BS Computer Science</div>
                </div>
              </Reveal>
              <Reveal animation="fade-up" delay={400}>
                <div className="bg-card rounded-xl p-3 sm:p-4 border border-white/5">
                  <div className="text-xl sm:text-2xl font-bold text-accent">5+</div>
                  <div className="text-xs text-muted mt-1">Projects shipped</div>
                </div>
              </Reveal>
              <Reveal animation="fade-up" delay={500}>
                <div className="bg-card rounded-xl p-3 sm:p-4 border border-white/5">
                  <div className="text-xl sm:text-2xl font-bold text-primary">Full-Stack</div>
                  <div className="text-xs text-muted mt-1">
                    Web · Mobile · Desktop
                  </div>
                </div>
              </Reveal>
              <Reveal animation="fade-up" delay={600}>
                <div className="bg-card rounded-xl p-4 border border-white/5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="text-sm font-semibold text-text">
                    Open to work
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
