export const runtime = "edge";

import Image from "next/image";
import Card from "@/components/Card";
import CardList from "@/components/CardList";
import Button from "@/components/Button";
import ExternalLink from "@/components/ExternalLink";
import InternalLink from "@/components/InternalLink";
import projects from "@/data/projects.json";
import { Project } from "@/types/Project";
import { Feedback } from "@/types/Feedback";

type ProjectProps = {
  params: { slug: string };
};

export default function Page({ params }: ProjectProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (project) {
    return <ProjectComponent {...project} />;
  } else {
    return <ProjectDoesNotExist />;
  }
}

function ProjectDoesNotExist() {
  return (
    <section className="flex h-full flex-col items-center text-center justify-center gap-6 py-20 sm:py-24 lg:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight dark:text-white md:text-4xl lg:text-6xl">
        Project does not exist (yet)
      </h1>
      <p className="text-xl text-slate-400 lg:text-2xl font-medium">
        Maybe I can help you with your project?
      </p>
      <div className="flex gap-3 lg:gap-4 w-80">
        <Button href="mailto:hakon@harnes.co">Contact me</Button>
        <Button href="/" color="white">
          Go back
        </Button>
      </div>
    </section>
  );
}

function ProjectComponent({
  media,
  slug,
  title,
  technologies,
  description,
  website,
  github,
  youtube,
  twitter,
  feedback,
}: Project) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 py-14">
      <ProjectMedia media={media} slug={slug} />
      <ProjectDetails title={title} technologies={technologies} />
      <ProjectDescription description={description} />
      <ProjectLinks
        website={website}
        github={github}
        youtube={youtube}
        twitter={twitter}
      />
      {feedback && <FeedbackList feedback={feedback} />}
    </div>
  );
}

function ProjectLinks({
  website,
  github,
  youtube,
  twitter,
}: {
  website?: string;
  github?: string;
  youtube?: string;
  twitter?: string;
}) {
  return (
    <div className="flex w-full gap-2 text-lg">
      <span className="text-slate-400">Links:</span>
      {website && (
        <ExternalLink href={website}>
          {website.replace("https://", "")}
        </ExternalLink>
      )}
      {github && <ExternalLink href={github}>GitHub</ExternalLink>}
      {youtube && <ExternalLink href={youtube}>YouTube</ExternalLink>}
      {twitter && <ExternalLink href={twitter}>Twitter</ExternalLink>}
    </div>
  );
}

function ContactMe() {
  return (
    <p>
      Email:{" "}
      <InternalLink underline href="mailto:hakon@harnes.co">
        hakon@harnes.co
      </InternalLink>
    </p>
  );
}

type FeedbackListProps = {
  feedback: Feedback[];
};

function FeedbackList({ feedback }: FeedbackListProps) {
  return (
    <div className="pt-12">
      <h2 className="text-center text-3xl font-bold">
        Here&apos;s what other people are saying
      </h2>
      <div className="flex flex-col items-center gap-10 pt-10">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {feedback.map((item) => (
            <FeedbackItem key={item.url} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

type FeedbackItemProps = {
  url: string;
  source: string;
  comment: string;
};

function FeedbackItem({ url, source, comment }: FeedbackItemProps) {
  return (
    <Card>
      <div className="flex h-full flex-col items-start gap-1">
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

type ProjectMediaProps = {
  media: string;
  slug: string;
};

function ProjectMedia({ media, slug }: ProjectMediaProps) {
  const isVideo = media.toLowerCase().endsWith(".mp4");

  return (
    <div className="rounded-lg shadow-2xl outline outline-4 outline-slate-500 w-full">
      {isVideo ? (
        <video
          autoPlay
          loop
          muted
          controls
          className="aspect-video w-full object-cover"
        >
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          className="aspect-video w-full object-cover"
          src={media}
          width={1000}
          height={1000}
          alt={slug}
        />
      )}
    </div>
  );
}

type ProjectDetailsProps = {
  title: string;
  technologies: string[];
};

function ProjectDetails({ title, technologies }: ProjectDetailsProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
      <h2 className="text-3xl font-bold" style={{ whiteSpace: "nowrap" }}>
        {title}
      </h2>
      <div className="hidden h-[3px] w-full bg-slate-600 opacity-30 sm:block" />
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
      <p className="text-lg text-slate-400">
        Does this project seem interesting? Send me an email at{" "}
        <ExternalLink href="mailto:hakon@harnes.co">
          hakon@harnes.co
        </ExternalLink>
      </p>
    </div>
  );
}
