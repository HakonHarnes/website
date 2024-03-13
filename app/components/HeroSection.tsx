"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Terminal from "@/components/Terminal";

export default function HeroSection() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-8 py-20 sm:py-24 md:gap-10 lg:flex-row lg:py-32">
      <AboutMe />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="w-full sm:max-w-xl"
      >
        <Terminal
          commands={[
            { variable: "$name", value: "Håkon Harnes" },
            { variable: "$age", value: "25" },
            { variable: "$location", value: "Norway" },
            {
              variable: "$education",
              value: "MSc. in Computer Science at NTNU",
            },
          ]}
        />
      </motion.div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 md:max-w-xl md:gap-3 lg:items-start lg:gap-4">
      <motion.h1
        className="text-4xl font-extrabold tracking-tight dark:text-white md:text-4xl lg:text-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Håkon Harnes
      </motion.h1>
      <motion.p
        className="text-xl text-slate-400 md:max-w-md lg:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        I'm a <span className="font-semibold text-sky-400">developer</span> from
        Norway.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex w-full justify-center gap-3 pt-2 lg:gap-4 lg:justify-start"
        transition={{ delay: 2, duration: 1.5 }}
      >
        <Button href="mailto:hakon@harnes.co">Contact me</Button>
        <Button href="https://github.com/hakonharnes" color="white">
          GitHub
        </Button>
      </motion.div>
    </div>
  );
}
