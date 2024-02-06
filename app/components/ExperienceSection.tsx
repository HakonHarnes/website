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
          date="September 2022 - May 2023"
          location="Trondheim"
          description=""
          technologies={["Python", "Django", "Pytest"]}
        />
        <ExperienceItem
          company="Variant"
          position="Internship"
          date="June 2022 - August 2022"
          location="Trondheim"
          description=""
          technologies={["TypeScript", "Next.js"]}
        />
        <ExperienceItem
          company="NTNU"
          position="Teaching assistant"
          date="January 2022 - December 2022"
          location="Trondheim"
          description=""
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
      <p className="my-2 text-justify text-lg text-slate-400">{description}</p>
      <CardList elements={technologies} />
      <div className="mt-5 h-[1px] w-full bg-slate-700 opacity-30" />
    </div>
  );
}
