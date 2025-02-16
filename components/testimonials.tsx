import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Words From Our <span className="text-[#FF6B6B]">Students</span>
        </h2>
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            <Card className="min-w-[300px] md:min-w-[400px]">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student%20techer%20profiles%20.jpg-EtHOlDLOzVSmaYjZnyHq82xK8BJiau.jpeg"
                    alt="Frances Guerrero"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Frances Guerrero</h3>
                    <p className="text-sm text-gray-500">Founder</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects
                  to distance."
                </p>
              </CardContent>
            </Card>
            {/* Add more testimonial cards as needed */}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center" title="hello">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center" title="hello">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

