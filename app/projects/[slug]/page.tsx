import projects from "../projects.json";

type ProjectProps = {
  params: { slug: string };
};

export default function Page({ params }: ProjectProps) {
  const project = projects.find((project) => project.slug === params.slug);

  if (project) {
    return <Project {...project} />;
  } else {
    return <ProjectDoesNotExist />;
  }
}

function ProjectDoesNotExist() {
  return <div>Project does not exist</div>;
}

type ProjectComponentProps = {
  slug: string;
  title: string;
  media: string;
  technologies: string[];
  description: string;
};

function Project({
  slug,
  title,
  media,
  technologies,
  description,
}: ProjectComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={media} alt={title} />
      <p>{description}</p>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
