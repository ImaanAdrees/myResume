import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SITE_URL = "https://imaanadrees.github.io";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Imaan Adrees",
  givenName: "Imaan",
  familyName: "Adrees",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: "Full-Stack Developer",
  description:
    "Computer Science graduate and full-stack developer building interactive web, mobile and desktop apps with Next.js, React, React Native, Node.js and C#.",
  email: "mailto:imaanadrees124@gmail.com",
  sameAs: ["https://github.com/ImaanAdrees"],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Bachelor of Science in Computer Science (2022 – 2026)",
  },
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "C#",
    ".NET",
    "MongoDB",
    "MySQL",
    "SQL Server",
    "Three.js",
    "AI / Voice-to-Text",
  ],
  seeks: {
    "@type": "Demand",
    name: "Open to full-time, freelance, and collaboration roles",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Imaan Adrees — Portfolio",
  url: SITE_URL,
  inLanguage: "en",
  author: { "@type": "Person", name: "Imaan Adrees" },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
