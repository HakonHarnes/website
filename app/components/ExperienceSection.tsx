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
          date="2022 - Present"
          location="Trondheim"
          description="I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier. Also helped make it look prettier. Hello this is just dummy text."
          technologies={["Python", "Django", "Pytest"]}
        />
        <ExperienceItem
          company="Variant"
          position="Internship"
          date="2022 - Present"
          location="Trondheim"
          description="I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier. Also helped make it look prettier. Hello this is just dummy text."
          technologies={["Python", "Django", "Pytest"]}
        />
        <ExperienceItem
          company="NTNU"
          position="Teaching assistant"
          date="2022 - Present"
          location="Trondheim"
          description="I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier. Also helped make it look prettier. Hello this is just dummy text."
          technologies={["Python", "Django", "Pytest"]}
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
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{company}</h2>
        <span className="text-slate-400 text-lg">{date}</span>
      </div>
      <div className="flex justify-between">
        <h3 className="font-semibold text-sky-400 text-xl">{position}</h3>
        <span className="text-slate-400 text-lg">{location}</span>
      </div>
      <p className="my-2 text-lg text-slate-400">{description}</p>
      <CardList elements={technologies} />
      <div className="w-full h-[1px] bg-slate-700 opacity-30 mt-5" />
    </div>
  );
}
