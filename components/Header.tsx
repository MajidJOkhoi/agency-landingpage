"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Fix Theme Hydration Issue
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 shadow-md px-6 py-4">
      {/* Left: Page Title */}
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">Dashboard</h2>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* ✅ Dark Mode Toggle (Fix Hydration Issue) */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
          aria-label="Toggle Dark Mode"
        >
          {mounted && theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600" />
          )}
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition" aria-label="Notifications">
          <Bell className="h-5 w-5 text-gray-600 dark:text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <span className="text-sm font-medium text-gray-800 dark:text-white">John Doe</span>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2">
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Profile
              </Link>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Settings
              </Link>
              <button
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => alert("Logging out...")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
