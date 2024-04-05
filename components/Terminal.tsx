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

const INITIAL_DELAY = 600;
const COMMAND_DELAY = 1800;
const OUTPUT_DELAY = 250;

export default function Terminal({ commands }: TerminalProps) {
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
                `echo&ensp;<span class="text-sky-200">${command.variable}</span>`,
              ]}
              typeSpeed={45}
              showCursor={false}
              startDelay={INITIAL_DELAY + index * COMMAND_DELAY}
              onComplete={() => {
                setTimeout(() => {
                  setActiveCommandIndex(index + 1);
                }, OUTPUT_DELAY);
              }}
            />
            <span
              className={`w-2 h-5 ml-0.5 bg-slate-300 ${
                index === activeCommandIndex ? "visible" : "invisible"
              }`}
            ></span>
          </div>
          <div className={index < activeCommandIndex ? "visible" : "invisible"}>
            {command.value}
          </div>
        </div>
      ))}
    </div>
  );
}
