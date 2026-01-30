export default function EnglishAboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 space-y-3">
        <p className="section-subtitle">About</p>
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          Built on safety, trust, and innovation
        </h1>
        <p className="text-base text-slate-600">
          Fire Impex LLC (Gal Impex LLC) has served Mongolia since 1971 with
          professional fire safety solutions, equipment supply, and automation
          systems that protect critical assets.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-brand-dark">Our mission</h2>
          <p className="mt-2 text-sm text-slate-600">
            Deliver reliable, sustainable fire protection services while meeting
            international standards and local regulations.
          </p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-brand-dark">Our values</h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>Safety-first culture</li>
            <li>Transparent partnerships</li>
            <li>Environmentally responsible solutions</li>
            <li>Continuous training and compliance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
