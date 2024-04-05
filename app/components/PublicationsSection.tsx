import CardList from "@/components/CardList";
import ExternalLink from "@/components/ExternalLink";
import { SectionHeader } from "@/components/SectionHeader";
import { Publication } from "@/types/Publication";
import publications from "@/data/publications.json";

export default function PublicationsSection() {
  return (
    <section className="mt-28">
      <SectionHeader title="Publications" />
      <div className="flex flex-col gap-5 pt-2">
        {publications.map((publication) => (
          <PublicationItem key={publication.title} {...publication} />
        ))}
      </div>
    </section>
  );
}

function PublicationItem({
  title,
  journal,
  date,
  doi,
  abstract,
  keywords,
}: Publication) {
  return (
    <div className="flex flex-col gap-2 sm:gap-1">
      <div className="flex justify-between gap-1">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-lg text-slate-400 hidden sm:inline-block">
          {date}
        </span>
      </div>
      <ExternalLink className="w-fit sm:hidden" href={doi}>
        <h3 className="text-lg">{doi}</h3>
      </ExternalLink>
      <div className="flex justify-between gap-1">
        <h3 className="text-xl font-semibold text-sky-400">{journal}</h3>
        <span className="text-lg text-slate-400 sm:hidden">{date}</span>
        <ExternalLink className="hidden sm:inline-block" href={doi}>
          <h3 className="text-lg">{doi}</h3>
        </ExternalLink>
      </div>
      <p className="my-2 text-lg text-slate-400">{abstract}</p>
      <CardList elements={keywords} />
      <div className="mt-5 h-0.5 w-full bg-slate-600 opacity-30" />
    </div>
  );
}
