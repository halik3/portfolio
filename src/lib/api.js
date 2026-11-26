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
// --- FUNGSI LOGIN ---
export async function loginUser(username, password) {
  // FastAPI OAuth2 mengharuskan format form-urlencoded, bukan JSON
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Login gagal");

  return data; 
}


export async function createProject(projectData, token) {
  const res = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // <-- Ini kunci JWT-nya
    },
    body: JSON.stringify(projectData),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Gagal menambah project");
  return data;
}