import { useEffect, useState } from "react";
import { fetchProjects } from "../lib/api";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-20 mb-12">
        <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-sky-400">
          Work
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white">
          Selected Projects
        </h2>
      </div>

      {loading && (
        <p className="text-center text-slate-500 py-10 font-light">
          Memuat projects…
        </p>
      )}

      {error && (
        <p className="text-center text-red-400 py-10">
          Error: {error}. Pastikan backend di port 8000 jalan.
        </p>
      )}

      {!loading && !error && projects.length === 0 && (
        <p className="text-center text-slate-500 py-10">Belum ada project.</p>
      )}

      {!loading && !error && projects.length > 0 && (
        <div className="md:ml-[260px] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;