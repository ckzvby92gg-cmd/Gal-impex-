export default function EnglishContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 space-y-3">
        <p className="section-subtitle">Contact</p>
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          Let’s build a safer facility
        </h1>
        <p className="text-base text-slate-600">
          Reach out for assessments, maintenance, or tailored fire protection
          solutions.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold text-brand-dark">
              Fire Impex LLC
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Phone: +976 7000-0000
            </p>
            <p className="text-sm text-slate-600">Email: info@fireimpex.mn</p>
            <p className="text-sm text-slate-600">
              Address: Ulaanbaatar, Sukhbaatar district, Mongolia
            </p>
          </div>
          <div className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-6">
            <p className="text-sm font-semibold text-brand-green">Response time</p>
            <p className="mt-2 text-sm text-slate-600">
              Our engineers respond within 24 hours for urgent safety requests.
            </p>
          </div>
        </div>

        <form className="card space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-brand-red focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-brand-red focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your project"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-brand-red focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
