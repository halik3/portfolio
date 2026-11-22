const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "JavaScript", "HTML / CSS"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "REST API"],
  },
  {
    title: "Database & Tools",
    items: ["PostgreSQL", "Neon", "Git", "GitHub", "Vercel", "Linux"],
  },
];

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-20 mb-12">
        <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-sky-400">
          Skills
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white">
          Tools yang saya gunakan
        </h2>
      </div>

      <div className="md:ml-[260px] border-t border-white/10">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border-b border-white/10 py-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 items-start"
          >
            <h3 className="font-display text-xl text-white">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li
                  key={s}
                  className="text-xs text-slate-300 border border-white/10 px-4 py-1.5 rounded-full hover:border-sky-400/50 hover:text-sky-300 transition-colors duration-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;