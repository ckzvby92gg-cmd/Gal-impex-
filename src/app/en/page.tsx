const services = [
  {
    title: "Fire Extinguishers & Equipment",
    description:
      "Certified extinguishers, hydrants, hoses, cabinets, and maintenance support for every facility."
  },
  {
    title: "Fire Protection Systems",
    description:
      "Design, installation, and monitoring of sprinkler, alarm, and suppression systems."
  },
  {
    title: "Building Automation Systems (BMS/BAS)",
    description:
      "Smart building control solutions for safety, efficiency, and regulatory compliance."
  },
  {
    title: "Training & Consulting",
    description:
      "On-site safety training, drills, compliance audits, and emergency response planning."
  }
];

export default function EnglishHomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-white via-white to-brand-red/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <span className="badge">Since 1971</span>
            <h1 className="text-4xl font-semibold text-brand-dark md:text-5xl">
              Fire Impex LLC
              <span className="block text-brand-red">Your trusted partner</span>
            </h1>
            <p className="text-lg text-slate-600">
              We protect people, property, and the environment with advanced fire
              safety equipment, automated protection systems, and certified
              consulting services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/en/contact"
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
              >
                Request a consultation
              </a>
              <a
                href="/en/services"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-brand-green hover:text-brand-green"
              >
                Explore services
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <p className="section-subtitle">Core focus</p>
              <h2 className="section-title">Fire safety for critical industries</h2>
              <p className="text-sm text-slate-600">
                We deliver reliable fire safety solutions for industrial sites,
                commercial buildings, infrastructure, and public facilities across
                Mongolia.
              </p>
              <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl bg-brand-green/10 p-4">
                  <p className="font-semibold text-brand-green">Eco-friendly</p>
                  <p>Low-impact, sustainable protection systems.</p>
                </div>
                <div className="rounded-2xl bg-brand-red/10 p-4">
                  <p className="font-semibold text-brand-red">24/7 Support</p>
                  <p>Rapid response and maintenance support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex flex-col gap-2">
          <p className="section-subtitle">Services</p>
          <h2 className="section-title">Comprehensive fire protection</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3 className="text-lg font-semibold text-brand-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-3">
          <div className="card">
            <p className="section-subtitle">Experience</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-dark">
              50+ years of trust
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Proven expertise in fire safety engineering and compliance
              standards.
            </p>
          </div>
          <div className="card">
            <p className="section-subtitle">Coverage</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-dark">
              Nationwide projects
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              From industrial hubs to high-rise developments across Mongolia.
            </p>
          </div>
          <div className="card">
            <p className="section-subtitle">Partnership</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-dark">
              Trusted collaborations
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We work with architects, engineers, and facility managers to keep
              assets safe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
