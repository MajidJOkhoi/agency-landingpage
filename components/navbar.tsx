"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/team" },
  { name: "Blogs", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" title="link">
          <Image
            src="https://i.ytimg.com/vi/WBoBYaisHqU/maxresdefault.jpg"
            alt="NextGen Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold">
            <span className="text-[#ff6b6b]">Next</span>
            <span className="text-[#37375c]">Gen</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              title="link"
              href={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-[#3b82f6] ${
                pathname === link.path ? "text-[#3b82f6]" : "text-gray-600"
              }`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3b82f6]"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Cart & Sign Up Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#ff6b6b] text-[10px] font-medium text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
          <Link href={'/signup'}>

          <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium">Sign Up</Button>
          
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md border-b"
        >
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium py-2 px-4 rounded-md transition-colors ${
                  pathname === link.path ? "bg-[#3b82f6] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
