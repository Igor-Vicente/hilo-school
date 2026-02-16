"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { quickLinks } from "@/contants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false);
    handleNavigation(e, href);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const elem = document.getElementById(href);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <nav className="p-2">
          <div className="flex items-center justify-end">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className="relative px-5 py-2.5 rounded-xl font-medium text-gray-700 hover:text-purple-700 transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {/* Underline effect on hover */}
                  <motion.div
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-purple-600 to-violet-600 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "70%" }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-linear-to-r from-purple-50 to-violet-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </motion.a>
              ))}
            </div>
            <motion.button
              className={`md:hidden p-2 rounded-lg ${
                true ? "text-gray-700" : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <motion.div
          className="absolute top-20 right-4 left-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
            scale: isOpen ? 1 : 0.95,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block px-6 py-3 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.05 }}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </motion.a>
            ))}

            {/* CTA Button - Mobile */}
            <motion.a
              href="https://wa.me/5519996042420?text=Olá! Quero aprender inglês com a Hilo"
              target="_blank"
              rel="noopener noreferrer"
              className="block m-6 px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-center font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95, y: 0 }}
            >
              <span className="relative z-10">Agendar uma aula grátis</span>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
