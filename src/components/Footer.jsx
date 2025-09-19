// Footer.jsx
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router";
import Logo from "../assets/EquipSports Logo Design.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Futuristic glowing effect */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)]"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="EquipSports Logo" className="h-14 w-14" />
              <span className="text-xl font-bold text-white">EquipSports</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Your one-stop destination for premium sports equipment. Gear up,
              perform better, and achieve greatness.
            </p>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@equipsports.com"
                  className="hover:text-blue-400 transition"
                >
                  Email Support
                </a>
              </li>
              <li>
                <Link to="/returns" className="hover:text-blue-400 transition">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Youtube />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Stay updated with the latest gear & offers!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EquipSports. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
