import { Monitor, Code2, Box, Globe, LineChart, Smartphone, Database } from "lucide-react"

export function Categories() {
  const categories = [
    {
      icon: Monitor,
      title: "Computer science",
    },
    {
      icon: Code2,
      title: "Programming languages",
    },
    {
      icon: Box,
      title: "Software development",
    },
    {
      icon: Globe,
      title: "Web development",
    },
    {
      icon: LineChart,
      title: "Data science & analytics",
    },
    {
      icon: Smartphone,
      title: "Mobile app development",
    },
    {
      icon: Database,
      title: "Database management",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Explore Diverse Learning Paths Within
            <br />
            Our Course <span className="text-[#FF6B6B]">Categories</span>
          </h2>
          <p className="text-gray-500 max-w-[800px] mx-auto">
            Our carefully curated course categories are designed to help you explore different fields, gain new skills,
            and advance your knowledge.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2 bg-[#4361EE]/10 rounded-lg">
                  <Icon className="w-6 h-6 text-[#4361EE]" />
                </div>
                <span className="font-medium">{category.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

