import { SignInForm } from "@/components/sign_in_form";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#e94560]/10 blur-3xl -top-40 -right-40" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#533483]/10 blur-3xl -bottom-40 -left-40" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rotate-45 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-full animate-float-delay" />
      <div className="absolute top-1/3 left-1/4 w-24 h-24 rotate-12 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg animate-float-slow" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left Column - Branding */}
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Welcome to<br /> <span className="text-[#ff6b6b]">Next Gen</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Don&apos;t have an account? {" "}
              <Link href="/signup" className="text-[#e94560] hover:text-[#ff6b6b] transition-colors">
                Sign Up.
              </Link>
            </p>
            <p className="text-gray-400 max-w-md">
              Join us to explore the future of digital innovation. Our platform is designed to elevate your business with cutting-edge solutions.
            </p>
            <button className="px-8 py-3 bg-[#e94560] hover:bg-[#ff6b6b] transition-colors rounded-full text-white font-medium">
              Learn More
            </button>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
