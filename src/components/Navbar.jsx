import { useState } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#060a14]/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl text-white tracking-tight">
          Muhammad <span className="italic text-sky-400">KR</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.15em] uppercase text-slate-400">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-sky-300 transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-[#060a14]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-1 text-xs font-medium tracking-[0.15em] uppercase text-slate-400">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 hover:text-sky-300 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;