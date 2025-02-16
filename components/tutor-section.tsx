import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TutorSection() {
  const tutors = [
    {
      name: "Dennis Barrett",
      role: "Professor",
      image:
        "https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png",
    },
    {
      name: "Lori Stevens",
      role: "Lecturer",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.9vm7eDbnZS6Yy4ETUfEBAgHaGw&pid=Api&P=0&h=220",
    },
    {
      name: "Billy Vasquez",
      role: "Instructor",
      image:
        "https://static.vecteezy.com/system/resources/previews/021/079/672/original/user-account-icon-for-your-design-only-free-png.png",
    },
    {
      name: "Joan Wallace",
      role: "Assistant professor",
      image:
        "https://static.vecteezy.com/system/resources/previews/021/079/672/original/user-account-icon-for-your-design-only-free-png.png",
    },
    {
      name: "Jacqueline Miller",
      role: "Lecturer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student%20techer%20profiles%20.jpg-EtHOlDLOzVSmaYjZnyHq82xK8BJiau.jpeg",
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">
          Meet The <span className="text-[#FF6B6B]">Tutors</span> Behind Your
          <br />
          Learning Journey
        </h2>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5 mt-8">
          {tutors.map((tutor) => (
            <div key={tutor.name} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src={tutor.image}
                  alt={tutor.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold">{tutor.name}</h3>
              <p className="text-sm text-gray-500">{tutor.role}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-12">
          <p className="max-w-[500px] text-gray-600">
            Join our learning community and gain access to a team of dedicated instructors who are committed to helping
            you succeed.
          </p>
          <div className="space-x-4">
            <Button variant="outline">Meet our all tutor</Button>
            {/* <Button>View all courses</Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

