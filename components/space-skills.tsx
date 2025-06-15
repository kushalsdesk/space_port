"use client";

import { motion, number } from "framer-motion";
import { CometTrail, Cosmos } from "./custom-planet-components";
import SkillsComet from "./skills-comet";

const skillCategories = [
  {
    name: "Frontend",
    color: "#60a5fa",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    color: "#10b981",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    name: "Design",
    color: "#a855f7",
    skills: ["UI/UX", "Figma", "Adobe Suite", "Prototyping"],
  },
  {
    name: "DevOps",
    color: "#f97316",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Monitoring"],
  },
];

// Generate random positions for each skill
const generateRandomPositions = (skillCount: number) => {
  const positions: number[] = [];
  const minDistance = 60; // Minimum distance between stars

  for (let i = 0; i < skillCount; i++) {
    let attempts = 0;
    let position: number;

    do {
      position = {
        x: Math.random() * 200 - 100, // -100 to 100
        y: Math.random() * 160 - 80, // -80 to 80
      };
      attempts++;
    } while (
      attempts < 50 &&
      positions.some(
        (pos) =>
          Math.sqrt(
            Math.pow(pos.x - position.x, 2) + Math.pow(pos.y - position.y, 2),
          ) < minDistance,
      )
    );

    positions.push(position);
  }

  return positions;
};

function SkillCategory({ category, index }: { category: any; index: number }) {
  // Generate random positions for this category's skills
  const skillPositions = generateRandomPositions(category.skills.length);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Category Title */}
      <motion.h3
        className="text-xl md:text-2xl font-bold mb-8 text-center"
        style={{ color: category.color }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      >
        {category.name}
      </motion.h3>

      {/* Skills Stars in Random Positions */}
      <div className="relative w-full h-48 md:h-56 lg:h-64 flex items-center justify-center">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            className="absolute flex flex-col items-center"
            style={{
              left: `calc(50% + ${skillPositions[skillIndex].x}px)`,
              top: `calc(50% + ${skillPositions[skillIndex].y}px)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: skillIndex * 0.15 }}
          >
            {/* Skill Name */}
            <motion.div
              className="text-xs sm:text-sm text-white bg-gray-900/80 backdrop-blur-sm border rounded-full px-3 py-1 whitespace-nowrap mb-2 font-medium"
              style={{ borderColor: category.color + "40" }}
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3 + skillIndex * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {skill}
            </motion.div>

            {/* Star */}
            <motion.div
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full relative"
              style={{ backgroundColor: category.color }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 2 + skillIndex * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Star glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-sm opacity-60"
                style={{ backgroundColor: category.color }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SpaceSkills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      {/* Skills Comet - only appears in this section */}
      <SkillsComet />

      <div className="mx-auto container px-4 md:px-6 relative">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skill <span className="text-purple-400">Constellations</span>
          </motion.h2>

          <motion.div
            className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore my technical domains where each star represents a mastered
            technology scattered across the cosmic skill set.
          </motion.p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
