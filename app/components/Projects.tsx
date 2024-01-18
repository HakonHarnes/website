import TechnologyList from "./TechnologyList";
import ExternalLink from "./ExternalLink";
import GitHubIcon from "./icons/GitHubIcon";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export default function Projects() {
  return (
    <section className="mt-28">
      <SectionHeader title="Projects" />
      <div className="grid gap-8 md:grid-cols-2">
        <Project
          title="img-clip.nvim"
          technologies={["Lua", "Bash", "PowerShell"]}
          media="/img-clip.gif"
        />
        {/* <Project title="PrintBuddy" media="/img-clip.png" /> */}
        {/* <Project title="emcc-obf" media="/img-clip.png" /> */}
        {/* <Project title="Website" media="/img-clip.png" /> */}
      </div>
    </section>
  );
}

type ProjectProps = {
  title: string;
  technologies: string[];
  media: string;
};

function Project({ title, technologies, media }: ProjectProps) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        className="w-full aspect-video rounded-lg border border-slate-700 object-cover"
        src={media}
        width={500}
        height={500}
        alt="test"
      />
      <div className="flex items-center gap-x-3">
        <h2 className="text-xl font-bold text-nowrap">{title}</h2>
        <div className="w-full h-[2px] bg-slate-700 opacity-30" />
        <div className="flex-shrink-0">
          <TechnologyList technologies={technologies} />
        </div>
      </div>
    </div>
  );
}
