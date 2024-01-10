import Button from "./Button";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono();

export default function Hero() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-10 pt-20 sm:pt-24 lg:pt-32 md:flex-row">
      <AboutMe />
      <Terminal />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col items-center gap-5 md:items-start flex-1 md:max-w-xl">
      <h1 className="text-4xl font-extrabold tracking-tight dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Håkon Harnes<span className="text-sky-400">.</span>
      </h1>
      <p className="text-justify text-xl text-slate-400 leading-6 md:max-w-md">
        I&apos;m a <span className="text-sky-400 font-semibold">developer</span>{" "}
        developer from Norway. I am a student at the Norwegian University of
        Science and Technology. At the moment, I am studying.
      </p>
      <div className="flex gap-5 pt-2">
        <Button href="mailto:hakon@harnes.co">Contact me</Button>
        <Button href="/" color="white">
          Resume
        </Button>
      </div>
    </div>
  );
}

function Terminal() {
  return (
    <div
      className={`${roboto.className} bg-slate-950 w-full text-lg p-6 rounded-lg flex-1 md:max-w-xl `}
    >
      <div>
        <span className="">$</span> <span className="text-sky-200">echo</span>{" "}
        <span className="">$name</span>
      </div>
      <div className="pb-4"> Håkon Harnes</div>
      <div>
        <span className="">$</span> <span className="text-sky-200">echo</span>{" "}
        <span className="">$age</span>
      </div>
      <div className="pb-4">25</div>
      <div>
        <span className="">$</span> <span className="text-sky-200">echo</span>{" "}
        <span className="">$location</span>
      </div>
      <div className="pb-4">Norway</div>
      <div>
        <span className="">$</span> <span className="text-sky-200">echo</span>{" "}
        <span className="">$education</span>
      </div>
      <div className="pb-4">MSc. in Computer Science at NTNU</div>
    </div>
  );
}
