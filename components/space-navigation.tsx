"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home", planet: "🏠" },
  { name: "About", href: "#about", planet: "👨‍🚀" },
  { name: "Journey", href: "#journey", planet: "🚀" },
  { name: "Skills", href: "#skills", planet: "⚡" },
  { name: "Projects", href: "#projects", planet: "🌟" },
  { name: "Contact", href: "#contact", planet: "📡" },
]

export default function SpaceNavigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = navItems.map((item) => item.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.5) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav
        className="flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-1 sm:gap-2 rounded-full bg-black/80 backdrop-blur-md border border-gray-700/50 px-2 sm:px-4 py-2 sm:py-3 shadow-2xl"
          layout
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                className={`relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-105"
                    : "text-slate-400 hover:text-white hover:bg-gray-800/50"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={item.name}
              >
                <span className="text-xs sm:text-sm">{item.planet}</span>

                {/* Orbital ring for active item */}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute inset-0 border border-teal-400/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.nav>
    </div>
  )
}
