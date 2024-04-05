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
      <div className="grid gap-14 pt-2 lg:grid-cols-2 xl:gap-20">
        {projects.map((project) => (
          <ProjectItem key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({
  slug,
  media,
  title,
  technologies,
  abstract,
  github,
}: Project) {
  return (
    <div className="flex flex-col gap-4">
      <ProjectMedia media={media} slug={slug} />
      <ProjectDetails title={title} slug={slug} technologies={technologies} />
      <ProjectAbstract abstract={abstract} />
      <ProjectLinks slug={slug} github={github} />
    </div>
  );
}

type ProjectMediaProps = {
  media: string;
  slug: string;
};

function ProjectMedia({ media, slug }: ProjectMediaProps) {
  const isVideo = media.toLowerCase().endsWith(".mp4");

  return (
    <Link
      href={`projects/${slug}`}
      className="rounded-lg shadow-2xl outline outline-4 outline-slate-500 hover:outline-sky-500"
    >
      {isVideo ? (
        <video autoPlay loop muted className="aspect-video w-full object-cover">
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          className="aspect-video w-full object-cover"
          src={media}
          width={500}
          height={500}
          alt={slug}
        />
      )}
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
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link href={`projects/${slug}`}>
        <h2
          className="cursor-pointer text-2xl font-bold hover:text-sky-500"
          style={{ whiteSpace: "nowrap" }}
        >
          {title}
        </h2>
      </Link>
      <div className="hidden h-[2px] w-full bg-slate-600 opacity-30 sm:block" />
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
  github?: string;
};

function ProjectLinks({ slug, github }: ProjectLinksProps) {
  return (
    <div className="flex gap-3 text-lg">
      <InternalLink underline={true} href={`projects/${slug}`}>
        Learn more
      </InternalLink>
      {github && (
        <ExternalLink underline={true} href={github} newTab>
          GitHub
        </ExternalLink>
      )}
    </div>
  );
}
