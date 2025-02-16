import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, PlayCircle } from "lucide-react"

export function PopularCourses() {
  const courses = [
    {
      title: "Search Engine Optimization",
      level: "Beginner",
      videos: 50,
      duration: "7:50 hours",
      price: 199.49,
      originalPrice: 299.0,
      instructor: "Billy Vasquez",
      image:
        "https://cdn.pixabay.com/photo/2015/05/08/14/47/seo-758264_1280.jpg",
    },
    {
      title: "Mern Stack Development",
      level: "Advanced",
      videos: 36,
      duration: "5:30 hours",
      price: 149.0,
      originalPrice: 199.0,
      instructor: "Dennis Barrett",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.PMBiSa-JBIhSrPqckRRxyQHaEK&pid=Api&P=0&h=220",
    },
    {
      title: "Digital Marketing",
      level: "All level",
      videos: 42,
      duration: "7:20 hours",
      price: 249.99,
      originalPrice: 349.99,
      instructor: "Jacqueline Miller",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.q8E_6wOSPHZQCdwlejK96gHaE8&pid=Api&P=0&h=220",
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">
            Most <span className="text-[#FF6B6B]">Popular</span> Courses
          </h2>
          <button className="text-[#4361EE] hover:underline">View all courses</button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.title}>
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
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
      </div>
    </section>
  )
}

