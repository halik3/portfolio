import profile from "../assets/profile.webp";

function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-sky-400 mb-8">
            Mahasiswa Sistem Informasi & Fullstack Developer
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-8">
            Khalikil <span className="italic text-sky-300 font-normal">Rasak</span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg font-light max-w-xl mx-auto md:mx-0 mb-12 leading-relaxed">
            Mahasiswa UINAM, penikmat prosa, dan penggemar Linux.
            Membangun jembatan antara logika backend dan estetika antarmuka web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

        <div className="order-1 md:order-2 relative w-44 sm:w-52 md:w-full md:max-w-[300px] justify-self-center md:justify-self-end">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-sky-400/10 blur-2xl" />
          <div className="rounded-[2rem] border border-sky-300/20 p-2 shadow-2xl shadow-sky-950/30">
            <img
              src={profile}
              alt="Muhammad Khalikil Rasak"
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[55%_48%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;