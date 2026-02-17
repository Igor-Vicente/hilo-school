"use client";

import { motion } from "framer-motion";
import Header from "../../components/header";
import Image from "next/image";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl m-auto">
        <Header />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-20">
            {/* Left Side - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full text-violet-600 text-sm font-bold tracking-wide mb-6"
              >
                INGLÊS PARA O MUNDO
              </motion.div>
              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-poppins"
              >
                <span className="text-gray-900">Domine o inglês na</span>
                <span className="block mt-2 bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Hilo School.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Aulas presenciais em Rio Claro e online para todo o mundo. Onde
                quer que você esteja, seu aprendizado não para.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://wa.me/5519996042420?text=Olá! Quero aprender inglês com a Hilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-5 bg-linear-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold rounded-full transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comece Agora
                </motion.a>

                <motion.a
                  href="#sobre"
                  className="px-10 py-5 text-lg font-semibold text-gray-700 hover:text-purple-600 transition-colors flex items-center justify-center gap-2 group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saiba mais
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              {/* Main Image */}
              <div className="relative">
                <motion.div
                  className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/OFF.jpg"
                    alt="Aprenda inglês com a Hilo"
                    fill
                    className="object-cover object-left"
                    priority
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-purple-900/20 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Stats Card */}
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl max-w-50"
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      100%
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      Paixão e Propósito
                    </div>
                  </div>
                </motion.div>

                {/* Small accent circle */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-linear-to-br from-yellow-400 to-orange-400 rounded-full opacity-40 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
