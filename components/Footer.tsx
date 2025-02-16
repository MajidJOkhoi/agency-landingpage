import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-white pt-12 pb-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="https://i.ytimg.com/vi/WBoBYaisHqU/maxresdefault.jpg" alt="SkillBloom Logo" width={32} height={32} />
              <span className="text-xl font-semibold text-[#ff6b6b]">
                Next<span className="text-[#37375c]">Gen</span>
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Next is an agency website empowers growth, breaks barriers, and unlocks endless possibilities
              for a brighter future.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#37375c] mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#3b82f6]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#3b82f6]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#3b82f6]">
                  Our Mentors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#3b82f6]">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#37375c] mb-4">Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#3b82f6]">
                  Study
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#3b82f6]">
                  Exam
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#3b82f6]">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#3b82f6]">
                  Future Scope
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#37375c] mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span>📧</span> majidalijkhio@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span>📞</span> +923093108513
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold text-[#37375c] mb-2">Connect with us</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-[#3b82f6]">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#3b82f6]">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#3b82f6]">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#3b82f6]">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-6 text-center">
          <p className="text-sm text-gray-600">
            © Copy Right 2024 <span className="text-[#ff6b6b]">Pro</span>Majid
          </p>
        </div>
      </div>
    </footer>
  )
}

