"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sectionPositions = {
  home: { x: "85%", y: "20%" },
  about: { x: "10%", y: "30%" },
  journey: { x: "90%", y: "60%" },
  skills: { x: "15%", y: "70%" },
  projects: { x: "80%", y: "40%" },
  contact: { x: "20%", y: "20%" },
};

export default function FloatingRocket() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "journey",
        "skills",
        "projects",
        "contact",
      ];

      // Hide rocket on very small screens when scrolling
      const shouldHide = window.innerWidth < 640 && window.scrollY > 100;
      setIsVisible(!shouldHide);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const currentPosition =
    sectionPositions[activeSection as keyof typeof sectionPositions] ||
    sectionPositions.home;

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed z-30 text-2xl sm:text-3xl md:text-4xl pointer-events-none"
      style={{ willChange: "transform" }}
      animate={{
        left: currentPosition.x,
        top: currentPosition.y,
        rotate: [0, 5, -5, 0],
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        left: { duration: 1.5, ease: "easeInOut" },
        top: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.3 },
        rotate: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
    >
      <Image
        src={"images/rocket.png"}
        alt="Space Rocket"
        width={60}
        height={60}
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-28 md:h-28 object-contain"
      />
    </motion.div>
  );
}
