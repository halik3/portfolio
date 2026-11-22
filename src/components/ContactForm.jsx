import { useState } from "react";
import { submitContactForm } from "../lib/api";

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
    setFeedback("");

    try {
      await submitContactForm(form);
      setStatus("success");
      setFeedback("Pesan berhasil terkirim. Terima kasih.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(err.message || "Terjadi kesalahan.");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-white/15 focus:border-sky-400 text-white py-3 placeholder:text-slate-600 focus:outline-none transition-colors duration-300 font-light";

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-20">
        <div>
          <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-sky-400">
            Contact
          </p>
        </div>

        <div className="max-w-lg">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 leading-tight">
            Punya ide atau peluang? <br />
            <span className="italic text-sky-300">Mari bicara.</span>
          </h2>
          <p className="text-slate-400 text-sm mb-10 font-light">
            Isi form di bawah — saya akan membaca setiap pesan.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nama"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Pesan"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="self-start mt-2 bg-sky-400 hover:bg-sky-300 disabled:bg-slate-700 disabled:text-slate-500 text-[#060a14] font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-colors duration-300"
            >
              {status === "loading" ? "Mengirim…" : "Kirim Pesan"}
            </button>

            {feedback && (
              <p
                className={`text-sm font-light ${
                  status === "success" ? "text-sky-300" : "text-red-400"
                }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;