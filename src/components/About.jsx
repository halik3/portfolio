import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 bg-sage text-darkgreen overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-64 md:h-auto min-h-[400px] overflow-hidden"
      >
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
          alt="Khalikil" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-10 md:p-16 flex flex-col justify-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
          Rangkuman<br />Perjalanan
        </h2>
        
        <ul className="space-y-4 text-sm md:text-base font-medium">
          {[
            "Mahasiswa Sistem Informasi di Universitas Islam Negeri Makassar.",
            "Bereksperimen dengan Linux dan membangun aplikasi fullstack.",
            "Berpengalaman PKL di PT Angkasa Pura dan part-time di Stalk Roti Bakar.",
            "Menikmati prosa dan musik sebagai sumber inspirasi."
          ].map((text, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
              className="flex gap-3"
            >
              <span className="text-darkgreen">•</span> {text}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default About;