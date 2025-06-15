"use client"

import FixedSpaceBackground from "./fixed-space-background"
import FloatingRocket from "./floating-rocket"
import SpaceHero from "./space-hero"
import SpaceAbout from "./space-about"
import SpaceJourney from "./space-journey"
import SpaceSkills from "./space-skills"
import SpaceProjects from "./space-projects"
import SpaceContact from "./space-contact"
import SpaceNavigation from "./space-navigation"

export default function SpacePortfolio() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Fixed space background */}
      <FixedSpaceBackground />

      {/* Simple floating rocket */}
      <FloatingRocket />

      {/* Sections that scroll over the background */}
      <SpaceHero />
      <SpaceAbout />
      <SpaceJourney />
      <SpaceSkills />
      <SpaceProjects />
      <SpaceContact />
      <SpaceNavigation />
    </div>
  )
}
