import TechnologyList from "./TechnologyList";
import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export default function Projects() {
  return (
    <section className="mt-28">
      <SectionHeader title="Projects" />
      <div className="grid gap-14 lg:grid-cols-2 pt-2">
        <Project
          title="img-clip.nvim"
          slug="img-clip"
          media="/img-clip.gif"
          github="https://github.com/hakonharnes/img-clip.nvim/"
          technologies={["Lua", "Bash", ".NET"]}
          description="Cross-platform Neovim plugin for embeding images into markup languages like LaTeX, Markdown and Typst. Endorsed by the community with over 200 stars on GitHub and 600 users."
        />
        {/* <Project */}
        {/*   title="PrintBuddy" */}
        {/*   slug="print-buddy" */}
        {/*   media="/img-clip.png" */}
        {/*   github="https://github.com/hakonharnes/print-buddy/" */}
        {/*   technologies={["Python", "FastAPI", "TypeScript", "Next.js"]} */}
        {/*   description="Cross-platform Neovim plugin for embeding images into markup languages like LaTeX, Markdown and Typst. Endorsed by the community with over 200 stars on GitHub and 600 users." */}
        {/* /> */}
        <Project
          title="emcc-obf"
          slug="emcc-obf"
          media="/wasm.jpg"
          github="https://github.com/hakonharnes/emcc-obf/"
          technologies={["Docker", "LLVM", "WebAssembly"]}
          description="Cross-platform Neovim plugin for embeding images into markup languages like LaTeX, Markdown and Typst. Endorsed by the community with over 200 stars on GitHub and 600 users."
        />
        {/* <Project */}
        {/*   title="Website" */}
        {/*   slug="personal-website" */}
        {/*   media="/img-clip.png" */}
        {/*   github="https://github.com/hakonharnes/website/" */}
        {/*   technologies={["TypeScript", "Next.js"]} */}
        {/*   description="Cross-platform Neovim plugin for embeding images into markup languages like LaTeX, Markdown and Typst. Endorsed by the community with over 200 stars on GitHub and 600 users." */}
        {/* /> */}
      </div>
    </section>
  );
}

type ProjectProps = {
  title: string;
  slug: string;
  technologies: string[];
  github: string;
  description: string;
  media: string;
};

function Project({
  title,
  slug,
  technologies,
  github,
  description,
  media,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-4">
      <ProjectImage media={media} slug={slug} />
      <ProjectDetails title={title} slug={slug} technologies={technologies} />
      <ProjectDescription description={description} />
      <ProjectLinks slug={slug} github={github} />
    </div>
  );
}

type ProjectImageProps = {
  media: string;
  slug: string;
};

function ProjectImage({ media, slug }: ProjectImageProps) {
  return (
    <Link href={`projects/${slug}`}>
      <Image
        className="w-full aspect-video rounded-lg border border-slate-700 object-cover"
        src={media}
        width={500}
        height={500}
        alt={slug}
      />
    </Link>
  );
}

type ProjectDetailsProps = {
  title: string;
  slug: string;
  technologies: string[];
};

function ProjectDetails({ title, slug, technologies }: ProjectDetailsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <Link href={`projects/${slug}`} className="hover:text-sky-500">
        <h2 className="text-2xl font-bold text-nowrap">{title}</h2>
      </Link>
      <div className="w-full h-[2px] hidden sm:block bg-slate-700 opacity-30" />
      <div className="flex-shrink-0">
        <TechnologyList technologies={technologies} />
      </div>
    </div>
  );
}

type ProjectDescriptionProps = {
  description: string;
};

function ProjectDescription({ description }: ProjectDescriptionProps) {
  return <p className="text-lg text-justify text-slate-400">{description}</p>;
}

type ProjectLinksProps = {
  slug: string;
  github: string;
};

function ProjectLinks({ slug, github }: ProjectLinksProps) {
  return (
    <div className="flex gap-4 text-lg">
      <InternalLink href={`projects/${slug}`}>Learn more</InternalLink>
      <ExternalLink href={github} newTab>
        GitHub
      </ExternalLink>
    </div>
  );
}
