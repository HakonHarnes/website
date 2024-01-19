import { Project } from "../../types/Project";
import projects from "../projects/projects.json";
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
        {projects.map((project) => (
          <ProjectComponent key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

type ProjectComponentProps = {
  project: Project;
};

function ProjectComponent({ project }: ProjectComponentProps) {
  const { media, slug, title, technologies, description, github } = project;
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
      <Link href={`projects/${slug}`}>
        <h2 className="text-2xl font-bold text-nowrap hover:text-sky-500 cursor-pointer">
          {title}
        </h2>
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
