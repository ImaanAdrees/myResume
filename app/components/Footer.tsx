export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          Built with <span className="text-primary">Next.js</span> +{" "}
          <span className="text-accent">Three.js</span> by Imaan Adrees.
        </p>
        <p className="font-mono text-xs">© {new Date().getFullYear()} Imaan Adrees</p>
      </div>
    </footer>
  );
}
