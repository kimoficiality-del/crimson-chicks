/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  User, 
  MapPin, 
  Moon, 
  Sun,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram
} from "lucide-react";
import { useCart } from "../CartContext";
import { useTheme } from "../ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Layout({ children, activePage, setActivePage }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Locations", id: "locations" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              C
            </div>
            <span className="text-xl font-display font-bold tracking-tight">
              Crimson <span className="text-red-600">Chicken</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  activePage === link.id ? "text-red-600" : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              onClick={() => handleNavClick("auth")}
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors hidden sm:block"
              aria-label="User account"
            >
              <User size={20} />
            </button>

            <button 
              onClick={() => handleNavClick("cart")}
              className="relative p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-red-600 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-red-600">
                  {totalItems}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-zinc-900 z-[70] shadow-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold">Menu</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 flex-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between w-full p-4 rounded-xl text-lg font-medium transition-all ${
                      activePage === link.id 
                        ? "bg-red-50 text-red-600 dark:bg-red-900/20" 
                        : "hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {link.name}
                    <ChevronRight size={20} className={activePage === link.id ? "opacity-100" : "opacity-30"} />
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t dark:border-zinc-800">
                <button 
                  onClick={() => handleNavClick("auth")}
                  className="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-medium"
                >
                  <User size={20} />
                  Sign In / Sign Up
                </button>
                <div className="mt-6 flex justify-center gap-6 text-zinc-400">
                  <Facebook size={24} />
                  <Twitter size={24} />
                  <Instagram size={24} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 min-h-[calc(100vh-400px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 pt-20 pb-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Crimson Chicken
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Serving the freshest, most delicious chicken since 1967. Our mission is to be the world's most caring company.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-red-500 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 italic font-serif">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => handleNavClick("menu")} className="hover:text-red-500 transition-colors">Full Menu</button></li>
                <li><button onClick={() => handleNavClick("locations")} className="hover:text-red-500 transition-colors">Find a Restaurant</button></li>
                <li><button onClick={() => handleNavClick("about")} className="hover:text-red-500 transition-colors">Our Story</button></li>
                <li><button onClick={() => handleNavClick("contact")} className="hover:text-red-500 transition-colors">Contact Support</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 italic font-serif">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Accessibility</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 italic font-serif">Join the Flock</h4>
              <p className="text-sm mb-4">Subscribe to get special offers and menu updates.</p>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-zinc-800 border-none rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-red-600 transition-all outline-none"
                />
                <button 
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-red-600 text-white rounded-full px-4 text-xs font-bold hover:bg-red-700 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-medium">
            <p>© 2026 Crimson Chicken. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-red-600/30">Careers</a>
              <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-red-600/30">Donations</a>
              <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-red-600/30">Franchising</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
