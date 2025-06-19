"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  JourneyPlanet1,
  JourneyPlanet2,
  JourneyPlanet3,
  JourneyPlanet4,
  JourneyPlanet5,
  NebulaBackground,
} from "./custom-planet-components";

const journeyItems = [
  {
    year: "2023 - Present",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    description:
      "Leading development of enterprise SaaS platform. Architecting scalable solutions using Next.js, Node.js, and PostgreSQL.",
    PlanetComponent: JourneyPlanet1,
    color: "#a855f7",
    planetName: "Nexus Prime",
    classification: "Tech Hub",
    status: "ACTIVE",
    coordinates: "Sector 7G-Alpha",
  },
  {
    year: "2020 - 2023",
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved performance by 40%.",
    PlanetComponent: JourneyPlanet2,
    color: "#10b981",
    planetName: "Terra Nova",
    classification: "Development World",
    status: "COMPLETED",
    coordinates: "Sector 5B-Beta",
  },
  {
    year: "2018 - 2020",
    title: "Frontend Developer",
    company: "WebCraft Agency",
    description:
      "Created responsive web applications for various clients using React and Vue.js. Collaborated with designers to implement pixel-perfect UIs.",
    PlanetComponent: JourneyPlanet3,
    color: "#f59e0b",
    planetName: "Craftworld",
    classification: "Creative Colony",
    status: "COMPLETED",
    coordinates: "Sector 3C-Gamma",
  },
  {
    year: "2018",
    title: "B.Sc. Computer Science",
    company: "Tech University",
    description:
      "Graduated with honors. Specialized in web technologies and software engineering.",
    PlanetComponent: JourneyPlanet4,
    color: "#06b6d4",
    planetName: "Academus",
    classification: "Knowledge Station",
    status: "COMPLETED",
    coordinates: "Sector 1A-Delta",
  },
  {
    year: "2017",
    title: "Best Hackathon Project",
    company: "TechFest 2017",
    description:
      "Won first place for developing an innovative accessibility solution for visually impaired users.",
    PlanetComponent: JourneyPlanet5,
    color: "#ef4444",
    planetName: "Innovation Base",
    classification: "Research Outpost",
    status: "COMPLETED",
    coordinates: "Sector 0X-Epsilon",
  },
];

export default function SpaceJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="journey" className="py-20 relative z-10">
      {/* Single Background Nebula */}

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-white/80"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Space <span className="text-purple-400">Odyssey</span>
          </motion.h2>

          <motion.div
            className="mb-12 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Journey items */}
          <div className="space-y-24 relative z-10">
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                {/* Universal Layout - Same for all screen sizes */}
                <div className="flex flex-col items-center">
                  {/* Top half of details */}
                  <motion.div
                    className="w-full text-center font-mono mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                  >
                    {/* Status and planet info */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        {item.status}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
                      style={{ color: item.color }}
                    >
                      {item.planetName}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                      {item.classification}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      {item.coordinates}
                    </p>
                  </motion.div>

                  {/* Planet centered - Bigger on desktop */}
                  <motion.div
                    className="relative mb-6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    <item.PlanetComponent className="md:w-44 md:h-44 lg:w-52 lg:h-52" />

                    {/* Scanning rings - Responsive sizes */}
                    <motion.div
                      className="absolute inset-0 border-2 rounded-full"
                      style={{ borderColor: item.color + "40" }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 border rounded-full"
                      style={{ borderColor: item.color + "20" }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  </motion.div>

                  {/* Bottom half of details */}
                  <motion.div
                    className="w-full text-center font-mono"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  >
                    {/* Mission details */}
                    <div className="space-y-3">
                      <div className="text-cyan-400 text-sm md:text-base uppercase tracking-wider">
                        {item.year}
                      </div>
                      <h4 className="text-white font-semibold text-xl md:text-2xl">
                        {item.title}
                      </h4>
                      <p className="text-blue-400 text-base md:text-lg">
                        {item.company}
                      </p>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                        {item.description}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                      <div className="w-20 md:w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: item.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.2 + 0.6,
                          }}
                        />
                      </div>
                      <span className="text-xs md:text-sm text-gray-400">
                        COMPLETE
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
