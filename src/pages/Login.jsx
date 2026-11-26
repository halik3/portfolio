import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../lib/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(username, password);
      // Simpan token di localStorage browser
      localStorage.setItem("admin_token", data.access_token);
      // Arahkan ke halaman admin
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#060a14] px-6">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-3xl text-white mb-8 text-center">
          Admin <span className="italic text-sky-300">Login</span>
        </h1>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center bg-red-400/10 py-2 rounded">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="bg-transparent border-b border-white/15 focus:border-sky-400 text-white py-3 placeholder:text-slate-600 focus:outline-none transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-transparent border-b border-white/15 focus:border-sky-400 text-white py-3 placeholder:text-slate-600 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-sky-400 hover:bg-sky-300 disabled:bg-slate-700 text-[#060a14] font-medium py-3 rounded-full transition-colors"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;