"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlackHole } from "./custom-planet-components";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-4 w-4 sm:h-5 sm:w-5" />,
    url: "https://github.com/kushal",
    color: "from-gray-400 to-gray-600",
    description: "Explore my code repositories",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
    url: "https://linkedin.com/in/kushal",
    color: "from-blue-400 to-blue-600",
    description: "Connect professionally",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />,
    url: "https://twitter.com/kushal",
    color: "from-sky-400 to-sky-600",
    description: "Follow my tech journey",
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />,
    url: "https://wa.me/1234567890",
    color: "from-green-400 to-green-600",
    description: "Chat on WhatsApp",
  },
  {
    name: "Email",
    icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
    url: "mailto:kushal@example.com",
    color: "from-orange-400 to-orange-600",
    description: "Send a direct message",
  },
  {
    name: "Discord",
    icon: <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />,
    url: "https://discord.com/users/kushal",
    color: "from-purple-400 to-purple-600",
    description: "Chat on Discord",
  },
];

function SocialButton({ social, index }: { social: any; index: number }) {
  const handleClick = () => {
    if (social.url.startsWith("mailto:")) {
      window.location.href = social.url;
    } else {
      window.open(social.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <Button
        variant="outline"
        className="w-full h-auto p-3 sm:p-4 lg:p-6 border-gray-700/50 hover:border-teal-400/50 bg-black/30 backdrop-blur-sm group transition-all duration-300"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 w-full">
          <motion.div
            className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white flex-shrink-0`}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            {social.icon}
          </motion.div>
          <div className="flex-1 text-left min-w-0">
            <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors text-sm sm:text-base truncate">
              {social.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 truncate">
              {social.description}
            </p>
          </div>
          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 group-hover:text-teal-400 transition-colors flex-shrink-0" />
        </div>
      </Button>
    </motion.div>
  );
}

export default function SpaceContact() {
  return (
    <footer
      id="contact"
      className="py-12 mb-10 sm:py-16 lg:py-20 relative z-10 border-t border-gray-800/50"
    >
      <BlackHole
        size={650}
        className="top-1/4 md:top-3 -right-10 md:right-0 opacity-80"
      />

      <div className="container px-4 md:px-6 relative max-w-7xl mx-auto">
        <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Establish <span className="text-purple-400">Communication</span>
          </motion.h2>

          <motion.div
            className="mb-6 sm:mb-8 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ready to collaborate on the next big mission? Connect with me across
            the digital cosmos through these communication channels.
          </motion.p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto mb-12 sm:mb-16">
          {socialLinks.map((social, index) => (
            <SocialButton key={social.name} social={social} index={index} />
          ))}
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="text-center pt-6 sm:pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Kushal Mondal • Space Explorer &
            Developer
          </p>
          <motion.p
            className="text-slate-500 text-xs mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Transmitting from the Digital Universe
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
