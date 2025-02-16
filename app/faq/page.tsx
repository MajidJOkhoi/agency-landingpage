"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Most Asked Questions</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-lg text-red-500 mb-3">Services & Solutions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="bg-gray-50 rounded-lg">
              <AccordionTrigger className="px-4">What services does your tech agency provide?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We offer a comprehensive range of services including web development, mobile app development, cloud solutions, UI/UX design, digital transformation consulting, and custom software development. Our team specializes in modern technologies and frameworks to deliver cutting-edge solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 rounded-lg">
              <AccordionTrigger className="px-4">How do you handle project timelines and deliverables?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We follow an agile methodology with clear project milestones and regular client communications. Each project begins with a detailed planning phase where we establish timelines, deliverables, and key performance indicators. We provide weekly progress updates and maintain transparent communication throughout the development process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-lg text-red-500 mb-3">Technology & Expertise</h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-3" className="bg-gray-50 rounded-lg">
              <AccordionTrigger className="px-4">What technologies and frameworks do you work with?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, Azure, and Google Cloud Platform. For mobile development, we specialize in React Native and Flutter. Our team stays up-to-date with the latest technology trends to provide the best solutions for our clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 rounded-lg">
              <AccordionTrigger className="px-4">How do you ensure the security of developed applications?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Security is a top priority in all our projects. We implement industry-standard security practices, including encrypted data transmission, secure authentication systems, regular security audits, and compliance with GDPR and other relevant regulations. We also provide ongoing security updates and maintenance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-lg text-red-500 mb-3">Collaboration & Support</h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-5" className="bg-gray-50 rounded-lg">
              <AccordionTrigger className="px-4">What is your project management approach?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We employ an agile project management approach with dedicated project managers for each client. This includes regular sprint planning, daily standups, and sprint retrospectives. We use modern project management tools to ensure transparent communication and efficient collaboration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 rounded-lg">
              <AccordionTrigger className="px-4">What kind of post-development support do you offer?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We provide comprehensive post-development support including bug fixes, feature updates, performance optimization, and regular maintenance. Our support packages can be customized based on your needs, with options for 24/7 support and dedicated support teams.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-lg text-red-500 mb-3">Pricing & Timeline</h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-7" className="bg-gray-50 rounded-lg">
              <AccordionTrigger className="px-4">How do you structure your pricing?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Our pricing is transparent and project-based, determined by factors such as project scope, complexity, timeline, and required resources. We provide detailed quotes after initial consultations and can work with both fixed-price and time-and-materials models depending on project requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-gray-50 rounded-lg">
              <AccordionTrigger className="px-4">What is your typical project timeline?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Project timelines vary based on scope and complexity. Simple websites might take 4-8 weeks, while complex enterprise solutions can take 3-6 months or more. We provide detailed timeline estimates during the project planning phase and keep you updated on progress throughout development.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Have more questions?</h3>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}