import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8 max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#37375c]">
            Brightening The <span className="text-[#ff6b6b]">Journey</span>
            <br />
            to Success Ahead
          </h1>
          <p className="text-gray-600 md:text-lg">
            Where students are encouraged to reach their full potential through rigorous coursework, innovative
            research, and a supportive learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8">
              Start learning today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-8"
            >
              Explore programs
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-[250px_1fr_250px] gap-8 items-start">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-[#37375c] font-semibold mb-4">Key statistics</h3>
            <div className="space-y-3">
              <div className="bg-[#f1f5ff] p-4 rounded-xl">
                <span className="text-[#3b82f6] text-xl font-bold">500+</span>
                <p className="text-sm text-gray-600">Total courses</p>
              </div>
              <div className="bg-[#f0fff4] p-4 rounded-xl">
                <span className="text-[#22c55e] text-xl font-bold">115</span>
                <p className="text-sm text-gray-600">Expert tutors</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.pixabay.com/photo/2023/10/10/05/52/website-8305451_1280.jpg"
              alt="Student learning"
              fill
              className="object-cover"
            />
            <button className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-[#3b82f6] flex items-center justify-center">
                <span className="text-white">II</span>
              </div>
            </button>
          </div>

          <div className="bg-[#ffd700] rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.pixabay.com/photo/2015/09/09/18/22/dictionary-932327_1280.jpg"
              alt="Student with headphones"
              width={250}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

