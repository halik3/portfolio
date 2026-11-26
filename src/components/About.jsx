function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 bg-sage text-darkgreen">
      {/* Kolom Gambar */}
      <div className="h-64 md:h-auto min-h-[400px]">
        {/* Ganti URL di bawah dengan foto kamu sendiri */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
          alt="Khalikil" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
      </div>

      {/* Kolom Teks */}
      <div className="p-10 md:p-16 flex flex-col justify-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
          Rangkuman<br />Perjalanan
        </h2>
        
        <ul className="space-y-4 text-sm md:text-base font-medium">
          <li className="flex gap-3">
            <span className="text-darkgreen">•</span> Mahasiswa Sistem Informasi di Universitas Islam Negeri Makassar.
          </li>
          <li className="flex gap-3">
            <span className="text-darkgreen">•</span> Bereksperimen dengan Linux dan membangun aplikasi fullstack.
          </li>
          <li className="flex gap-3">
            <span className="text-darkgreen">•</span> Berpengalaman PKL di PT Angkasa Pura dan part-time di Stalk Roti Bakar.
          </li>
          <li className="flex gap-3">
            <span className="text-darkgreen">•</span> Menikmati prosa dan musik sebagai sumber inspirasi.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;