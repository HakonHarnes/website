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
          abstract="I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier. Also helped make it look prettier. Hello this is just dummy text."
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
          link="https://arxiv.org/abs/2401.05943"
          abstract="WebAssembly is a low-level bytecode language that allows high-level languages like C, C++, and Rust to be executed in the browser at near-native performance. In recent years, WebAssembly has gained widespread adoption is now natively supported by all modern browsers. However, vulnerabilities in memory-unsafe languages, like C and C++, can translate into vulnerabilities in WebAssembly binaries. Unfortunately, most WebAssembly binaries are compiled from such memory-unsafe languages, and these vulnerabilities have been shown to be practical in real-world scenarios. WebAssembly smart contracts have also been found to be vulnerable, causing significant financial loss. Additionally, WebAssembly has been used for malicious purposes like cryptojacking. To address these issues, several analysis techniques for WebAssembly binaries have been proposed. In this paper, we conduct a comprehensive literature review of these techniques and categorize them based on their analysis strategy and objectives. Furthermore, we compare and evaluate the techniques using quantitative data, highlighting their strengths and weaknesses. In addition, one of the main contributions of this paper is the identification of future research directions based on the thorough literature review conducted."
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
  abstract: string;
  keywords: string[];
};

function PublicationItem({
  title,
  journal,
  date,
  link,
  abstract,
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
      <p className="my-2 text-justify text-lg text-slate-400">{abstract}</p>
      <CardList elements={technologies} />
      <div className="mt-5 h-[1px] w-full bg-slate-700 opacity-30" />
    </div>
  );
}
