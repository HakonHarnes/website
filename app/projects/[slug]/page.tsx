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

type ProjectComponentProps = {
  project: Project;
};

function ProjectComponent({ project }: ProjectComponentProps) {
  return (
    <section>
      <h1>{project.title}</h1>
    </section>
  );
}
