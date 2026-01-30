const projects = [
  {
    name: "Industrial plants",
    description:
      "Comprehensive suppression systems and safety audits for heavy industry."
  },
  {
    name: "Commercial centers",
    description:
      "Fire alarm, detection, and evacuation systems for public facilities."
  },
  {
    name: "Infrastructure & logistics",
    description:
      "Automation and monitoring systems for critical transport hubs."
  }
];

export default function EnglishProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 space-y-3">
        <p className="section-subtitle">Projects</p>
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          Proven performance across sectors
        </h1>
        <p className="text-base text-slate-600">
          Our portfolio covers industrial, commercial, and public projects with
          complex fire safety requirements.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} className="card">
            <h2 className="text-xl font-semibold text-brand-dark">
              {project.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
