const packages = [
  {
    name: "Энгийн",
    price: "Сар бүрийн үзлэг",
    features: [
      "Тоног төхөөрөмжийн шалгалт",
      "Стандартын тайлан",
      "Яаралтай дуудлагын дэмжлэг"
    ]
  },
  {
    name: "Мэргэжлийн",
    price: "Улирал тутмын сайжруулалт",
    features: [
      "Системийн гүйцэтгэлийн тест",
      "Ажилтны сэргээн сургалт",
      "Засварын тэргүүлэх хуваарь"
    ]
  },
  {
    name: "Корпораци",
    price: "Тусгай гэрээ",
    features: [
      "24/7 мониторинг, шуурхай ажиллагаа",
      "Тусгай хариуцагч инженер",
      "Бүрэн lifecycle удирдлага"
    ]
  }
];

export default function MongolianSubscriptionPackagesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 space-y-3">
        <p className="section-subtitle">Багц үйлчилгээ</p>
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          Танд тохирсон үйлчилгээний багц
        </h1>
        <p className="text-base text-slate-600">
          Үйл ажиллагааны онцлогтоо тохируулан үйлчилгээний багцаа сонгоорой.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((plan) => (
          <div key={plan.name} className="card">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-brand-dark">
                {plan.name}
              </h2>
              <span className="badge">{plan.price}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
              Дэлгэрэнгүй авах
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
