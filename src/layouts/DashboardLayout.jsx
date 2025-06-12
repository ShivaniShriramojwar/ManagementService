// DashboardLayout.jsx - Simple working version
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Settings, AlertTriangle, Globe } from "lucide-react";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Settings },
    { name: "Incidents", path: "/incidents", icon: AlertTriangle },
    { name: "Public Status", path: "/status", icon: Globe },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md lg:hidden border"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full !bg-white border-r border-gray-200 shadow-lg z-40 transition-transform duration-300 ease-in-out w-64
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="text-xl font-bold text-blue-600">StatusPanel</div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent size={20} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <div>
              <div className="text-sm font-semibold">Admin User</div>
              <div className="text-xs text-gray-500">admin@example.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 lg:ml-64 transition-all duration-300 min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              {/* Space for mobile toggle button */}
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {navItems.find((item) => item.path === location.pathname)?.name ||
                "Dashboard"}
            </h1>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
