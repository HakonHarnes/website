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
  return <div>Project does not exist</div>;
}

type ProjectComponentProps = {
  project: Project;
};

function ProjectComponent({ project }: ProjectComponentProps) {
  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
}
