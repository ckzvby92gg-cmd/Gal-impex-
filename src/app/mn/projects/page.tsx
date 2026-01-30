const projects = [
  {
    name: "Үйлдвэрийн байгууламж",
    description:
      "Хүнд үйлдвэрийн объектуудад иж бүрэн гал унтраах систем нийлүүлэлт."
  },
  {
    name: "Худалдаа үйлчилгээний төв",
    description:
      "Олон нийтийн барилга байгууламжийн галын дохиолол, зарлан мэдээлэх систем."
  },
  {
    name: "Дэд бүтэц, ложистик",
    description:
      "Нийтийн тээвэр, агуулахын автомат хамгаалалт, мониторинг."
  }
];

export default function MongolianProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 space-y-3">
        <p className="section-subtitle">Төслүүд</p>
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          Салбар бүрт бодит туршлага
        </h1>
        <p className="text-base text-slate-600">
          Манай төслүүд үйлдвэрлэл, үйлчилгээ, олон нийтийн байгууламжийг хамардаг.
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
