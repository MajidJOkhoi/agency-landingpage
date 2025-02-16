import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Clock, PlayCircle } from "lucide-react"

export function CourseGrid() {
  const courses = [
    {
      title: "Web development with PHP and MySQL",
      level: "Beginner",
      videos: 50,
      duration: "7:50 hours",
      price: 199.49,
      originalPrice: 299.0,
      instructor: "Billy Vasquez",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/courses%20card.jpg-QhnXM3rEFT0dKInEn5ucxqNQYXSLMQ.jpeg",
    },
    {
      title: "Digital marketing essentials",
      level: "Advanced",
      videos: 36,
      duration: "5:30 hours",
      price: 149.0,
      originalPrice: 199.0,
      instructor: "Dennis Barrett",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/courses%20card.jpg-QhnXM3rEFT0dKInEn5ucxqNQYXSLMQ.jpeg",
    },
    {
      title: "Project management fundamentals",
      level: "All level",
      videos: 42,
      duration: "7:20 hours",
      price: 249.99,
      originalPrice: 349.99,
      instructor: "Jacqueline Miller",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/courses%20card.jpg-QhnXM3rEFT0dKInEn5ucxqNQYXSLMQ.jpeg",
    },
    // Add more courses as needed
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.title} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="aspect-video relative">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Badge variant="secondary" className="mb-2">
              {course.level}
            </Badge>
            <h3 className="font-semibold mb-2">{course.title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <PlayCircle className="w-4 h-4" />
                {course.videos} videos
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {course.duration}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-[#FF6B6B]">${course.price} USD</span>
                <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice} USD</span>
              </div>
              <div className="text-sm text-gray-500">{course.instructor}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

