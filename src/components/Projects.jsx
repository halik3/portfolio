import { useEffect, useState } from "react";
import { fetchProjects } from "../lib/api";
import ProjectCard from "./ProjectCard";
import { Underline } from "./Doodle";

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
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-darkgreen relative inline-block">
          Contoh Karya Saya
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32">
            <Underline />
          </div>
        </h2>
      </div>

      {loading && <p className="text-center text-ink/50">Memuat projects…</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;