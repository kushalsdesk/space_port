"use client";

import FixedSpaceBackground from "./fixed-space-background";
import FloatingRocket from "./floating-rocket";
import SpaceHero from "./space-hero";
import SpaceAbout from "./space-about";
import SpaceJourney from "./space-journey";
import SpaceSkills from "./space-skills";
import SpaceProjects from "./space-projects";
import SpaceContact from "./space-contact";
import SpaceNavigation from "./space-navigation";

export default function SpacePortfolio() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <FixedSpaceBackground />
      <div className="relative z-10">
        <FloatingRocket />
        <SpaceHero />
        <SpaceAbout />
        <SpaceJourney />
        <SpaceSkills />
        <SpaceProjects />
        <SpaceContact />
        <SpaceNavigation />
      </div>
    </main>
  );
}
