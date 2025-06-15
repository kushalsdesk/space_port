"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CometTrail } from "./custom-planet-components";

export default function SkillsComet() {
  const [isInSkillsSection, setIsInSkillsSection] = useState(false);
  const [cometPosition, setCometPosition] = useState({ x: "100vw", y: "50vh" });

  useEffect(() => {
    const handleScroll = () => {
      const skillsElement = document.getElementById("skills");
      if (skillsElement) {
        const rect = skillsElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if skills section is in view
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        setIsInSkillsSection(isInView);

        if (isInView) {
          // Calculate progress through the skills section
          const sectionHeight = rect.height;
          const visibleTop = Math.max(0, -rect.top);
          const visibleHeight = Math.min(
            sectionHeight,
            windowHeight - Math.max(0, rect.top),
          );
          const progress = visibleTop / (sectionHeight - windowHeight + 200); // Add buffer

          // Move comet from right to left based on scroll progress
          const xPosition = 100 - progress * 120; // Start at 100vw, end at -20vw
          const yPosition = 30 + progress * 40; // Slight vertical movement for natural feel

          setCometPosition({
            x: `${Math.max(-20, xPosition)}vw`,
            y: `${Math.min(70, Math.max(30, yPosition))}vh`,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isInSkillsSection) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none opacity-35 "
      style={{
        left: cometPosition.x,
        top: cometPosition.y,
        zIndex: -10,
      }}
      animate={{
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        rotate: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
        left: { duration: 0.1 },
        top: { duration: 0.1 },
      }}
    >
      {/* Use the existing CometTrail component */}
      <CometTrail size={150} className="" />
    </motion.div>
  );
}
