import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FinalCTASection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <div className="bg-[#f1f5ff] p-6 rounded-xl text-center">
            <div className="text-[#3b82f6] mb-2">
              <span className="text-2xl font-bold">2310</span>
            </div>
            <p className="text-sm text-gray-600">Total students</p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.pixabay.com/photo/2018/05/12/11/37/team-3393037_1280.jpg"
              alt="Student learning"
              fill
              className="object-contain"
          
            />
          </div>
          <Image
            src="https://cdn.pixabay.com/photo/2017/06/23/09/03/board-2434016_960_720.jpg"
            alt="Student with headphones"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
        <div className="text-center mt-12 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#37375c]">
            Ready To Achieve <span className="text-[#ff6b6b]">Greatness</span>
            <br />
            In Your Studies?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#3b82f6]">Join for free</Button>
            <Button variant="outline" className="border-[#3b82f6] text-[#3b82f6]">
              Watch demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

