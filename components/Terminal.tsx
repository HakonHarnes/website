"use client";

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
              id={`caret-${index}`}
              className="text-slate-300 mr-1"
              style={{ visibility: index === 0 ? "visible" : "hidden" }}
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
                    outputElement.style.visibility = "visible";
                  }
                  const nextCaretElement = document.getElementById(
                    `caret-${index + 1}`,
                  );
                  if (nextCaretElement) {
                    nextCaretElement.style.visibility = "visible";
                  }
                }, outputDelay);
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
