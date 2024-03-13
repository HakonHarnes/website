"use client";

import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";

import "./globals.css";
import PublicationsSection from "./components/PublicationsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <PublicationsSection />
      </motion.div>
    </>
  );
}
