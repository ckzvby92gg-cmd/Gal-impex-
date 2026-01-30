export default function MongolianAboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 space-y-3">
        <p className="section-subtitle">Бидний тухай</p>
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          Аюулгүй байдлын туршлагатай түнш
        </h1>
        <p className="text-base text-slate-600">
          Гал Импекс ХХК нь 1971 оноос хойш галын аюулгүй байдлын шийдэл,
          тоног төхөөрөмж нийлүүлэлт, автомат системийн үйлчилгээг үзүүлж байна.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-brand-dark">
            Бидний эрхэм зорилго
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Олон улсын стандарт, Монгол Улсын дүрэм журамд нийцсэн, найдвартай
            галын хамгааллын үйлчилгээг хүргэх.
          </p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-brand-dark">Бидний үнэт зүйл</h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>Аюулгүй байдлыг нэн тэргүүнд</li>
            <li>Ил тод, урт хугацааны түншлэл</li>
            <li>Экологид ээлтэй шийдэл</li>
            <li>Тогтмол сургалт, чанарын хяналт</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
