const serviceGroups = [
  {
    title: "Equipment & Supply",
    points: [
      "Fire extinguishers, hydrants, and cabinets",
      "Inspection, refilling, and maintenance",
      "Spare parts and compliance documentation"
    ]
  },
  {
    title: "Systems & Automation",
    points: [
      "Fire alarm and detection systems",
      "Automatic suppression systems",
      "BMS/BAS integration and monitoring"
    ]
  },
  {
    title: "Consulting & Training",
    points: [
      "Risk assessment and compliance audits",
      "Emergency drills and staff training",
      "Project management and supervision"
    ]
  }
];

export default function EnglishServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 space-y-3">
        <p className="section-subtitle">Services</p>
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          End-to-end fire protection services
        </h1>
        <p className="text-base text-slate-600">
          We deliver full lifecycle support from design to installation,
          monitoring, and ongoing maintenance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {serviceGroups.map((group) => (
          <div key={group.title} className="card">
            <h2 className="text-xl font-semibold text-brand-dark">
              {group.title}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {group.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
