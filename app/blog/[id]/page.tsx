"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI in Software Development",
    content: `
      Artificial Intelligence is revolutionizing the way we approach software development. From automated code generation to intelligent testing and debugging, AI tools are becoming an integral part of the modern developer's toolkit.

      ## Key Trends

      ### 1. AI-Powered Code Completion
      Advanced code completion tools now understand context and can suggest entire functions or blocks of code. This significantly speeds up development time and reduces common coding errors.

      ### 2. Automated Testing
      AI systems can now generate test cases, identify potential edge cases, and even predict where bugs are likely to occur in the codebase.

      ### 3. Intelligent Code Review
      Machine learning models can analyze code quality, identify potential security vulnerabilities, and suggest optimizations based on best practices.

      ## Impact on Development Teams

      The integration of AI in development workflows has led to:
      - Increased productivity
      - Better code quality
      - Faster debugging
      - More accurate project timelines

      ## Looking Ahead

      As AI technology continues to evolve, we can expect to see:
      - More sophisticated code generation capabilities
      - Better natural language processing for documentation
      - Advanced predictive analytics for project management
      - Improved code optimization suggestions

      The future of software development will likely see an even tighter integration between human developers and AI assistants, creating a more efficient and productive development ecosystem.
    `,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-15",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Frontend Lead"
    }
  },
  {
    id: 2,
    title: "Web3 and the Future of the Internet",
    content: `
      Web3 represents a paradigm shift in how we think about and interact with the internet. Built on blockchain technology, it promises a more decentralized, secure, and user-centric web experience.

      ## Core Concepts

      ### 1. Decentralization
      Web3 eliminates central points of control, distributing power and decision-making across the network. This creates a more resilient and democratic internet infrastructure.

      ### 2. Digital Ownership
      Through NFTs and blockchain technology, users can truly own their digital assets and data, controlling how they're used and monetized.

      ### 3. Smart Contracts
      Automated, self-executing contracts enable trustless transactions and new business models, reducing the need for intermediaries.

      ## Impact on Industries

      Web3 is transforming various sectors:
      - Finance (DeFi)
      - Gaming
      - Social Media
      - Digital Art
      - Identity Management

      ## Future Developments

      The Web3 ecosystem continues to evolve with:
      - Improved scalability solutions
      - Enhanced user interfaces
      - Better interoperability between chains
      - More sustainable consensus mechanisms
      - Integration with traditional systems

      As Web3 matures, we'll see more mainstream adoption and innovative applications that reshape how we interact with the digital world.
    `,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-12",
    readTime: "10 min read",
    category: "Blockchain",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Blockchain Developer"
    }
  },
  {
    id: 3,
    title: "The Evolution of Cloud Computing",
    content: `
      Cloud computing has transformed from a novel concept to the backbone of modern digital infrastructure. Its evolution continues to shape how businesses operate and scale in the digital age.

      ## Major Developments

      ### 1. Serverless Architecture
      The shift towards serverless computing has revolutionized how we build and deploy applications, focusing on business logic rather than infrastructure management.

      ### 2. Edge Computing
      Bringing computation closer to data sources improves response times and reduces bandwidth usage, enabling new use cases in IoT and real-time processing.

      ### 3. Multi-Cloud Strategies
      Organizations are adopting multiple cloud providers to optimize costs, improve reliability, and avoid vendor lock-in.

      ## Business Impact

      Cloud adoption has enabled:
      - Rapid scalability
      - Cost optimization
      - Global reach
      - Innovation acceleration
      - Improved security

      ## Future Trends

      Watch for these emerging developments:
      - AI-driven cloud optimization
      - Quantum computing as a service
      - Green cloud initiatives
      - Enhanced security measures
      - Hybrid cloud solutions

      The cloud continues to evolve, providing new opportunities for businesses to innovate and grow in the digital economy.
    `,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-10",
    readTime: "7 min read",
    category: "Cloud Computing",
    author: {
      name: "Michael Zhang",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Cloud Architect"
    }
  },
  {
    id: 4,
    title: "Cybersecurity in the Age of Quantum Computing",
    content: `
      As quantum computing advances, the cybersecurity landscape faces unprecedented challenges and opportunities. Organizations must prepare for both the threats and defensive capabilities that quantum technologies bring.

      ## Key Challenges

      ### 1. Cryptographic Vulnerability
      Current encryption methods may become vulnerable to quantum attacks, requiring new quantum-resistant algorithms.

      ### 2. Data Protection
      Organizations must protect current data against future quantum threats through crypto-agility and forward secrecy.

      ### 3. Infrastructure Updates
      Legacy systems need updates to support quantum-safe security measures.

      ## Security Solutions

      Modern security approaches include:
      - Post-quantum cryptography
      - Quantum key distribution
      - Zero-trust architecture
      - Quantum random number generators

      ## Preparation Strategies

      Organizations should focus on:
      - Crypto inventory assessment
      - Risk evaluation
      - Standards adoption
      - Talent development
      - Research investment

      The quantum era brings both challenges and opportunities in cybersecurity, requiring proactive preparation and adaptation.
    `,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-08",
    readTime: "9 min read",
    category: "Cybersecurity",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Security Specialist"
    }
  },
  {
    id: 5,
    title: "The Impact of 5G on IoT Development",
    content: `
      5G technology is revolutionizing the Internet of Things (IoT) landscape, enabling new applications and use cases that were previously impossible. This transformation is creating unprecedented opportunities across industries.

      ## Key Advantages

      ### 1. Enhanced Connectivity
      5G provides faster, more reliable connections supporting massive IoT deployments with minimal latency.

      ### 2. Network Slicing
      Customized network configurations enable optimal performance for different IoT applications.

      ### 3. Edge Computing Integration
      5G and edge computing combine to process data closer to IoT devices, improving response times.

      ## Industry Applications

      5G IoT is transforming:
      - Smart cities
      - Industrial automation
      - Healthcare
      - Transportation
      - Agriculture

      ## Future Developments

      Upcoming innovations include:
      - Advanced sensor networks
      - Real-time analytics
      - Autonomous systems
      - Mixed reality applications
      - Predictive maintenance

      The combination of 5G and IoT is creating a more connected and efficient world across all sectors.
    `,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-05",
    readTime: "6 min read",
    category: "IoT",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop",
      role: "IoT Engineer"
    }
  },
  {
    id: 6,
    title: "The Future of UI/UX: Adaptive Interfaces",
    content: `
      Adaptive interfaces represent the next evolution in user experience design, using AI and machine learning to create personalized, context-aware interactions that adapt to individual users' needs and preferences.

      ## Core Principles

      ### 1. Personalization
      Interfaces learn from user behavior to provide customized experiences and relevant content.

      ### 2. Context Awareness
      Systems adapt to different devices, environments, and user situations automatically.

      ### 3. Predictive Design
      AI-powered interfaces anticipate user needs and streamline interactions.

      ## Key Features

      Modern adaptive interfaces include:
      - Dynamic layouts
      - Personalized navigation
      - Contextual help
      - Adaptive content
      - Smart defaults

      ## Future Trends

      Watch for these developments:
      - Emotion-aware interfaces
      - Natural language interactions
      - Gesture-based controls
      - Mixed reality integration
      - Accessibility automation

      Adaptive interfaces are shaping the future of human-computer interaction, making technology more intuitive and accessible for everyone.
    `,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&h=800&auto=format&fit=crop",
    date: "2025-03-01",
    readTime: "8 min read",
    category: "Design",
    author: {
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
      role: "UX Designer"
    }
  }
];

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(p => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{post.author.name}</h3>
              <p className="text-gray-600">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
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

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="prose prose-lg prose-blue">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
            }
            if (paragraph.startsWith('###')) {
              return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('###', '').trim()}</h3>;
            }
            if (paragraph.startsWith('-')) {
              return <ul>   <li key={index} className="ml-6">{paragraph.replace('-', '').trim()}</li> </ul>;
            }
            if (paragraph.trim()) {
              return <p key={index} className="mb-4">{paragraph}</p>;
            }
            return null;
          })}
        </div>
      </article>
    </div>
  );
}