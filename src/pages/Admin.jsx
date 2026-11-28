import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProject, fetchProjects, fetchMessages, deleteProject } from "../lib/api";
import toast from "react-hot-toast";

function Admin() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [activeTab, setActiveTab] = useState("add"); // 'add' | 'list' | 'inbox'
  
  // State Data
  const [form, setForm] = useState({
    title: "", description: "", tech_stack: "", repo_url: "", demo_url: "", image_url: "", featured: false
  });
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("admin_token");
    if (!savedToken) {
      navigate("/login");
    } else {
      setToken(savedToken);
    }
  }, [navigate]);

  // Fetch data saat tab berubah
  useEffect(() => {
    if (!token) return;
    
    if (activeTab === "list") {
      fetchProjects().then(setProjects).catch(console.error);
    } else if (activeTab === "inbox") {
      fetchMessages(token).then(setMessages).catch((err) => toast.error(err.message));
    }
  }, [activeTab, token]);

  // --- HANDLERS ---
  function handleChange(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  }

  async function handleAddProject(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await createProject(form, token);
      toast.success("Project berhasil ditambahkan!");
      setForm({ title: "", description: "", tech_stack: "", repo_url: "", demo_url: "", image_url: "", featured: false });
      setActiveTab("list"); // Langsung pindah ke tab list
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Yakin ingin menghapus project ini?")) return;
    try {
      await deleteProject(id, token);
      toast.success("Project dihapus");
      setProjects(projects.filter((p) => p.id !== id)); // Update UI tanpa reload
    } catch (err) {
      toast.error(err.message);
    }
  }

  function handleLogout() {
    localStorage.removeItem("admin_token");
    navigate("/");
  }

  if (!token) return null;

  return (
    <div className="min-h-screen bg-cream p-6 lg:p-12 text-ink">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-darkgreen">Admin Dashboard</h1>
            <p className="text-sm text-ink/60">Kelola konten portofolio Anda.</p>
          </div>
          <button onClick={handleLogout} className="text-sm font-medium text-red-600 hover:text-red-800 border border-red-600 px-4 py-2 rounded-full transition-colors">
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-darkgreen/20 pb-2 overflow-x-auto">
          {["add", "list", "inbox"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === tab ? "bg-darkgreen text-cream" : "hover:bg-sage/30 text-darkgreen"
              }`}
            >
              {tab === "add" && "➕ Tambah Project"}
              {tab === "list" && "📁 Daftar Project"}
              {tab === "inbox" && "📥 Pesan Masuk"}
            </button>
          ))}
        </div>

        {/* --- KONTEN TAB: TAMBAH PROJECT --- */}
        {activeTab === "add" && (
          <form onSubmit={handleAddProject} className="space-y-4 bg-white/50 p-6 rounded-xl border border-darkgreen/10 shadow-sm">
            <h2 className="text-xl font-serif text-darkgreen mb-4">Tambah Project Baru</h2>
            <input name="title" placeholder="Judul Project" value={form.title} onChange={handleChange} required className="w-full bg-transparent border border-darkgreen/20 focus:border-darkgreen px-4 py-2 rounded focus:outline-none" />
            <textarea name="description" placeholder="Deskripsi" value={form.description} onChange={handleChange} required className="w-full bg-transparent border border-darkgreen/20 focus:border-darkgreen px-4 py-2 rounded focus:outline-none" rows={3} />
            <input name="tech_stack" placeholder="Tech Stack (misal: React, FastAPI)" value={form.tech_stack} onChange={handleChange} required className="w-full bg-transparent border border-darkgreen/20 focus:border-darkgreen px-4 py-2 rounded focus:outline-none" />
            <input name="repo_url" placeholder="URL GitHub (opsional)" value={form.repo_url} onChange={handleChange} className="w-full bg-transparent border border-darkgreen/20 focus:border-darkgreen px-4 py-2 rounded focus:outline-none" />
            <input name="demo_url" placeholder="URL Demo (opsional)" value={form.demo_url} onChange={handleChange} className="w-full bg-transparent border border-darkgreen/20 focus:border-darkgreen px-4 py-2 rounded focus:outline-none" />
            <input name="image_url" placeholder="URL Gambar (opsional)" value={form.image_url} onChange={handleChange} className="w-full bg-transparent border border-darkgreen/20 focus:border-darkgreen px-4 py-2 rounded focus:outline-none" />
            <label className="flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} className="accent-darkgreen" />
              Tandai sebagai Featured
            </label>
            <button type="submit" disabled={loading} className="bg-darkgreen text-cream px-6 py-2 rounded-full mt-4 hover:bg-darkgreen/80 transition-colors disabled:opacity-50">
              {loading ? "Menyimpan..." : "Simpan Project"}
            </button>
          </form>
        )}

        {/* --- KONTEN TAB: DAFTAR PROJECT --- */}
        {activeTab === "list" && (
          <div className="space-y-4">
            <h2 className="text-xl font-serif text-darkgreen mb-4">Daftar Project ({projects.length})</h2>
            {projects.length === 0 && <p className="text-ink/60">Belum ada project.</p>}
            {projects.map((p) => (
              <div key={p.id} className="flex justify-between items-center bg-white/50 p-4 rounded-xl border border-darkgreen/10">
                <div>
                  <h3 className="font-medium text-darkgreen">{p.title}</h3>
                  <p className="text-xs text-ink/60">{p.tech_stack}</p>
                </div>
                <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:text-red-700 p-2" title="Hapus">
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}

        {/* --- KONTEN TAB: PESAN MASUK --- */}
        {activeTab === "inbox" && (
          <div className="space-y-4">
            <h2 className="text-xl font-serif text-darkgreen mb-4">Pesan Masuk ({messages.length})</h2>
            {messages.length === 0 && <p className="text-ink/60">Belum ada pesan.</p>}
            {messages.map((msg) => (
              <div key={msg.id} className="bg-white/50 p-5 rounded-xl border border-darkgreen/10">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-darkgreen">{msg.name}</h3>
                    <a href={`mailto:${msg.email}`} className="text-xs text-blue-600 hover:underline">{msg.email}</a>
                  </div>
                  <span className="text-xs text-ink/50">{new Date(msg.created_at).toLocaleDateString("id-ID")}</span>
                </div>
                <p className="text-sm text-ink/80 bg-sage/10 p-3 rounded mt-2">{msg.message}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Admin;