import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../lib/api";

function Admin() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [form, setForm] = useState({
    title: "", description: "", tech_stack: "", repo_url: "", demo_url: "", image_url: "", featured: false
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("admin_token");
    if (!savedToken) {
      navigate("/login"); // Tendang ke login jika tidak ada token
    } else {
      setToken(savedToken);
    }
  }, [navigate]);

  function handleChange(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      await createProject(form, token);
      setStatus("success");
      setFeedback("Project berhasil ditambahkan!");
      setForm({ title: "", description: "", tech_stack: "", repo_url: "", demo_url: "", image_url: "", featured: false });
    } catch (err) {
      setStatus("error");
      setFeedback(err.message);
    }
  }

  function handleLogout() {
    localStorage.removeItem("admin_token");
    navigate("/");
  }

  if (!token) return null;

  return (
    <div className="min-h-screen bg-[#060a14] p-6 lg:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-display text-3xl text-white">Admin Dashboard</h1>
          <button onClick={handleLogout} className="text-sm text-red-400 hover:text-red-300">Logout</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900/50 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl text-white mb-4">Tambah Project Baru</h2>
          
          <input name="title" placeholder="Judul Project" value={form.title} onChange={handleChange} required className="w-full bg-slate-800 text-white px-4 py-2 rounded" />
          <textarea name="description" placeholder="Deskripsi" value={form.description} onChange={handleChange} required className="w-full bg-slate-800 text-white px-4 py-2 rounded" rows={3} />
          <input name="tech_stack" placeholder="Tech Stack (misal: React, FastAPI)" value={form.tech_stack} onChange={handleChange} required className="w-full bg-slate-800 text-white px-4 py-2 rounded" />
          <input name="repo_url" placeholder="URL GitHub (opsional)" value={form.repo_url} onChange={handleChange} className="w-full bg-slate-800 text-white px-4 py-2 rounded" />
          <input name="demo_url" placeholder="URL Demo (opsional)" value={form.demo_url} onChange={handleChange} className="w-full bg-slate-800 text-white px-4 py-2 rounded" />
          <input name="image_url" placeholder="URL Gambar (opsional)" value={form.image_url} onChange={handleChange} className="w-full bg-slate-800 text-white px-4 py-2 rounded" />
          
          <label className="flex items-center gap-2 text-slate-300 text-sm">
            <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} />
            Tandai sebagai Featured
          </label>

          <button type="submit" disabled={status === "loading"} className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2 rounded mt-2">
            {status === "loading" ? "Menyimpan..." : "Simpan Project"}
          </button>

          {feedback && <p className={status === "success" ? "text-emerald-400" : "text-red-400"}>{feedback}</p>}
        </form>
      </div>
    </div>
  );
}

export default Admin;