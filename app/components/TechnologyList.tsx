import Card from "./Card";

type TechnologyListProps = {
  technologies: string[];
};

export default function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <div className="flex flex-wrap gap-2 font-medium">
      {technologies.map((tech) => (
        <Card key={tech} compact={true}>
          {tech}
        </Card>
      ))}
    </div>
  );
}
