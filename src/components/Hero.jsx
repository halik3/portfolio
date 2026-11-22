function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full text-center">
        <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-sky-400 mb-8">
          Mahasiswa Sistem Informasi & Fullstack Developer
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-8">
          Khalikil <span className="italic text-sky-300 font-normal">Rasak</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Mahasiswa UINAM, penikmat prosa, dan penggemar Linux. 
          Membangun jembatan antara logika backend dan estetika antarmuka web.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-sky-400 hover:bg-sky-300 text-[#060a14] font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-colors duration-300"
          >
            Lihat Karya
          </a>
          <a
            href="#contact"
            className="border border-white/15 hover:border-sky-400/60 hover:text-sky-300 text-white font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-colors duration-300"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;