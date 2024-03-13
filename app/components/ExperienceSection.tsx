import CardList from "@/components/CardList";
import { SectionHeader } from "@/components/SectionHeader";

export default function ExperienceSection() {
  return (
    <section className="mt-28">
      <SectionHeader title="Experience" />
      <div className="flex flex-col gap-5 pt-2">
        <ExperienceItem
          company="NTNUi Sprint"
          position="Software engineer"
          date="Sep 2022 - May 2023"
          location="Trondheim, Norway"
          description="Developed and maintained the membership system for Norway’s largest student organization with over 15,000 members. Optimized the test scripts and worked on payment integration. Collaborated within a 20 person team, extensively using GitHub for pull requests and code reviews."
          technologies={["Python", "Django", "Pytest"]}
        />
        <ExperienceItem
          company="Variant"
          position="Internship"
          date="Jun 2022 - Aug 2022"
          location="Trondheim, Norway"
          description="Developed a responsive web application for inspectors at the Norwegian Public Roads Administration, enabling on-site photo editing and annotation using tablets. Conducted in-depth user interviews to gather requirements. Collaborated with a cross-functional team using agile methodologies."
          technologies={["TypeScript", "Next.js"]}
        />
        <ExperienceItem
          company="NTNU"
          position="Teaching assistant"
          date="Jan 2022 - Dec 2022"
          location="Trondheim, Norway"
          description="Evaluated assignments and assisted over 100 students in network programming and security. Taught students various advanced topics, including threaded programming, network protocols, reverse engineering, and cryptography."
          technologies={[
            "Python",
            "Java",
            "JavaScript",
            "Rust",
            "Go",
            "C",
            "C#",
            "C++",
          ]}
        />
      </div>
    </section>
  );
}

type ExperienceItemProps = {
  position: string;
  company: string;
  date: string;
  location: string;
  description: string;
  technologies: string[];
};

function ExperienceItem({
  company,
  position,
  date,
  location,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between gap-1">
        <h2 className="text-2xl font-bold">{company}</h2>
        <span className="text-lg text-slate-400">{date}</span>
      </div>
      <div className="flex justify-between gap-1">
        <h3 className="text-xl font-semibold text-sky-400">{position}</h3>
        <span className="text-lg text-slate-400">{location}</span>
      </div>
      <p className="my-2   text-lg text-slate-400">{description}</p>
      <CardList elements={technologies} />
      <div className="mt-5 h-[1px] w-full bg-slate-700 opacity-30" />
    </div>
  );
}
