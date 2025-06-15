"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    color: "from-purple-400 to-pink-600",
  },
  {
    year: "2020 - 2023",
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved performance by 40%.",
    PlanetComponent: JourneyPlanet2,
    color: "from-green-400 to-blue-500",
  },
  {
    year: "2018 - 2020",
    title: "Frontend Developer",
    company: "WebCraft Agency",
    description:
      "Created responsive web applications for various clients using React and Vue.js. Collaborated with designers to implement pixel-perfect UIs.",
    PlanetComponent: JourneyPlanet3,
    color: "from-yellow-400 to-orange-500",
  },
  {
    year: "2018",
    title: "B.Sc. Computer Science",
    company: "Tech University",
    description:
      "Graduated with honors. Specialized in web technologies and software engineering.",
    PlanetComponent: JourneyPlanet4,
    color: "from-blue-400 to-cyan-500",
  },
  {
    year: "2017",
    title: "Best Hackathon Project",
    company: "TechFest 2017",
    description:
      "Won first place for developing an innovative accessibility solution for visually impaired users.",
    PlanetComponent: JourneyPlanet5,
    color: "from-red-400 to-orange-500",
  },
];

export default function SpaceJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="journey" className="py-20 relative z-10">
      {/* Single Background Nebula */}
      <NebulaBackground size={300} className="top-[15%] left-10 opacity-65" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
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
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Space travel path */}
          <svg
            className="absolute left-1/2 top-0 h-full w-2 -ml-1 z-0"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M1,0 Q1.5,25 1,50 Q0.5,75 1,100"
              stroke="url(#gradient)"
              strokeWidth="0.1"
              fill="none"
              strokeDasharray="0.5 0.5"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Journey items */}
          <div className="space-y-16 relative z-10">
            {journeyItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Planet/milestone marker */}
                  <motion.div
                    className="absolute left-1/2 -ml-8 w-16 h-16 flex items-center justify-center z-10"
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <item.PlanetComponent size={64} />
                  </motion.div>

                  {/* Content card */}
                  <div
                    className={`${isEven ? "pr-8 md:pr-16" : "pl-8 md:pl-16"} ${isEven ? "text-right" : "text-left"}`}
                  >
                    <Card
                      className={`${
                        isEven ? "ml-auto" : "mr-auto"
                      } max-w-md bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-teal-400/50 transition-all duration-300 group`}
                    >
                      <CardContent className="p-6">
                        <div
                          className={`mb-2 text-sm font-medium text-teal-400 flex items-center ${isEven ? "justify-end" : "justify-start"}`}
                        >
                          <Star className="h-3 w-3 mr-1" />
                          {item.year}
                        </div>
                        <h3
                          className={`mb-1 text-xl font-bold text-white bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                          {item.title}
                        </h3>
                        <div className="mb-4 text-sm text-blue-400">
                          {item.company}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
