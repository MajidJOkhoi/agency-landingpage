"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart3, Users, Settings } from "lucide-react";

const routes = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  { label: "Users", icon: Users, href: "/dashboard/users" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-4">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            <div className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname === route.href ? "bg-blue-600" : "hover:bg-gray-700"
            }`}>
              <route.icon className="w-5 h-5" />
              <span>{route.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
