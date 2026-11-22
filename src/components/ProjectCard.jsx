function ProjectCard({ project }) {
  const href = project.demo_url || project.repo_url || "#";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-white/5 bg-gradient-to-br from-slate-800 to-slate-900">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-transparent" />
        )}

        {project.featured && (
          <span className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.2em] uppercase text-sky-300 bg-[#060a14]/85 backdrop-blur px-3 py-1.5 rounded-full">
            Featured
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display text-xl text-white group-hover:text-sky-300 transition-colors duration-300">
          {project.title}
        </h3>
        <span className="text-sky-400 text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">
          ↗
        </span>
      </div>

      <p className="text-sm text-slate-400 mb-3 leading-relaxed line-clamp-2">
        {project.description}
      </p>

      <p className="text-[11px] text-slate-500 tracking-wide uppercase">
        {project.tech_stack}
      </p>
    </a>
  );
}

export default ProjectCard;