"use client";

import { motion } from "framer-motion";
import { Zap, Target, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
    value: "50+",
    color: "from-green-400 to-blue-500",
  },
  {
    icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
    label: "Happy Clients",
    value: "30+",
    color: "from-pink-400 to-red-500",
  },
  {
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
    label: "Team Projects",
    value: "20+",
    color: "from-purple-400 to-indigo-500",
  },
];

export default function SpaceAbout() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative z-10">
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
              {/* Astronaut Avatar */}
              <div className="relative">
                <Image
                  src="images/astra.png"
                  alt="Astronaut Bunny"
                  width={150}
                  height={150}
                  className="w-40 h-40 sm:w-24 sm:h-24 md:w-60 md:h-60 object-contain"
                />
              </div>

              {/* Online Status Dot */}
              <motion.div
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-green-400 rounded-full flex items-center justify-center border-2 sm:border-4 border-gray-900"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-1 h-1 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white rounded-full" />
              </motion.div>

              {/* Name Tag */}
              <motion.div
                className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm border border-blue-400/50 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base text-blue-400 font-medium whitespace-nowrap"
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
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-teal-400/50 transition-all duration-300 group h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
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
