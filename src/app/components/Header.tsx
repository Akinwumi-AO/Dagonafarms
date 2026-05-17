import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logoDark from "figma:asset/c53c6f4b27ee8279ac0a86decce00a8bd6e66939.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar - Contact Info */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-green-50">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              +234 806 121 9995
            </span>
            <span>•</span>
            <span>📧 info@dagonafarms.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Follow us:</span>
            <a href="#" className="text-green-700 hover:text-green-800">Facebook</a>
            <span>•</span>
            <a href="#" className="text-green-700 hover:text-green-800">LinkedIn</a>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoDark} 
              alt="Dagona Farms Logo" 
              className="h-16 w-16 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl text-green-900">Dagona Farms</span>
              <span className="text-xs text-green-600">Home of Agriculture</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-green-700 text-white shadow-md"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-green-50 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-green-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:bg-green-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}