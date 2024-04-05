import CardList from "@/components/CardList";
import { SectionHeader } from "@/components/SectionHeader";
import { Experience } from "@/types/Experience";
import experiences from "@/data/experiences.json";

export default function ExperienceSection() {
  return (
    <section className="mt-28">
      <SectionHeader title="Experience" />
      <div className="flex flex-col gap-5 pt-2">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({
  company,
  position,
  date,
  location,
  description,
  technologies,
}: Experience) {
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
      <p className="my-2 text-lg text-slate-400">{description}</p>
      <CardList elements={technologies} />
      <div className="mt-5 h-0.5 w-full bg-slate-600 opacity-30" />
    </div>
  );
}
