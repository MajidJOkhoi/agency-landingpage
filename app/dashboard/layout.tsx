import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* Dashboard Header */}
        <Header />
        {/* Dashboard Content */}
        <main className="p-6 bg-gray-100 dark:bg-gray-900">{children}</main>
      </div>
    </div>
  );
}
