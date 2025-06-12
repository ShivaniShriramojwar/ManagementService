import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Assuming you're using lucide-react

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Analytics", path: "/analytics" },
    { name: "Users", path: "/users" },
    { name: "Settings", path: "/settings" },
    // Add your nav links here
  ];

  return (
    <>
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
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-lg z-40 transition-transform duration-300 ease-in-out w-64
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="text-xl font-bold text-blue-600">StatusPanel</div>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-3 rounded-lg transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
