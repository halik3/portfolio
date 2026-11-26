import { CircleDoodle, Underline } from "./Doodle";

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-darkgreen mb-8 leading-tight">
        Saya Menjunjung <br />
        <span className="relative inline-block">
          Logika & Desain
          <CircleDoodle />
        </span>
      </h2>
      
      <p className="text-ink/70 max-w-xl mx-auto mb-12 text-lg">
        Saya percaya kode yang baik adalah kode yang mudah dibaca oleh manusia, bukan hanya mesin. 
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-darkgreen font-medium">
        {["React", "FastAPI", "Tailwind CSS", "Python", "PostgreSQL", "Git"].map((skill) => (
          <span key={skill} className="px-6 py-2 border border-darkgreen rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;