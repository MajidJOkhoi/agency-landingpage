export function Steps() {
  const steps = [
    {
      step: 1,
      title: "Explore categories",
      description: "Browse through our various course categories to find the area that interests you the most.",
    },
    {
      step: 2,
      title: "Select your course",
      description: "Our course listings include all the details you need to make an informed decision.",
    },
    {
      step: 3,
      title: "Enroll today",
      description: "Sign up for your chosen course directly through our website.",
    },
    {
      step: 4,
      title: "Start learning",
      description:
        "Begin your educational journey with access to high-quality course materials, engaging content, and support from instructors and peers.",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          How We <span className="text-[#FF6B6B]">Deliver</span> Excellence
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative p-6 bg-white rounded-lg shadow-sm">
              <div className="absolute -top-4 left-6 bg-[#4361EE] text-white rounded-full w-8 h-8 flex items-center justify-center">
                {step.step}
              </div>
              <h3 className="font-semibold mb-2 mt-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

