import Image from "next/image"
import { Button } from "@/components/ui/button"

const tutors = [
  {
    name: "Dennis Barrett",
    role: "Professor",
    image: "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
  },
  {
    name: "Lori Stevens",
    role: "Lecturer",
    image: "https://static.vecteezy.com/system/resources/previews/020/765/399/large_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
  },
  {
    name: "Billy Vasquez",
    role: "Instructor",
    image: "https://www.pngarts.com/files/5/User-Avatar-PNG-Picture.png",
  },
  {
    name: "Joan Wallace",
    role: "Assistant professor",
    image: "https://static.vecteezy.com/system/resources/previews/021/079/672/original/user-account-icon-for-your-design-only-free-png.png",
  },
  {
    name: "Jacqueline Miller",
    role: "Lecturer",
    image: "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png",
  },
]

export function TutorsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#f8f9ff]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#37375c] mb-16">
          Meet The <span className="text-[#ff6b6b]">Tutors</span> Behind Your
          <br />
          Learning Journey
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {tutors.map((tutor, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={tutor.image}
                alt={tutor.name}
                width={200}
                height={200}
                className="rounded-xl mb-4"
              />
              <h3 className="font-semibold text-[#37375c]">{tutor.name}</h3>
              <p className="text-sm text-gray-500">{tutor.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 mb-8">
            Join our learning community and gain access to a team of dedicated instructors who are committed to helping
            you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#3b82f6]">Meet our all tutors</Button>
            <Button variant="outline" className="border-[#3b82f6] text-[#3b82f6]">
              View all courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

