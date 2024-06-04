import CardList from "@/components/CardList";
import { SectionHeader } from "@/components/SectionHeader";
import { Education } from "@/types/Education";
import education from "@/data/education.json";

export default function EducationSection() {
  return (
    <section className="mt-28">
      <SectionHeader title="Education" />
      <div className="flex flex-col gap-5 pt-2">
        {education.map((edu) => (
          <EducationItem key={edu.degree} {...edu} />
        ))}
      </div>
    </section>
  );
}

function EducationItem({
  university,
  degree,
  date,
  location,
  courses,
}: Education) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between gap-1">
        <h2 className="text-2xl font-bold">{degree}</h2>
        <span className="text-lg text-slate-400">{date}</span>
      </div>
      <div className="flex justify-between gap-1 pb-2">
        <h3 className="text-xl font-semibold text-sky-400">{university}</h3>
        <span className="text-lg text-slate-400">{location}</span>
      </div>
      <CardList elements={courses} />
      <div className="mt-5 h-0.5 w-full bg-slate-600 opacity-30" />
    </div>
  );
}
