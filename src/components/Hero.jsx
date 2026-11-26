import { Underline } from "./Doodle";

function Hero() {
  return (
    <section id="hero" className="pt-24 pb-20 px-6 text-center max-w-4xl mx-auto">
      <h1 className="font-serif text-5xl md:text-7xl leading-tight text-darkgreen mb-6">
        Hai, saya <span className="italic">Khalikil Rasak</span>,<br />
        seorang pengembang web.
      </h1>
      
      <p className="text-lg md:text-xl text-ink/70 max-w-xl mx-auto mb-10 leading-relaxed">
        Saya merancang dan membangun pengalaman digital, dari logika backend hingga estetika antarmuka.
      </p>

      <a href="#contact" className="relative inline-block border-2 border-darkgreen text-darkgreen font-medium px-8 py-3 rounded-full hover:bg-darkgreen hover:text-cream transition-colors">
        Kontak Saya
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24">
          <Underline />
        </div>
      </a>
    </section>
  );
}

export default Hero;