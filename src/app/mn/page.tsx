const services = [
  {
    title: "Гал унтраах тоног төхөөрөмж",
    description:
      "Стандартад нийцсэн гал унтраагуур, гидрант, хоолой, шүүгээ болон засвар үйлчилгээ."
  },
  {
    title: "Галын хамгаалалтын систем",
    description:
      "Спринклер, дохиолол, утаа мэдрэгч, автомат унтраах системийн зураг төсөл, суурилуулалт."
  },
  {
    title: "Барилгын автоматжуулалт (BMS/BAS)",
    description:
      "Аюулгүй байдал, эрчим хүчний хэмнэлтэд чиглэсэн ухаалаг удирдлагын шийдлүүд."
  },
  {
    title: "Сургалт & зөвлөх үйлчилгээ",
    description:
      "Галын аюулгүй байдлын сургалт, аудит, төлөвлөлт, дадлага сургуулилт."
  }
];

export default function MongolianHomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-white via-white to-brand-green/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <span className="badge">1971 оноос хойш</span>
            <h1 className="text-4xl font-semibold text-brand-dark md:text-5xl">
              Гал Импекс ХХК
              <span className="block text-brand-red">Таны найдвартай түнш</span>
            </h1>
            <p className="text-lg text-slate-600">
              Бид галын аюулгүй байдал, гал унтраах тоног төхөөрөмж, автомат
              системийн шийдлээр хүн, эд хөрөнгө, хүрээлэн буй орчныг хамгаална.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/mn/contact"
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
              >
                Зөвлөх үйлчилгээ авах
              </a>
              <a
                href="/mn/services"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-brand-green hover:text-brand-green"
              >
                Үйлчилгээ үзэх
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <p className="section-subtitle">Бидний чиглэл</p>
              <h2 className="section-title">Галын аюулгүй байдлын иж бүрэн шийдэл</h2>
              <p className="text-sm text-slate-600">
                Үйлдвэр, худалдаа үйлчилгээний барилга, дэд бүтэц, олон нийтийн
                байгууламжуудыг хамгаалах системийг найдвартай нийлүүлнэ.
              </p>
              <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl bg-brand-green/10 p-4">
                  <p className="font-semibold text-brand-green">Экологид ээлтэй</p>
                  <p>Ногоон технологи бүхий хамгаалалтын шийдэл.</p>
                </div>
                <div className="rounded-2xl bg-brand-red/10 p-4">
                  <p className="font-semibold text-brand-red">24/7 дэмжлэг</p>
                  <p>Тасралтгүй үйлчилгээ ба шуурхай хариу.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex flex-col gap-2">
          <p className="section-subtitle">Үйлчилгээ</p>
          <h2 className="section-title">Галын хамгааллын цогц үйлчилгээ</h2>
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
            <p className="section-subtitle">Туршлага</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-dark">
              50+ жилийн итгэл
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Галын инженерчлэл, стандартын хэрэгжилтийн гүнзгий мэдлэг.
            </p>
          </div>
          <div className="card">
            <p className="section-subtitle">Хүрээ</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-dark">
              Улс даяарх төслүүд
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Үйлдвэр, худалдааны төв, орон сууцны томоохон төслүүд.
            </p>
          </div>
          <div className="card">
            <p className="section-subtitle">Хамтын ажиллагаа</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-dark">
              Найдвартай түншлэл
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Барилга байгууламжийн багуудтай хамтран эрсдэлийг бууруулна.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
