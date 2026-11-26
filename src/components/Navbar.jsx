import { useState } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Tentang" },
  { href: "#projects", label: "Proyek" },
  { href: "#contact", label: "Kontak" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-darkgreen/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl font-semibold text-darkgreen italic">
          Khalikil Rasak.
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-ink/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-darkgreen transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-darkgreen">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-cream px-6 py-4 flex flex-col gap-4 text-ink/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 hover:text-darkgreen font-medium">
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