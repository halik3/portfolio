import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "react-hot-toast"; // <-- Import Toast
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"; // <-- Import BackToTop
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-1 bg-darkgreen origin-left z-[100]" style={{ scaleX }} />
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Toaster position="bottom-center" toastOptions={{ style: { background: '#1a3318', color: '#fdfcf5', borderRadius: '10px' } }} /> {/* <-- Pasang Toaster */}
      <div className="min-h-screen overflow-x-hidden bg-cream">
        <BackToTop /> {/* <-- Pasang BackToTop */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;