import CardList from "@/components/CardList";
import { SectionHeader } from "@/components/SectionHeader";

export default function AboutSection() {
  return (
    <section>
      <SectionHeader title="About" />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 text-lg text-slate-400 text-justify">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium rhoncus
            inceptos sagittis sociosqu; molestie nostra nam. Conubia nisi
            egestas senectus orci cras diam. Habitasse vulputate lacus convallis
            elementum dui aliquam lectus. Magna faucibus diam elementum,
            volutpat ligula consectetur. Egestas libero cubilia platea fusce
            nascetur pellentesque! Tempor nec suscipit curae facilisis massa
            nullam mus augue leo.
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium rhoncus
            inceptos sagittis sociosqu; molestie nostra nam. Conubia nisi
            egestas senectus orci cras diam. Habitasse vulputate lacus convallis
            elementum dui aliquam lectus. Magna faucibus diam elementum,
            volutpat ligula consectetur. Egestas libero cubilia platea fusce
            nascetur pellentesque! Tempor nec suscipit curae facilisis massa
            nullam mus augue leo.
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium rhoncus
            inceptos sagittis sociosqu; molestie nostra nam. Conubia nisi
            egestas senectus orci cras diam. Habitasse vulputate lacus convallis
            elementum dui aliquam lectus. Magna faucibus diam elementum,
            volutpat ligula consectetur. Egestas libero cubilia platea fusce
            nascetur pellentesque! Tempor nec suscipit curae facilisis massa
            nullam mus augue leo.
          </p>
        </div>
        <Skills />
      </div>
    </section>
  );
}

function Skills() {
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
      <div className="min-w-80">
        <CardList elements={technologies} />
      </div>
    </div>
  );
}
