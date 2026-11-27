import { Underline } from "./Doodle";
import { motion } from "framer-motion";

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="pt-24 pb-20 px-6 text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1 variants={item} className="font-serif text-5xl md:text-7xl leading-tight text-darkgreen mb-6">
          Hai, saya <span className="italic">Khalikil Rasak</span>,<br />
          seorang pengembang web.
        </motion.h1>
        
        <motion.p variants={item} className="text-lg md:text-xl text-ink/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Saya merancang dan membangun pengalaman digital, dari logika backend hingga estetika antarmuka.
        </motion.p>

        <motion.div variants={item} className="relative inline-block">
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative block border-2 border-darkgreen text-darkgreen font-medium px-8 py-3 rounded-full hover:bg-darkgreen hover:text-cream transition-colors"
          >
            Kontak Saya
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24">
              <Underline />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;