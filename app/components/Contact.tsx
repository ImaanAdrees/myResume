"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Simulate send — replace with real API or email integration later
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="// say hi"
          title="Let's work together"
          description="Got a role, project or idea? Drop a message — I'd love to hear about it."
        />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Side info */}
          <div className="md:col-span-2 space-y-5">
            <div className="bg-card rounded-2xl p-6 border border-white/5">
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                Email
              </div>
              <a
                href="mailto:imaanadrees124@gmail.com"
                className="text-text hover:text-primary break-all"
              >
                imaanadrees124@gmail.com
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-white/5">
              <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
                GitHub
              </div>
              <a
                href="https://github.com/ImaanAdrees"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent"
              >
                github.com/ImaanAdrees
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 pulse-ring" />
                <div className="text-xs font-mono text-green-400 uppercase tracking-widest">
                  Status
                </div>
              </div>
              <p className="text-text font-semibold">Open to work</p>
              <p className="text-xs text-muted mt-1">
                Available for full-time, freelance & collaboration.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-card rounded-2xl p-6 md:p-8 border border-white/5 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-muted uppercase tracking-widest mb-2"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-muted uppercase tracking-widest mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono text-muted uppercase tracking-widest mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, role, or just say hi..."
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-semibold transition-all hover:scale-105 hover:glow-primary disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                {status !== "sending" && <span>→</span>}
              </button>

              {status === "sent" && (
                <span className="text-sm text-green-400">
                  ✓ Thanks! I&apos;ll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-accent">
                  Please fill in all fields.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
