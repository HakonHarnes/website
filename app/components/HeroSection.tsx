import React from "react";
import Button from "@/components/Button";
import Terminal from "@/components/Terminal";

export default function HeroSection() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-8 py-20 sm:py-24 md:gap-10 lg:flex-row lg:py-32">
      <AboutMe />
      <Terminal
        commands={[
          { variable: "$name", value: "Håkon Harnes" },
          { variable: "$age", value: "25" },
          { variable: "$location", value: "Norway" },
          { variable: "$education", value: "MSc. in Computer Science at NTNU" },
        ]}
      />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 md:max-w-xl md:gap-3 lg:items-start lg:gap-4">
      <h1 className="text-4xl font-extrabold tracking-tight dark:text-white md:text-4xl lg:text-6xl">
        Håkon Harnes<span className="text-sky-400">.</span>
      </h1>
      <p className="  text-xl text-slate-400 md:max-w-md lg:text-2xl">
        I&apos;m a <span className="font-semibold text-sky-400">developer</span>{" "}
        from Norway.
      </p>
      <div className="flex w-full justify-center gap-3 pt-2 lg:gap-4 lg:justify-start">
        <Button href="mailto:hakon@harnes.co">Contact me</Button>
        <Button href="https://github.com/hakonharnes" color="white">
          GitHub
        </Button>
      </div>
    </div>
  );
}
