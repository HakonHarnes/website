import Image from "next/image";
import Card from "@/components/Card";

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
    <div className="flex flex-col items-center justify-center gap-4 py-14">
      <ProjectImage media={project.media} slug={project.slug} />
      <ProjectDetails
        title={project.title}
        slug={project.slug}
        technologies={project.technologies}
      />
      <ProjectAbstract abstract={project.abstract} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {project.feedback &&
          project.feedback.map((feedback) => (
            <Feedback
              key={feedback.name}
              url={feedback.url}
              source={feedback.source}
              comment={feedback.comment}
            />
          ))}
      </div>
    </div>
  );
}

type FeedbackProps = {
  url: string;
  source: string;
  comment: string;
};

function Feedback({ url, source, comment }: FeedbackProps) {
  return (
    <Card>
      <div className="flex h-full flex-col gap-1 items-start">
        <p>{comment}</p>
        <div className="flex-grow" />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400"
        >
          Source: {source}
        </a>
      </div>
    </Card>
  );
}

type ProjectImageProps = {
  media: string;
  slug: string;
};

function ProjectImage({ media, slug }: ProjectImageProps) {
  return (
    <Image
      className="aspect-video w-full max-w-5xl rounded-lg border border-slate-700 object-cover"
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
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <h2 className="text-nowrap cursor-pointer text-2xl font-bold hover:text-sky-500">
        {title}
      </h2>
    </div>
  );
}

type ProjectDescriptionProps = {
  abstract: string;
};

function ProjectAbstract({ abstract }: ProjectDescriptionProps) {
  return <p className="text-justify text-lg text-slate-400">{abstract}</p>;
}
