import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const linkTujuan = project.demo_url || project.repo_url || "#";
  const bisaDiklik = linkTujuan !== "#";

  return (
    <motion.a 
      href={bisaDiklik ? linkTujuan : undefined}
      target={bisaDiklik ? "_blank" : undefined}
      rel={bisaDiklik ? "noreferrer" : undefined}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`group block ${bisaDiklik ? "cursor-pointer" : "cursor-default"}`}
    >
      <div className="aspect-[4/3] overflow-hidden mb-4 bg-sage/20 relative rounded-sm">
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
        
        {bisaDiklik && (
          <div className="absolute inset-0 bg-darkgreen/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-cream text-darkgreen px-4 py-2 rounded-full font-medium text-sm shadow-lg">
              Lihat Project ↗
            </span>
          </div>
        )}
      </div>

      <h3 className="font-serif text-2xl text-ink mb-2 group-hover:text-darkgreen transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-ink/70 mb-3 line-clamp-2">
        {project.description}
      </p>
      <p className="text-xs font-semibold uppercase tracking-wider text-darkgreen">
        {project.tech_stack}
      </p>
    </motion.a>
  );
}

export default ProjectCard;