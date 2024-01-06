import Button from "./Button";

export default function Hero() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-2 items-center justify-center pt-20 sm:pt-24 lg:pt-32">
      <h1 className="text-4xl font-extrabold tracking-tight dark:text-white sm:text-5xl lg:text-6xl">
        Håkon Harnes<span className="text-sky-400">.</span>
      </h1>
      <h2 className="text-3xl font-medium tracking-tight dark:text-white sm:text-4xl lg:text-5xl">
        [<span className="text-sky-400">developer</span>]
      </h2>
      {/* <p className="mx-auto my-6 max-w-3xl text-justify text-lg text-slate-200 "> */}
      {/*   I’ve written a few thousand words on why traditional “semantic class */}
      {/*   names” are the reason CSS is hard to maintain, but the truth is you’re */}
      {/*   never going to believe. */}
      {/* </p> */}
      <div className="flex gap-5 pt-4">
        <Button href="mailto:hakon@harnes.co">Contact me</Button>
        <Button href="/" color="white">
          Resume
        </Button>
      </div>
    </div>
  );
}
