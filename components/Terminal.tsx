"use client";

import { useState } from "react";
import { ReactTyped } from "react-typed";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

type Command = {
  variable: string;
  value: string;
};

type TerminalProps = {
  commands: Command[];
};

export default function Terminal({ commands }: TerminalProps) {
  const commandDelay = 1900; // Delay between each command in milliseconds
  const outputDelay = 300; // Delay before showing the output in milliseconds
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);

  return (
    <div
      className={`${roboto.className} bg-slate-950 w-full p-5 rounded sm:p-8 sm:rounded-lg flex-1 sm:max-w-xl`}
    >
      {commands.map((command, index) => (
        <div
          key={index}
          className={`${index !== commands.length - 1 ? "mb-4" : ""}`}
        >
          <div className="flex items-center">
            <span
              className={`text-slate-300 mr-1 ${
                index > activeCommandIndex ? "invisible" : "visible"
              }`}
            >
              $
            </span>
            <ReactTyped
              strings={[
                `echo <span class="text-sky-200">${command.variable}</span>`,
              ]}
              typeSpeed={45}
              showCursor={false}
              startDelay={index * commandDelay}
              onComplete={() => {
                setTimeout(() => {
                  const outputElement = document.getElementById(
                    `output-${index}`,
                  );
                  if (outputElement) {
                    outputElement.className = "visible";
                  }
                  setActiveCommandIndex(index + 1);
                }, outputDelay);
              }}
            />
            <span
              className={`w-2 h-5 ml-[2px] bg-slate-300 ${
                index === activeCommandIndex ? "visible" : "invisible"
              }`}
            ></span>
          </div>
          <div id={`output-${index}`} className="invisible">
            {command.value}
          </div>
        </div>
      ))}
    </div>
  );
}
