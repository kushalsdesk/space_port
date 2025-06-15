"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Journey Section Planets
export function JourneyPlanet1({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 25,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Image
        src="/images/planet-purple.png"
        alt="Purple Swirl Planet"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

export function JourneyPlanet2({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 30,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Image
        src="/images/planet-earth.png"
        alt="Earth-like Planet"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

export function JourneyPlanet3({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Image
        src="/images/planet-saturn.png"
        alt="Saturn-like Planet"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

export function JourneyPlanet4({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 35,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Image
        src="/images/planet-ice.png"
        alt="Ice Planet"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

export function JourneyPlanet5({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 18,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Image
        src="/images/planet-red.png"
        alt="Red Volcanic Planet"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

// Projects Section Planets
export function ProjectPlanet1({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 22,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Image
        src="/images/planet-orange.png"
        alt="Orange Ringed Planet"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

export function ProjectPlanet2({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 28,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Image
        src="/images/planet-mars.png"
        alt="Mars-like Planet"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

export function ProjectPlanet3({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 32,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Image
        src="/images/planet-green.png"
        alt="Green Spotted Planet"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

export function ProjectPlanet4({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 26,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Image
        src="/images/planet-system.png"
        alt="Planet System"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

// Single Nebula Component for journey section only
export function NebulaBackground({
  size = 200,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
      animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/nebula.png"
        alt="Cosmic Nebula"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}

// New Comet Component for projects section
export function Cosmos({
  size = 200,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
      animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/cosmos.png"
        alt="Cosmic Nebula"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}
// New Comet Component for projects section
export function CometTrail({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
      animate={{
        x: [0, 50, 0],
        y: [0, -30, 0],
        rotate: [0, 15, 0],
      }}
      transition={{
        duration: 12,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/comet.png"
        alt="Blazing Comet"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}
