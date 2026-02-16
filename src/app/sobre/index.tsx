"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";
import { stats, values } from "@/contants";
import Image from "next/image";

export default function SobreNosPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-20 px-4 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Quem{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Somos
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <div className="relative bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                {/* Teacher Photo */}
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                      <Image
                        src="/teacher.png"
                        alt="Teacher Lorena"
                        className="w-full h-full object-cover rounded-full bg-white"
                        fill
                      />
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4 text-center">
                  Uma Jornada de Coragem e Paixão
                </h3>

                <p className="text-white/90 text-lg leading-relaxed text-center">
                  &quot;Há 2 anos atrás, decidi sair da minha zona de conforto e
                  arriscar a minha maior aventura: abrir a minha escola. Nunca
                  estive tão feliz e realizada. Me sinto completa, transbordando
                  de satisfação e propósito.&quot;
                </p>
                <p className="text-white font-semibold mt-4 text-center">
                  — Teacher Lorena
                </p>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                A{" "}
                <strong className="text-indigo-600">
                  Hilo Language School
                </strong>{" "}
                nasceu em 2023 do sonho e coragem da Teacher Lorena. O nome Hilo
                é uma homenagem carinhosa à sua criadora: <strong>Hi</strong> +{" "}
                <strong>Lo</strong>(rena) = Hilo.
              </p>
              <p className="text-lg">
                Com muito amor, determinação e enfrentando grandes desafios,
                Lorena saiu da sua zona de conforto para criar algo especial. O
                que começou sozinha, hoje é uma equipe de 5 professores
                dedicados, atendendo mais de 150 alunos ao redor do mundo
                inteiro.
              </p>
              <p className="text-lg">
                Nossa escola oferece <strong>aulas online</strong> para pessoas
                no mundo todo e também <strong>aulas presenciais</strong> em
                nossa sede em Rio Claro-SP, atendendo crianças, jovens e
                adultos. Também trabalhamos com aulas corporativas para empresas
                e serviços de interpretação.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" as const }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.5,
                ease: "easeOut" as const,
              }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Teacher Lorena's Testimonial */}
        <motion.div
          className="mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" as const }}
        >
          <div className="bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-6 text-8xl text-indigo-200 font-serif leading-none">
              &quot;
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Mensagem da Fundadora
              </h3>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Há 2 anos atrás, eu decidi sair da minha zona de conforto e
                  arriscar a minha maior aventura da vida: abrir a minha escola.
                  Até então, era só eu e mais ninguém. Hoje somos 5.
                </p>
                <p>
                  Aulas online, aulas presenciais para crianças e adolescentes,
                  aulas para empresas, reuniões como intérprete… Somando mais de
                  150 alunos pelo mundo inteiro que já passaram por nós.
                </p>
                <p>
                  É uma total loucura. Não consigo nem colocar em palavras o
                  baita desafio que é. Aprendo muito todo dia, e às vezes acho
                  que vou pirar de verdade.
                </p>
                <p className="font-semibold text-indigo-700 text-xl">
                  Mas eu NUNCA estive tão feliz e realizada. Nunca mesmo. Me
                  sinto completa, transbordando em mim mesma, de tanta
                  satisfação e propósito.
                </p>
                <p>
                  Esse é real só o começo, porque eu tenho sonhos enormes e faço
                  o que for preciso para conquistá-los.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-16 h-1 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                <div className="text-center">
                  <p className="font-bold text-xl text-gray-900">
                    Teacher Lorena
                  </p>
                  <p className="text-gray-600">
                    Fundadora da Hilo Language School
                  </p>
                </div>
                <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-indigo-300 to-purple-300 rounded-full opacity-20 blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Values Section */}
        <div>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" as const }}
          >
            Nossos Valores
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Component for individual value card with scroll detection
function ValueCard({
  value,
  index,
}: {
  value: {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = value.icon;

  return (
    <motion.div
      ref={cardRef}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      }}
      whileHover={{ y: -10 }}
    >
      <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <motion.div
          className={`inline-flex p-3 rounded-xl bg-linear-to-br ${value.color} mb-4 shadow-md`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>

        <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
        <p className="text-gray-600 leading-relaxed">{value.description}</p>
      </div>
    </motion.div>
  );
}
