import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../lib/api";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Underline } from "../components/Doodle";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await loginUser(username, password);
      localStorage.setItem("admin_token", data.access_token);
      toast.success("Login berhasil! Selamat datang.");
      navigate("/admin");
    } catch (err) {
      toast.error(err.message || "Login gagal. Periksa kembali data Anda.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-darkgreen/10"
      >
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl text-darkgreen mb-2 relative inline-block">
            Admin <span className="italic">Login</span>
            <div className="absolute -bottom-2 left-0 w-full">
              <Underline />
            </div>
          </h1>
          <p className="text-sm text-ink/60 mt-4">Masuk untuk mengelola portofolio Anda.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-xs font-bold text-darkgreen uppercase tracking-wider mb-2">Username</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-transparent border-b-2 border-darkgreen/20 focus:border-darkgreen text-ink py-2 placeholder:text-ink/30 focus:outline-none transition-colors"
              placeholder="Masukkan username"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-darkgreen uppercase tracking-wider mb-2">Password</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent border-b-2 border-darkgreen/20 focus:border-darkgreen text-ink py-2 placeholder:text-ink/30 focus:outline-none transition-colors"
              placeholder="Masukkan password"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-darkgreen text-cream font-medium py-3 rounded-full hover:bg-darkgreen/90 transition-colors disabled:opacity-50 shadow-md"
          >
            {loading ? "Memproses..." : "Masuk"}
          </motion.button>
        </form>
        
        <div className="mt-8 text-center">
          <a href="/" className="text-sm text-ink/60 hover:text-darkgreen transition-colors font-medium">
            ← Kembali ke Portofolio
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;