import CardList from "@/components/CardList";
import ExternalLink from "@/components/ExternalLink";
import { SectionHeader } from "@/components/SectionHeader";

export default function PublicationsSection() {
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
      <div className="flex justify-between gap-1">
        <ExternalLink href={link}>
          <h2 className="text-2xl font-bold">{title}</h2>
        </ExternalLink>
        <span className="text-lg text-slate-400">{date}</span>
      </div>
      <div className="flex justify-between gap-1">
        <h3 className="text-xl font-semibold text-sky-400">{journal}</h3>
      </div>
      <p className="my-2 max-w-5xl text-justify text-lg text-slate-400">
        {description}
      </p>
      <CardList elements={technologies} />
      <div className="mt-5 h-[1px] w-full bg-slate-700 opacity-30" />
    </div>
  );
}
