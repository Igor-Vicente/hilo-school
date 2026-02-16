"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import Image from "next/image";
import { quickLinks, services, socialLinks } from "@/contants";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      className="bg-linear-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6">
              <Image
                src="/logo.png"
                width={80}
                height={80}
                alt="Hilo Language School"
                className="rounded-full shadow-lg shadow-purple-500/30 ring-2 ring-purple-300/50"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Hilo Language School
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transformando vidas através do inglês desde 2023. Seu novo jeito
              de viver o idioma começa aqui.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all ${social.color} hover:bg-white/20`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-purple-300">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-purple-300">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  className="text-gray-300 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <span className="text-purple-400">✓</span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-6 text-purple-300">Contato</h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3 group">
                <div className="shrink-0 w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <MapPin size={20} className="text-purple-300" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">
                    R. 7, 1489 - Santa Cruz
                    <br />
                    Rio Claro - SP, 13500-200
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="https://wa.me/5519996042420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="shrink-0 w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone size={20} className="text-green-300" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm group-hover:text-green-300 transition-colors">
                    (19) 99604-2420
                    <br />
                    <span className="text-xs text-gray-400">
                      WhatsApp disponível
                    </span>
                  </p>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="shrink-0 w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail size={20} className="text-blue-300" />
                </div>
                <div>
                  <a
                    href="mailto:contato@hilo.com.br"
                    className="text-gray-300 text-sm group-hover:text-blue-300 transition-colors"
                  >
                    contato@hilo.com.br
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 group">
                <div className="shrink-0 w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <Clock size={20} className="text-orange-300" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">
                    Seg - Sex: 7h às 20h
                    <br />
                    <span className="text-xs text-gray-400">
                      Finais de semana fechado
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hilo Language School. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-linear-to-br from-purple-600 to-indigo-600 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center z-50 group cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
}
