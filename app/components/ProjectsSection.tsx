import { Project } from "@/types/Project";
import projects from "@/data/projects.json";

import CardList from "@/components/CardList";
import InternalLink from "@/components/InternalLink";
import ExternalLink from "@/components/ExternalLink";

import Link from "next/link";
import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";

export default function ProjectsSection() {
  return (
    <section className="mt-28">
      <SectionHeader title="Projects" />
      <div className="grid gap-14 xl:gap-24 lg:grid-cols-2 pt-2">
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
  return (
    <div className="flex flex-col gap-4">
      <ProjectImage media={project.media} slug={project.slug} />
      <ProjectDetails
        title={project.title}
        slug={project.slug}
        technologies={project.technologies}
      />
      <ProjectAbstract abstract={project.abstract} />
      <ProjectLinks slug={project.slug} github={project.github} />
    </div>
  );
}

type ProjectImageProps = {
  media: string;
  slug: string;
};

function ProjectImage({ media, slug }: ProjectImageProps) {
  return (
    <Link
      href={`projects/${slug}`}
      className="shadow-2xl transform hover:scale-[1.010] transition-transform duration-200"
    >
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
        <CardList elements={technologies} />
      </div>
    </div>
  );
}

type ProjectDescriptionProps = {
  abstract: string;
};

function ProjectAbstract({ abstract }: ProjectDescriptionProps) {
  return <p className="text-lg   text-slate-400">{abstract}</p>;
}

type ProjectLinksProps = {
  slug: string;
  github: string;
};

function ProjectLinks({ slug, github }: ProjectLinksProps) {
  return (
    <div className="flex gap-3 text-lg">
      <InternalLink underline={true} href={`projects/${slug}`}>
        Learn more
      </InternalLink>
      <ExternalLink underline={true} href={github} newTab>
        GitHub
      </ExternalLink>
    </div>
  );
}
