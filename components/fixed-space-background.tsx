"use client"

import { motion } from "framer-motion"

export default function FixedSpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Static blinking stars - optimized for performance */}
      {[...Array(150)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "opacity, transform",
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger twinkling stars - reduced count for performance */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-1 h-1 bg-blue-200 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "opacity, transform",
          }}
          animate={{
            opacity: [0.05, 0.4, 0.05],
            scale: [0.3, 1.2, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Static nebula effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-radial from-purple-900/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-radial from-blue-900/10 to-transparent rounded-full blur-3xl" />

      {/* Static planets - responsive sizes */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-800/20 blur-xl" />
      <div className="absolute bottom-20 sm:bottom-40 left-5 sm:left-10 w-12 h-12 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-red-600/15 to-orange-800/15 blur-lg" />
    </div>
  )
}
