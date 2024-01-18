import TechnologyList from "./TechnologyList";
import ExternalLink from "./ExternalLink";
import { SectionHeader } from "./SectionHeader";

export default function Publications() {
  return (
    <section className="mt-28">
      <SectionHeader title="Publications" />
      <div className="flex flex-col gap-5 pt-2">
        <PublicationItem
          title="Deceptive bytes: Evaluating WebAssembly obfuscation for evading crypto mining detection"
          journal="Pre-print"
          date="2024"
          link="/"
          description="I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier. Also helped make it look prettier. Hello this is just dummy text."
          keywords={[
            "WebAssembly",
            "Obfuscation",
            "Browser security",
            "Crypto mining",
          ]}
        />
        <PublicationItem
          title="SoK: Analysis techniques for WebAssembly"
          journal="Pre-print"
          date="2024"
          link="/"
          description="I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier. Also helped make it look prettier. Hello this is just dummy text."
          keywords={[
            "WebAssembly",
            "Analysis techniques",
            "Vulnerability detection",
            "Browser security",
          ]}
        />
      </div>
    </section>
  );
}

type PublicationItemProps = {
  journal: string;
  title: string;
  date: string;
  link: string;
  description: string;
  keywords: string[];
};

function PublicationItem({
  title,
  journal,
  date,
  link,
  description,
  keywords: technologies,
}: PublicationItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <ExternalLink href={link}>
          <h2 className="text-2xl font-bold">{title}</h2>
        </ExternalLink>
        <span className="text-slate-400 text-lg">{date}</span>
      </div>
      <div className="flex justify-between">
        <h3 className="font-semibold text-sky-400 text-xl">{journal}</h3>
      </div>
      <p className="my-2 text-lg text-slate-400">{description}</p>
      <TechnologyList technologies={technologies} />
      <div className="w-full h-[1px] bg-slate-700 opacity-30 mt-5" />
    </div>
  );
}
