"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import Button from "@/components/Button";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

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

type Command = {
  variable: string;
  value: string;
};

type TerminalProps = {
  commands: Command[];
};

function Terminal({ commands }: TerminalProps) {
  return (
    <div
      className={`${roboto.className} bg-slate-950 w-full p-5 rounded sm:p-8 sm:rounded-lg flex-1 sm:max-w-xl`}
    >
      {commands.map((command, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center">
            <span
              id={`caret-${index}`}
              className="text-slate-300 mr-1"
              style={{ visibility: index === 0 ? "visible" : "hidden" }}
            >
              $
            </span>
            <ReactTyped
              strings={[`echo ${command.variable}`]}
              typeSpeed={50}
              showCursor={false}
              startDelay={index * 2000}
              onComplete={() => {
                setTimeout(() => {
                  const outputElement = document.getElementById(
                    `output-${index}`,
                  );
                  if (outputElement) {
                    outputElement.style.visibility = "visible";
                  }
                  const nextCaretElement = document.getElementById(
                    `caret-${index + 1}`,
                  );
                  if (nextCaretElement) {
                    nextCaretElement.style.visibility = "visible";
                  }
                }, 500);
              }}
            />
          </div>
          <div id={`output-${index}`} style={{ visibility: "hidden" }}>
            {command.value}
          </div>
        </div>
      ))}
    </div>
  );
}
