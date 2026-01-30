const serviceGroups = [
  {
    title: "Тоног төхөөрөмж",
    points: [
      "Гал унтраагуур, гидрант, шүүгээ нийлүүлэлт",
      "Үзлэг, цэнэглэлт, засвар үйлчилгээ",
      "Стандартын баримт бичиг, зөвлөгөө"
    ]
  },
  {
    title: "Систем ба автоматжуулалт",
    points: [
      "Галын дохиолол, мэдрэгчийн систем",
      "Автомат унтраах төхөөрөмж",
      "BMS/BAS интеграц ба хяналт"
    ]
  },
  {
    title: "Зөвлөх үйлчилгээ ба сургалт",
    points: [
      "Эрсдэлийн үнэлгээ, аудит",
      "Сургалт, дадлага сургуулилт",
      "Төсөл удирдлага, хяналт"
    ]
  }
];

export default function MongolianServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 space-y-3">
        <p className="section-subtitle">Үйлчилгээ</p>
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          Галын хамгааллын иж бүрэн үйлчилгээ
        </h1>
        <p className="text-base text-slate-600">
          Бид зураг төслөөс эхлээд суурилуулалт, ашиглалт, засвар хүртэл бүх
          шатны дэмжлэг үзүүлдэг.
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
