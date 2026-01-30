const packages = [
  {
    name: "Essential",
    price: "Monthly inspection",
    features: [
      "Equipment inspection and servicing",
      "Compliance documentation",
      "Emergency hotline support"
    ]
  },
  {
    name: "Professional",
    price: "Quarterly optimization",
    features: [
      "System performance testing",
      "Staff refresher training",
      "Priority maintenance scheduling"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom contract",
    features: [
      "24/7 monitoring and dispatch",
      "Dedicated compliance manager",
      "Full system lifecycle management"
    ]
  }
];

export default function EnglishSubscriptionPackagesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 space-y-3">
        <p className="section-subtitle">Subscription packages</p>
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">
          Flexible protection plans
        </h1>
        <p className="text-base text-slate-600">
          Choose a service package that matches your operational needs and
          regulatory requirements.
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
              Request details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
