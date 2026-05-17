import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import logoDark from "figma:asset/c53c6f4b27ee8279ac0a86decce00a8bd6e66939.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-green-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl mb-2">Stay Updated</h3>
              <p className="text-green-200">
                Subscribe to our newsletter for agricultural tips, market updates, and farming insights
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-green-700 text-white placeholder-green-300 focus:outline-none focus:border-green-500"
              />
              <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors flex items-center gap-2">
                Subscribe
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoDark} 
                alt="Dagona Farms Logo" 
                className="h-16 w-16 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg">Dagona Farms</span>
                <span className="text-xs text-green-300">Home of Agriculture</span>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-4">
              Modern, Technology-Driven, and Sustainable Farming Solutions across Crop Production, Livestock, Aquaculture, and Processing.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-green-200 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-green-200 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-green-200">
              <li>• GAP Training</li>
              <li>• Extension Services</li>
              <li>• Farm Management</li>
              <li>• Market Linkages</li>
              <li>• Financial Literacy</li>
              <li>• Business Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-green-200 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-amber-400" />
                <div>
                  <div className="text-white mb-1">Head Office</div>
                  <div>NO.33 Karaya plaza, Zoo Road, Kano, Nigeria</div>
                </div>
              </li>
              <li className="flex items-center gap-2 text-green-200 text-sm">
                <Phone size={16} className="flex-shrink-0 text-amber-400" />
                <div>+234 806 121 9995</div>
              </li>
              <li className="flex items-center gap-2 text-green-200 text-sm">
                <Mail size={16} className="flex-shrink-0 text-amber-400" />
                <div>info@dagonafarms.com</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-green-300 text-sm">
          <p>© {new Date().getFullYear()} Dagona Homes of Agriculture. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}