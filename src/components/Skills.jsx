import { CircleDoodle } from "./Doodle";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto text-center overflow-hidden">
      <FadeIn>
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
      </FadeIn>

      <div className="flex flex-wrap justify-center gap-4 text-darkgreen font-medium">
        {["React", "FastAPI", "Tailwind CSS", "Python", "PostgreSQL", "Git"].map((skill, i) => (
          <motion.span 
            key={skill} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3, backgroundColor: "#1a3318", color: "#fdfcf5" }}
            className="px-6 py-2 border border-darkgreen rounded-full text-sm cursor-default transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export default Skills;