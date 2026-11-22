const experiences = [
  {
    period: "Juni 2025 — Sekarang",
    role: "Part-time Crew",
    company: "Stalk Roti Bakar, Makassar",
    desc: "Melayani pelanggan, mengelola pesanan, dan menjaga kualitas produk. Melatih komunikasi, ketelitian, dan kerja sama tim dalam lingkungan yang dinamis.",
  },
  {
    period: "2022 (1 Bulan)",
    role: "Praktik Kerja Lapangan (PKL)",
    company: "PT Angkasa Pura, Bandara Sultan Hasanuddin",
    desc: "Mengamati dan membantu operasional bandara di bidang pelayanan penumpang. Mengembangkan pemahaman tentang standar pelayanan publik dan prosedur keselamatan.",
  },
  {
    period: "2022 — Sekarang",
    role: "Mahasiswa S1 Sistem Informasi",
    company: "Universitas Islam Negeri Makassar (UINAM)",
    desc: "Mempelajari analisis sistem, basis data, pemrograman web, dan manajemen proyek TI. Aktif mengeksplorasi teknologi web modern secara mandiri.",
  },
];

function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-20 mb-12">
        <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-sky-400">
          Pengalaman
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white">
          Jejak Langkah
        </h2>
      </div>

      <div className="md:ml-[260px] relative border-l border-white/10 pl-8 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Titik timeline */}
            <span className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-sky-400 border-2 border-[#060a14]" />
            
            <p className="text-[11px] font-mono tracking-widest text-sky-400 uppercase mb-2">
              {exp.period}
            </p>
            <h3 className="font-display text-xl text-white mb-1">
              {exp.role}
            </h3>
            <p className="text-sm text-slate-400 mb-3 font-medium">
              {exp.company}
            </p>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xl">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;