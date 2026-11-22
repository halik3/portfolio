const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:8000" : "/api");

export async function fetchProjects() {
  const res = await fetch(`${API_URL}/projects`);
  if (!res.ok) {
    throw new Error(`Gagal mengambil projects: ${res.status}`);
  }
  return res.json();
}

export async function submitContactForm(data) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    // Mengambil pesan error dari FastAPI jika ada
    throw new Error(result.detail || "Gagal mengirim pesan");
  }
  return result;
}