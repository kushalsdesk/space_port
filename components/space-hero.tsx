"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Rocket, Satellite, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SpaceHero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Space Explorer & Developer"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-16 text-center md:px-6 z-10"
    >
      <div className="max-w-4xl z-10 relative w-full">
        <motion.div
          className="mb-4 sm:mb-6 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <Satellite className="h-12 w-12 sm:h-16 sm:w-16 text-blue-400" />
            <motion.div
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome to My
          <br />
          <span className="text-white">Digital Universe</span>
        </motion.h1>

        <motion.h2
          className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-teal-400">{typedText}</span>
          <span className="animate-pulse ml-1 inline-block h-6 sm:h-8 w-0.5 sm:w-1 bg-teal-400" />
        </motion.h2>

        <motion.p
          className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Embark on a journey through my cosmic portfolio. Discover projects that reach for the stars and skills that
          span galaxies.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row mb-6 px-4"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 group px-6 py-3">
            <Rocket className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Launch Mission
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-teal-400 text-teal-400 hover:bg-teal-400/10 px-6 py-3"
          >
            <Star className="mr-2 h-4 w-4" />
            Explore Galaxy
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
