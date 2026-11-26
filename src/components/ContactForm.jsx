import { useState } from "react";
import { submitContactForm } from "../lib/api";
import { Underline } from "./Doodle";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitContactForm(form);
      setStatus("success");
      setFeedback("Pesan berhasil terkirim.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(err.message || "Terjadi kesalahan.");
    }
  }

  return (
    <section id="contact" className="bg-sage py-24 px-6 text-center text-darkgreen">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-6 relative inline-block">
          Saya nantikan <span className="italic">Pesan Anda</span>
          <div className="absolute -bottom-2 left-0 w-full">
             <Underline />
          </div>
        </h2>
        
        <p className="mb-10 text-sm font-medium">Kirimkan pesan, peluang kerja, atau sekadar menyapa.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input type="text" name="name" placeholder="Nama" value={form.name} onChange={handleChange} required className="bg-transparent border-b border-darkgreen/30 focus:border-darkgreen py-3 placeholder:text-darkgreen/50 focus:outline-none transition-colors" />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="bg-transparent border-b border-darkgreen/30 focus:border-darkgreen py-3 placeholder:text-darkgreen/50 focus:outline-none transition-colors" />
          <textarea name="message" placeholder="Pesan" value={form.message} onChange={handleChange} required rows={3} className="bg-transparent border-b border-darkgreen/30 focus:border-darkgreen py-3 placeholder:text-darkgreen/50 focus:outline-none transition-colors resize-none" />
          
          <button type="submit" disabled={status === "loading"} className="mt-6 mx-auto border-2 border-darkgreen bg-transparent text-darkgreen font-medium px-10 py-3 rounded-full hover:bg-darkgreen hover:text-cream transition-colors">
            {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
          </button>
          
          {feedback && <p className={`text-center mt-4 font-medium ${status === "success" ? "text-green-800" : "text-red-600"}`}>{feedback}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;