"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Code2, Database, Globe, Search, Brain, Blocks } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Frontend Lead",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&h=600&auto=format&fit=crop",
    expertise: ["React", "Next.js", "TypeScript"],
    icon: <Code2 className="w-10 h-10 text-blue-500" />,
    description: "Passionate about creating beautiful, responsive user interfaces with 8+ years of experience in frontend development."
  },
  {
    name: "Sarah Johnson",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&h=600&auto=format&fit=crop",
    expertise: ["Node.js", "Python", "AWS"],
    icon: <Database className="w-10 h-10 text-green-500" />,
    description: "Expert in building scalable backend systems and cloud architecture with a focus on performance optimization."
  },
  {
    name: "Michael Zhang",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&h=600&auto=format&fit=crop",
    expertise: ["MERN Stack", "DevOps", "Cloud"],
    icon: <Blocks className="w-10 h-10 text-purple-500" />,
    description: "Full stack developer with expertise in building end-to-end applications and implementing DevOps practices."
  },
  {
    name: "Emily Rodriguez",
    role: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&h=600&auto=format&fit=crop",
    expertise: ["Technical SEO", "Analytics", "Content"],
    icon: <Search className="w-10 h-10 text-yellow-500" />,
    description: "SEO expert specializing in technical optimization and data-driven search strategies."
  },
  {
    name: "David Kim",
    role: "AI Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&h=600&auto=format&fit=crop",
    expertise: ["Machine Learning", "NLP", "Python"],
    icon: <Brain className="w-10 h-10 text-red-500" />,
    description: "AI specialist focused on implementing cutting-edge machine learning solutions for business problems."
  },
  {
    name: "Lisa Wang",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop",
    expertise: ["Figma", "User Research", "Design Systems"],
    icon: <Globe className="w-10 h-10 text-indigo-500" />,
    description: "Creative designer passionate about crafting intuitive and beautiful user experiences."
  }
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Meet Our Expert Team</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our diverse team of technology experts brings together years of experience
          and cutting-edge expertise to deliver exceptional solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                  {member.icon}
                </div>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <a href="#" className="text-gray-600 hover:text-blue-600" title="home">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600" title="home">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Want to Join Our Team?</h2>
        <p className="text-gray-600 mb-6">
          We're always looking for talented individuals to join our growing team.
        </p>
        <a
          href="/careers"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View Open Positions
        </a>
      </div>
    </div>
  );
}