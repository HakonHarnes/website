import Card from "./Card";

export default function Skills() {
  return (
    <div className="flex flex-col gap-8">
      <SkillList
        title="Languages"
        technologies={["Python", "TypeScript", "HTML", "CSS", "Bash", "Rust"]}
      />
      <SkillList
        title="Frameworks & libraries"
        technologies={["FastAPI", "Django", "Express.js", "TailwindCSS"]}
      />
      <SkillList
        title="Technologies"
        technologies={["Linux", "Docker", "Vim"]}
      />
    </div>
  );
}

type SkillListProps = {
  title: string;
  technologies: string[];
};

function SkillList({ title, technologies }: SkillListProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex flex-wrap min-w-80 gap-2 font-medium">
        {technologies.map((tech) => (
          <Card key={tech}>{tech}</Card>
        ))}
      </div>
    </div>
  );
}