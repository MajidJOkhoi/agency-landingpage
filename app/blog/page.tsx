"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we write and maintain code.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-15",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&h=150&auto=format&fit=crop"
    }
  },
  {
    id: 2,
    title: "Web3 and the Future of the Internet",
    excerpt: "Understanding the impact of blockchain technology and decentralized applications on the web.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-12",
    readTime: "10 min read",
    category: "Blockchain",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
    }
  },
  {
    id: 3,
    title: "The Evolution of Cloud Computing",
    excerpt: "How modern cloud architectures are transforming business operations and scalability.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-10",
    readTime: "7 min read",
    category: "Cloud Computing",
    author: {
      name: "Michael Zhang",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
    }
  },
  {
    id: 4,
    title: "Cybersecurity in the Age of Quantum Computing",
    excerpt: "Preparing for the security challenges and opportunities in the quantum era.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-08",
    readTime: "9 min read",
    category: "Cybersecurity",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
    }
  },
  {
    id: 5,
    title: "The Impact of 5G on IoT Development",
    excerpt: "How next-generation networks are enabling new possibilities in connected devices.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-05",
    readTime: "6 min read",
    category: "IoT",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop"
    }
  },
  {
    id: 6,
    title: "The Future of UI/UX: Adaptive Interfaces",
    excerpt: "Exploring how AI and machine learning are creating more personalized user experiences.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-01",
    readTime: "8 min read",
    category: "Design",
    author: {
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
    }
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Latest Tech Trends & Insights</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest developments in technology, innovation, and digital transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600">{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}