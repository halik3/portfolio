import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <a href="#hero" className="font-serif text-xl font-semibold text-darkgreen italic hover:scale-105 transition-transform">
          Khalikil Rasak.
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-ink/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative group transition-colors hover:text-darkgreen">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-darkgreen transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-darkgreen focus:outline-none">
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-cream overflow-hidden px-6 flex flex-col gap-4 text-ink/80"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 hover:text-darkgreen font-medium">
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;