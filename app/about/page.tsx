"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { BookOpen, Users, Star, Globe } from "lucide-react";
import { useMemo } from "react";

export default function About() {
  const coreValues = useMemo(() => [
    {
      title: "Variety",
      description: "This ensures you can find the perfect match for your interests and career aspirations.",
      icon: BookOpen,
    },
    {
      title: "Quality education",
      description: "Our courses are designed with the highest educational standards in mind.",
      icon: Star,
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals and experienced educators bringing real-world insights.",
      icon: Users,
    },
    {
      title: "Flexible learning",
      description: "Helping you to achieve and grow, providing professional development at your own pace.",
      icon: Globe,
    },
  ], []);

  const features = useMemo(() => [
    "Experienced educators",
    "Industry professionals",
    "Passionate mentors",
    "Everywhere access",
    "Programming for classes",
  ], []);

  const testimonials = useMemo(() => [
    {
      name: "Bryan Knight",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      testimonial: "NextGen has completely transformed the way I learn! The courses are interactive, easy to follow, and packed with valuable insights.",
    },
    {
      name: "Billy Vasquez",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      testimonial: "As a busy parent, finding time for personal growth seemed impossible until I discovered NextGen.",
    },
  ], []);

  const teamMembers = useMemo(() => [
    {
      name: "Sarah Johnson",
      role: "Lead Instructor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Michael Chen",
      role: "Course Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Developer",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "David Kim",
      role: "Student Success",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ], []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2D2F6D] mb-4">
          Unlock The Power Of Knowledge With{" "}
          <span className="text-[#FF6B6B]">Next</span> Gen That Encourages
          Curiosity And Exploration
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-12">
          <div>
            <p className="text-2xl font-bold text-[#8B5CF6]">36+</p>
            <p className="text-sm text-gray-600">Total Services</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-500">62+</p>
            <p className="text-sm text-gray-600">Expert Team</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#FF6B6B]">2K+</p>
            <p className="text-sm text-gray-600">Active students</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#FFA500]">4.8/5</p>
            <p className="text-sm text-gray-600">Average course rating</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center text-[#2D2F6D] mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              className="p-6 bg-[#F8F9FF] border-none hover:shadow-lg transition-shadow"
            >
              <value.icon className="w-8 h-8 text-[#2D2F6D] mb-4" />
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Happy Students Section */}
      <section className="mb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Students learning"
            className="rounded-lg"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#2D2F6D] mb-4">
              <span className="text-[#FF6B6B]">35,000+</span> Happy Clients
              Joined Us To Achieve Their Goals
            </h2>
            <p className="text-gray-600 mb-8">
              Offering an extensive selection of courses designed to cater to
              various learning preferences and timelines, we are dedicated to
              empowering each individual to reach their highest potential.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8F9FF] rounded-3xl p-12 mb-24">
        <h2 className="text-3xl font-bold text-center text-[#2D2F6D] mb-12">
          What <span className="text-[#FF6B6B]">Students</span> Are Saying
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 border-none bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                    loading="lazy"
                  />
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-[#2D2F6D] mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}