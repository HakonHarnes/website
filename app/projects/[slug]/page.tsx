import Image from "next/image";
import Card from "@/components/Card";
import Button from "@/components/Button";
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
      <p className="text-justify text-xl text-slate-400 lg:text-2xl">
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
    <div className="flex flex-col items-center justify-center gap-8 py-14">
      <ProjectImage media={project.media} slug={project.slug} />
      <ProjectDetails title={project.title} description={project.description} />
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
    <div className="flex flex-col gap-3 sm:flex-row lg:gap-4">
      {github && (
        <Button href={github} color="white">
          GitHub
        </Button>
      )}
      {youtube && (
        <Button href={youtube} color="white">
          YouTube
        </Button>
      )}
      {twitter && (
        <Button href={twitter} color="white">
          Twitter
        </Button>
      )}
    </div>
  );
}

function FeedbackList({ feedback }: FeedbackListProps) {
  return (
    <div className="pt-20">
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
  description: string[];
};

function ProjectDetails({ title, description }: ProjectDetailsProps) {
  return (
    <div className="w-full flex flex-col gap-4 max-w-5xl">
      <h2 className="text-center text-4xl font-bold pb-4">{title}</h2>
      {description &&
        description.map((paragraph) => (
          <p key={paragraph} className="text-justify text-lg text-slate-400">
            {paragraph}
          </p>
        ))}
    </div>
  );
}
