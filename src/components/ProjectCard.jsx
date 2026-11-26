function ProjectCard({ project }) {
  // Jika demo_url ada, pakai itu. Jika kosong, pakai repo_url.
  const linkTujuan = project.demo_url || project.repo_url || "#";
  
  // Cek apakah link-nya valid (bukan kosong)
  const bisaDiklik = linkTujuan !== "#";

  return (
    <a 
      href={bisaDiklik ? linkTujuan : undefined}
      target={bisaDiklik ? "_blank" : undefined}
      rel={bisaDiklik ? "noreferrer" : undefined}
      className={`group block ${bisaDiklik ? "cursor-pointer" : "cursor-default"}`}
    >
      {/* Gambar */}
      <div className="aspect-[4/3] overflow-hidden mb-4 bg-sage/20 relative">
        {project.image_url ? (
          <img 
            src={project.image_url} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-darkgreen/30 font-serif italic text-xl">
            No Image
          </div>
        )}
        
        {/* Overlay efek hover (opsional, biar makin keren) */}
        {bisaDiklik && (
          <div className="absolute inset-0 bg-darkgreen/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-cream text-darkgreen px-4 py-2 rounded-full font-medium text-sm shadow-lg">
              Lihat Project ↗
            </span>
          </div>
        )}
      </div>

      {/* Teks */}
      <h3 className="font-serif text-2xl text-ink mb-2 group-hover:text-darkgreen transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-ink/70 mb-3 line-clamp-2">
        {project.description}
      </p>
      <p className="text-xs font-semibold uppercase tracking-wider text-darkgreen">
        {project.tech_stack}
      </p>
    </a>
  );
}

export default ProjectCard;