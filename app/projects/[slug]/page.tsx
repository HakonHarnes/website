import Image from "next/image";
import Card from "@/components/Card";
import CardList from "@/components/CardList";
import Button from "@/components/Button";
import ExternalLink from "@/components/ExternalLink";
import projects from "../projects.json";
import { Project } from "@/types/Project";
import { Feedback } from "@/types/Feedback";

type ProjectProps = {
  params: { slug: string };
};

type FeedbackListProps = {
  feedback: Feedback[];
};

type FeedbackItemProps = {
  url: string;
  source: string;
  comment: string;
};

type ProjectImageProps = {
  media: string;
  slug: string;
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
      <h1 className="text-4xl font-extrabold tracking-tight dark:text-white md:text-4xl lg:text-6xl">
        Project does not exist (yet)
      </h1>
      <p className="text-xl text-slate-400 lg:text-2xl">
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

function ProjectComponent({ project }: { project: Project }) {
  return (
    <div className="flex flex-col max-w-5xl items-center mx-auto justify-center gap-6 py-14 text-lg">
      <ProjectImage media={project.media} slug={project.slug} />
      <ProjectDetails
        title={project.title}
        technologies={project.technologies}
      />
      <ProjectDescription description={project.description} />
      <ProjectLinks
        github={project.github}
        youtube={project.youtube}
        twitter={project.twitter}
      />
      {project.feedback && <FeedbackList feedback={project.feedback} />}
    </div>
  );
}

function ProjectLinks({
  github,
  youtube,
  twitter,
}: {
  github: string;
  youtube?: string;
  twitter?: string;
}) {
  return (
    <div className="flex gap-2 w-full">
      <span className="text-slate-400 font-semibold">Links:</span>
      {github && <ExternalLink href={github}>GitHub</ExternalLink>}
      {youtube && <ExternalLink href={youtube}>YouTube</ExternalLink>}
      {twitter && <ExternalLink href={twitter}>Twitter</ExternalLink>}
    </div>
  );
}

function FeedbackList({ feedback }: FeedbackListProps) {
  return (
    <div className="pt-12">
      <h2 className="text-3xl text-center font-bold">
        Here&apos;s what other people are saying
      </h2>
      <div className="flex flex-col items-center gap-10 pt-10">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {feedback.map((item) => (
            <FeedbackItem key={item.url} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeedbackItem({ url, source, comment }: FeedbackItemProps) {
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

function ProjectImage({ media, slug }: ProjectImageProps) {
  return (
    <Image
      className="aspect-video w-full rounded-lg border border-slate-700 object-cover"
      src={media}
      width={1000}
      height={1000}
      alt={slug}
    />
  );
}

type ProjectDetailsProps = {
  title: string;
  technologies: string[];
};

function ProjectDetails({ title, technologies }: ProjectDetailsProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3">
      <h2 className="text-3xl font-bold text-nowrap">{title}</h2>
      <div className="w-full h-[2px] hidden sm:block bg-slate-700 opacity-30" />
      <div className="flex-shrink-0">
        <CardList elements={technologies} />
      </div>
    </div>
  );
}

function ProjectDescription({ description }: { description: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {description.map((paragraph, index) => (
        <p key={index} className="text-lg text-slate-400">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
