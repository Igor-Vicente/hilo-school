"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { advantages, advantagesType } from "../../contants";

export default function VantagensPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="vantagens"
      ref={ref}
      className="py-20 px-4 overflow-hidden bg-linear-to-br from-purple-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Por Que Estudar na{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hilo
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto my-10">
            Na Hilo, o aprendizado acontece com carinho, acompanhamento próximo
            e experiências que tornam o inglês natural e divertido.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Component for individual card with its own scroll detection
function AdvantageCard({
  advantage,
  index,
}: {
  advantage: advantagesType;
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = advantage.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{
        duration: 0.5,
        ease: "easeOut" as const,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group"
    >
      <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 overflow-hidden">
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-linear-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Environment Badge - Top */}
        <div className="flex justify-end mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
            {advantage.env}
          </span>
        </div>

        {/* Icon */}
        <motion.div
          className={`inline-flex p-4 rounded-xl bg-linear-to-br ${advantage.color} mb-6 shadow-md`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {advantage.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{advantage.description}</p>

        {/* Decorative element */}
        <motion.div
          className={`absolute bottom-0 right-0 w-24 h-24 bg-linear-to-br ${advantage.color} rounded-tl-full opacity-10`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
