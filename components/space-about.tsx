"use client";

import { motion } from "framer-motion";
import { Zap, Target, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { JourneyPlanet1, NebulaBackground } from "./custom-planet-components";

const aboutStats = [
  {
    icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
    label: "Years of Experience",
    value: "5+",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
    label: "Projects Completed",
    value: "25+",
    color: "from-green-400 to-blue-500",
  },
  {
    icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
    label: "Happy Clients",
    value: "20+",
    color: "from-pink-400 to-red-500",
  },
  {
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
    label: "Team Projects",
    value: "10+",
    color: "from-purple-400 to-indigo-500",
  },
];

export default function SpaceAbout() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative z-10">
      <NebulaBackground
        size={300}
        className="bottom-10 md:-bottom-10 right-10 opacity-15"
      />
      <div className="container px-4 md:px-6 relative max-w-7xl mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          {/* User Profile with Astronaut */}
          <motion.div
            className="mb-4 sm:mb-6 flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Simple 2D Circular Orbital System */}
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 flex items-center justify-center">
                {/* Orbiting Planet with top-to-bottom depth effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      // Size: smallest at top, biggest at bottom
                      scale: [0.4, 0.7, 1.3, 0.7, 0.4],
                      // Opacity: lowest at top, highest at bottom
                      opacity: [0.3, 0.6, 1, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    style={{
                      zIndex: 20, // Always behind bunny for clean effect
                    }}
                  >
                    <JourneyPlanet1
                      size={40}
                      className="sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </motion.div>
                </motion.div>

                {/* Astronaut Bunny - Always in front */}
                <div className="relative z-10">
                  <Image
                    src="images/astra.png"
                    alt="Astronaut Bunny"
                    width={120}
                    height={120}
                    className="mb-20 md:mb-0 sm:w-24 sm:h-24 md:w-60 md:h-60 object-contain"
                  />
                </div>
              </div>

              {/* Name Tag */}
              <motion.div
                className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm border border-blue-400/50 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base text-blue-400 font-medium whitespace-nowrap z-30"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Kushal Mondal
              </motion.div>
            </div>
          </motion.div>

          <motion.h2
            className="mb-3 sm:mb-4 mt-8 sm:mt-12 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About This Space Explorer
          </motion.h2>

          <motion.div
            className="mb-8 sm:mb-12 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm a digital astronaut navigating the vast cosmos of code and
            creativity. With a passion for exploring new technologies and
            building stellar user experiences, I transform ideas into reality
            across the digital universe. My mission: to create applications that
            are not just functional, but truly out of this world.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-black/60 backdrop-blur-sm border-gray-700/50 hover:border-teal-400/50 transition-all duration-300 group h-full">
                  <CardContent className=" p-4 sm:p-6 text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${stat.color} mb-3 sm:mb-4`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-slate-400 leading-tight">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
