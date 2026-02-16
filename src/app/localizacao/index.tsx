"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Navigation, Building2, LucideIcon } from "lucide-react";
import { locationInfo } from "@/contants";

export default function LocalizacaoPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="localizacao" ref={ref} className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2 }}
          >
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">Aulas Presenciais</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Venha nos{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Visitar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nossa sede em Rio Claro está de portas abertas para você conhecer
            nossa escola e equipe
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Side - Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Google Maps Embed */}
              <div className="aspect-4/3 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.736!2d-47.556!3d-22.428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7dba9c4b5e8b5%3A0x1f8e3e3e3e3e3e3e!2sR.%207%2C%201489%20-%20Santa%20Cruz%2C%20Rio%20Claro%20-%20SP%2C%2013500-200!5e0!3m2!1spt-BR!2sbr!4v1645000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Floating address card */}
            <motion.div
              className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl shadow-xl p-6 border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">
                    Hilo Escola de Idiomas
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    R. 7, 1489 - Santa Cruz
                    <br />
                    Rio Claro - SP, 13500-200
                  </p>
                </div>
                <motion.a
                  href="https://maps.app.goo.gl/wp1Ho8ZCiQ9adASd8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Navigation className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="space-y-6 lg:pt-8"
          >
            {locationInfo.map((info, index) => (
              <LocationCard key={index} info={info} index={index} />
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Agende sua Visita
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Conheça nossa estrutura, converse com nossos professores e
              descubra como podemos ajudar você a alcançar a fluência em inglês
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5519996042420?text=Olá! Gostaria de agendar uma visita à escola."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-50 shadow-xl transition-all"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Agendar Visita
              </motion.a>

              <motion.a
                href="https://maps.app.goo.gl/wp1Ho8ZCiQ9adASd8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation className="w-5 h-5" />
                Como Chegar
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Component for individual location info card
function LocationCard({
  info,
  index,
}: {
  info: {
    icon: LucideIcon;
    title: string;
    content: string;
    subcontent: string;
    color: string;
  };
  index: number;
}) {
  const Icon = info.icon;
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={itemRef}
      className="group"
      initial={{ opacity: 0, x: 30 }}
      animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      }}
      whileHover={{ x: 5 }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start gap-4">
        <motion.div
          className={`shrink-0 w-14 h-14 bg-linear-to-br ${info.color} rounded-xl flex items-center justify-center shadow-md`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
          <p className="text-gray-700 font-medium">{info.content}</p>
          <p className="text-sm mt-1 text-gray-500">{info.subcontent}</p>
        </div>
      </div>
    </motion.div>
  );
}
