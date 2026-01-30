export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-light px-4">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          Gal Impex – Safer Living Since 1971
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/mn"
            className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Монгол хэл
          </a>
          <a
            href="/en"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-brand-green hover:text-brand-green"
          >
            English
          </a>
        </div>
      </div>
    </div>
  );
}
