function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-20">
        <div>
          <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-sky-400">
            Tentang
          </p>
        </div>
        <div className="space-y-6 text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-2xl">
          <p>
            Halo! Saya <span className="font-display italic text-white">Muhammad Khalikil Rasak</span>, 
            mahasiswa Program Studi Sistem Informasi di Universitas Islam Negeri Makassar (UINAM). 
            Lahir di Makassar, 15 Desember 2004. Ketertarikan saya pada teknologi berawal dari 
            rasa penasaran terhadap sistem operasi Linux, yang kemudian membawa saya mendalami 
            pengembangan web fullstack.
          </p>
          <p>
            Saat ini saya fokus mempelajari React, FastAPI, dan PostgreSQL. Bagi saya, 
            menulis kode mirip seperti menulis prosa, keduanya membutuhkan struktur, alur, 
            dan perhatian pada detail. Di luar aktivitas ngoding, saya mengisi waktu dengan 
            membaca buku sastra dan mendengarkan musik.
          </p>
          <p>
            Saya percaya bahwa pengalaman non-teknis sama pentingnya dengan kemampuan teknis. 
            Melalui Praktik Kerja Lapangan (PKL) di PT Angkasa Pura dan pekerjaan paruh waktu 
            di outlet roti bakar <span className="text-sky-300">Stalk</span>, saya belajar 
            disiplin, manajemen waktu, dan komunikasi dengan berbagai kalangan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;