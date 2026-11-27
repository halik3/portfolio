import { useState } from "react";
import { submitContactForm } from "../lib/api";
import { Underline } from "./Doodle";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import toast from "react-hot-toast"; // <-- Import toast

function ContactForm() {
  // Tambahkan field "website" sebagai jebakan bot (honeypot)
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Jika bot mengisi field "website", hentikan proses
    if (form.website) {
      toast.error("Spam terdeteksi!");
      return;
    }

    setStatus("loading");
    
    try {
      await submitContactForm({ name: form.name, email: form.email, message: form.message });
      toast.success("Pesan berhasil terkirim. Terima kasih!");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      toast.error(err.message || "Terjadi kesalahan.");
    } finally {
      setStatus("idle");
    }
  }

  const inputClass = "bg-transparent border-b border-darkgreen/30 focus:border-darkgreen py-3 placeholder:text-darkgreen/50 focus:outline-none transition-colors w-full";

  return (
    <section id="contact" className="bg-sage py-24 px-6 text-center text-darkgreen relative overflow-hidden">
      <FadeIn>
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 relative inline-block">
            Saya nantikan <span className="italic">Pesan Anda</span>
            <div className="absolute -bottom-2 left-0 w-full">
              <Underline />
            </div>
          </h2>
          
          <p className="mb-10 text-sm font-medium">Kirimkan pesan, peluang kerja, atau sekadar menyapa.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left relative">
            {/* Honeypot Field - Disembunyikan dengan CSS */}
            <input 
              type="text" 
              name="website" 
              value={form.website} 
              onChange={handleChange} 
              className="hidden" 
              tabIndex="-1" 
              autoComplete="off" 
            />

            <motion.input whileFocus={{ scale: 1.02 }} type="text" name="name" placeholder="Nama" value={form.name} onChange={handleChange} required className={inputClass} />
            <motion.input whileFocus={{ scale: 1.02 }} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className={inputClass} />
            <motion.textarea whileFocus={{ scale: 1.02 }} name="message" placeholder="Pesan" value={form.message} onChange={handleChange} required rows={3} className={`${inputClass} resize-none`} />
            
            <motion.button 
              type="submit" 
              disabled={status === "loading"} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 mx-auto border-2 border-darkgreen bg-transparent text-darkgreen font-medium px-10 py-3 rounded-full hover:bg-darkgreen hover:text-cream transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
            </motion.button>
          </form>
        </div>
      </FadeIn>
    </section>
  );
}

export default ContactForm;