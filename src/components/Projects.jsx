import { useEffect, useState } from "react";
import { fetchProjects } from "../lib/api";
import ProjectCard from "./ProjectCard";
import ProjectSkeleton from "./ProjectSkeleton"; // <-- Import Skeleton
import { Underline } from "./Doodle";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

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
      <FadeIn className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-darkgreen relative inline-block">
          Contoh Karya Saya
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32">
            <Underline />
          </div>
        </h2>
      </FadeIn>

      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Jika loading, tampilkan 3 skeleton */}
          {loading &&
            [1, 2, 3].map((n) => <ProjectSkeleton key={n} />)
          }
          
          {/* Jika selesai loading, tampilkan data asli */}
          {!loading && projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;