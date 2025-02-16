"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Video, ChevronRight, ChevronLeft, Code, Palette, Globe, Megaphone, LineChart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Course {
  title: string;
  level: string;
  price: string;
  originalPrice: string;
  videos: number;
  hours: number;
  instructor: {
    name: string;
    image: string;
  };
  image: string;
}

interface Service {
  title: string;
  description: string;
  icon: any;
  color: string;
}

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
      icon: Code,
      color: "bg-blue-500",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement.",
      icon: Palette,
      color: "bg-purple-500",
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to boost your online presence and reach your target audience.",
      icon: Megaphone,
      color: "bg-pink-500",
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      icon: Globe,
      color: "bg-green-500",
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure performance and make informed business decisions.",
      icon: LineChart,
      color: "bg-yellow-500",
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions.",
      icon: ShieldCheck,
      color: "bg-red-500",
    },
  ];

  const courses: Course[] = [
    {
      title: "Web development ",
      level: "Beginner",
      price: "199.49",
      originalPrice: "249.00",
      videos: 35,
      hours: 25,
      instructor: {
        name: "Billy Vasquez",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Digital marketing essentials",
      level: "Advanced",
      price: "149.00",
      originalPrice: "199.00",
      videos: 38,
      hours: 30,
      instructor: {
        name: "Dennis Barrett",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Project management fundamentals",
      level: "All level",
      price: "249.99",
      originalPrice: "299.00",
      videos: 42,
      hours: 35,
      instructor: {
        name: "Jacqueline Miller",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Financial accounting basics",
      level: "Intermediate",
      price: "169.00",
      originalPrice: "249.00",
      videos: 34,
      hours: 30,
      instructor: {
        name: "Joan Wallace",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Modern web development with JAMstack",
      level: "Beginner",
      price: "159.00",
      originalPrice: "199.00",
      videos: 28,
      hours: 20,
      instructor: {
        name: "Judy Nguyen",
        image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Cross-Platform App development with Flutter",
      level: "Advanced",
      price: "449.00",
      originalPrice: "549.00",
      videos: 85,
      hours: 50,
      instructor: {
        name: "Lori Stevens",
        image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#2D2F6D] mb-4"
        >
          Our <span className="text-[#FF6B6B]">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Empowering businesses with innovative digital solutions and expert services
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group"
          >
            <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 text-white`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2D2F6D] group-hover:text-[#FF6B6B] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Courses Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2F6D] mb-4">
          Top Rated <span className="text-[#FF6B6B]">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Enhance your skills with our professional courses
        </p>
      </motion.div>

      {/* Courses Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-16"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {courses.map((course, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Card className="overflow-hidden mx-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-48">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <Badge className="absolute top-4 left-4 bg-white text-[#2D2F6D]">
                        {course.level}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2 text-[#2D2F6D] line-clamp-2">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Video className="w-4 h-4" />
                          {course.videos} videos
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.hours} hours
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={course.instructor.image}
                            alt={course.instructor.name}
                            className="w-8 h-8 rounded-full"
                            loading="lazy"
                          />
                          <span className="text-sm text-gray-600">
                            {course.instructor.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-[#FF6B6B]">
                            ${course.price} USD
                          </span>
                          <span className="text-sm text-gray-400 line-through ml-2">
                            ${course.originalPrice} USD
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
}