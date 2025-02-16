import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Circle } from "lucide-react"

const features = [
  { name: "Variety", icon: <Circle className="h-4 w-4 text-[#3b82f6]" /> },
  { name: "Quality education", icon: <Circle className="h-4 w-4 text-[#3b82f6]" /> },
  { name: "Expert instructors", icon: <Circle className="h-4 w-4 text-[#3b82f6]" /> },
  { name: "Career advancement", icon: <Circle className="h-4 w-4 text-[#3b82f6]" /> },
  { name: "Flexible learning options", icon: <Circle className="h-4 w-4 text-[#3b82f6]" /> },
]

export function KnowledgeSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#37375c] mb-8">
              From <span className="text-[#ff6b6b]">Knowledge</span> To
              <br />
              Action
            </h2>
            <Image
              src="https://cdn.pixabay.com/photo/2024/02/08/02/53/digital-8560051_1280.jpg"
              alt="Student learning"
              width={500}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 mb-6">
                We believe that education is the key to unlocking potential and creating a brighter future. To provide
                high-quality, accessible, and transformative learning experiences that empower individuals to achieve
                their personal.
              </p>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#37375c]">Why Choose Coursehub?</h3>
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {feature.icon}
                      <span className="text-gray-700">{feature.name}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-[#3b82f6]">More about us</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 p-6 bg-[#fff5f5] rounded-xl">
              <div>
                <div className="text-[#ff6b6b] text-2xl font-bold">4.8/5</div>
                <p className="text-sm text-gray-600">Average course rating</p>
              </div>
              <div>
                <div className="text-[#ff6b6b] text-2xl font-bold">2K+</div>
                <p className="text-sm text-gray-600">Active students enrolled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

