"use client";

import type React from "react";

import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ProjectPlanet1,
  ProjectPlanet2,
  ProjectPlanet3,
  ProjectPlanet4,
  Cosmos,
} from "./custom-planet-components";

const projects = [
  {
    name: "Nebula Commerce",
    type: "E-commerce Platform",
    description:
      "A stellar e-commerce platform that connects merchants across the digital galaxy. Built with Next.js and powered by cosmic-scale performance.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    color: "#f97316", // Orange
    PlanetComponent: ProjectPlanet1,
    status: "Orbiting Production",
    github: "#",
    live: "#",
  },
  {
    name: "Quantum Dashboard",
    type: "Analytics Platform",
    description:
      "Real-time analytics dashboard that processes data at light speed. Visualizes complex metrics through an intuitive cosmic interface.",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    color: "#ef4444", // Red
    PlanetComponent: ProjectPlanet2,
    status: "Active Mission",
    github: "#",
    live: "#",
  },
  {
    name: "Stellar Chat",
    type: "Communication App",
    description:
      "Instant messaging app that connects teams across different time zones and galaxies. Features real-time collaboration tools.",
    tech: ["React Native", "Socket.io", "Express", "Redis"],
    color: "#10b981", // Green
    PlanetComponent: ProjectPlanet3,
    status: "Deep Space",
    github: "#",
    live: "#",
  },
  {
    name: "Cosmic Portfolio",
    type: "Personal Website",
    description:
      "This very portfolio you're exploring! A journey through my digital universe showcasing skills and projects.",
    tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    color: "#8b5cf6", // Purple
    PlanetComponent: ProjectPlanet4,
    status: "Current Location",
    github: "#",
    live: "#",
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card
        className="bg-black/60 backdrop-blur-sm border-gray-700/50 hover:border-teal-400/50 transition-all duration-300 group h-full"
        style={
          {
            borderColor: project.color + "50",
            "--hover-border": project.color + "80",
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = project.color + "80";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = project.color + "50";
        }}
      >
        <CardContent className="p-6">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <project.PlanetComponent size={48} />
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: project.color }}
                >
                  {project.name}
                </h3>
                <p className="text-sm text-blue-400">{project.type}</p>
              </div>
            </div>
            <motion.div
              className="px-3 py-1 rounded-full text-xs font-medium text-black"
              style={{ backgroundColor: project.color }}
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {project.status}
            </motion.div>
          </div>

          {/* Project Description */}
          <p className="text-slate-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string, techIndex: number) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-gray-800/50 border border-gray-600/50 rounded text-xs text-slate-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: techIndex * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-gray-600 hover:border-blue-400 hover:bg-blue-400/10"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
            <Button
              size="sm"
              className="flex-1 hover:opacity-90 text-black font-medium"
              style={{ backgroundColor: project.color }}
              onClick={() => window.open(project.live, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Launch
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function SpaceProjects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      {/* Cosmos Trail */}
      <Cosmos
        size={450}
        className="top-1/4 md:top-[15%] -right-20 md:left-20 opacity-80"
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-white/80"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Mission <span className="text-purple-400">Control</span>
          </motion.h2>

          <motion.div
            className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore the digital planets I've engineered across the cosmos. Each
            project represents a successful mission to solve real-world
            challenges through innovative technology and stellar user
            experiences.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-slate-400 mb-6">
              Ready to embark on a new mission together?
            </p>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 group"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Rocket className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Initiate Contact
            </Button>
          </motion.div>
        */}
      </div>
    </section>
  );
}
