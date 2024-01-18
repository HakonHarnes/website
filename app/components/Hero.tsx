import Button from "./Button";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-8 py-20 sm:py-24 md:gap-10 lg:flex-row lg:py-32">
      <AboutMe />
      <Terminal />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="w-full flex flex-1 flex-col items-center gap-2 md:max-w-xl lg:items-start md:gap-3 lg:gap-4">
      <h1 className="text-4xl font-extrabold tracking-tight dark:text-white  md:text-4xl lg:text-6xl">
        Håkon Harnes<span className="text-sky-400">.</span>
      </h1>
      <p className="text-justify text-xl  text-slate-400 md:max-w-md lg:text-2xl">
        I&apos;m a <span className="font-semibold text-sky-400">developer</span>{" "}
        from Norway.
      </p>
      <div className="w-full flex gap-3 pt-2 mobile:w-auto lg:gap-4">
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
      className={`${roboto.className} bg-slate-950 w-full p-5 rounded sm:p-8 sm:rounded-lg flex-1 sm:max-w-xl `}
    >
      <div>
        <span className="text-slate-300">$ </span>{" "}
        <span className="">echo</span>{" "}
        <span className="text-sky-200">$name</span>
      </div>
      <div className="pb-4"> Håkon Harnes</div>
      <div>
        <span className="text-slate-300">$ </span>{" "}
        <span className="">echo</span>{" "}
        <span className="text-sky-200">$age</span>
      </div>
      <div className="pb-4">25</div>
      <div>
        <span className="text-slate-300">$ </span>{" "}
        <span className="">echo</span>{" "}
        <span className="text-sky-200">$location</span>
      </div>
      <div className="pb-0 sm:pb-4">Norway</div>
      <div className="hidden sm:block">
        <span className="text-slate-300">$ </span>{" "}
        <span className="">echo</span>{" "}
        <span className="text-sky-200">$education</span>
      </div>
      <div className="hidden sm:block">MSc. in Computer Science at NTNU</div>
    </div>
  );
}
