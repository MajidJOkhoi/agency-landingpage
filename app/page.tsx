import { Hero } from "@/components/hero"
import { Steps } from "@/components/steps"
import { PopularCourses } from "@/components/popular-courses"
import { Categories } from "@/components/categories"
import { KnowledgeSection } from "@/components/knowladge"
import { TutorsSection } from "@/components/tutors"
import { FinalCTASection } from "@/components/final_cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
   
      <main className="flex-1">
        <Hero />
        <Steps />
        <PopularCourses />
        <Categories />
        <KnowledgeSection /> 
        <TutorsSection /> 
        <FinalCTASection /> 
      </main>
  
    </div>
  )
}

