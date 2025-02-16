"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-red-500">Reach Out</span> To Us Anytime, We're Here For You
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a question or want to discuss a project? We'd love to hear from you.
          Our team is ready to help bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Mail className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <p className="text-sm text-gray-600">hello@example.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Phone className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <p className="text-sm text-gray-600">San Francisco, CA</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:sticky lg:top-8 space-y-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&h=800&auto=format&fit=crop"
              alt="Contact support"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Follow us on social media</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                title="home"
                className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="#"
                title="home"
                className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
              >
                <Instagram className="w-6 h-6 text-pink-600" />
              </a>
              <a
                href="#"
                title="home"
                className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
              >
                <Twitter className="w-6 h-6 text-blue-400" />
              </a>
              <a
                href="#"
                title="home"
                className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-blue-700" />
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">Closed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}