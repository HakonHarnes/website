import Image from "next/image";

import CardList from "@/components/CardList";
import InternalLink from "@/components/InternalLink";
import ExternalLink from "@/components/ExternalLink";
import Button from "@/components/Button";

import { Project } from "@/types/Project";
import projects from "../projects.json";

type ProjectProps = {
  params: { slug: string };
};

export default function Page({ params }: ProjectProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (project) {
    return <ProjectComponent project={project} />;
  } else {
    return <ProjectDoesNotExist />;
  }
}

function ProjectDoesNotExist() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-6 py-20 sm:py-24 lg:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight dark:text-white  md:text-4xl lg:text-6xl">
        Project does not exist (yet)
      </h1>
      <p className="text-justify text-xl  text-slate-400 lg:text-2xl">
        But maybe I can help you with your project?
      </p>
      <div className="flex gap-3 lg:gap-4">
        <Button href="mailto:hakon@harnes.co">Contact me</Button>
        <Button href="/" color="white">
          Go back
        </Button>
      </div>
    </section>
  );
}

function ProjectComponent({ project }: ProjectComponentProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-14">
      <ProjectImage media={project.media} slug={project.slug} />
      <ProjectDetails
        title={project.title}
        slug={project.slug}
        technologies={project.technologies}
      />
      <ProjectAbstract abstract={project.abstract} />
    </div>
  );
}

type ProjectImageProps = {
  media: string;
  slug: string;
};

function ProjectImage({ media, slug }: ProjectImageProps) {
  return (
    <Image
      className="w-full max-w-5xl aspect-video rounded-lg border border-slate-700 object-cover"
      src={media}
      width={1000}
      height={1000}
      alt={slug}
    />
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
      <h2 className="text-2xl font-bold text-nowrap hover:text-sky-500 cursor-pointer">
        {title}
      </h2>
    </div>
  );
}

type ProjectDescriptionProps = {
  abstract: string;
};

function ProjectAbstract({ abstract }: ProjectDescriptionProps) {
  return <p className="text-lg text-justify text-slate-400">{abstract}</p>;
}
