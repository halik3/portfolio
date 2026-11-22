function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wide text-slate-500">
        <p>
          © {year} <span className="text-slate-300">Muhammad Khalikil Rasak</span> · Makassar, Indonesia.
        </p>
        <div className="flex gap-6 uppercase tracking-[0.15em]">
          <a
            href="https://github.com/halik3"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:halikyolo@gmail.com"
            className="hover:text-sky-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;