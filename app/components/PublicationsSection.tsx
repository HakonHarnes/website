import CardList from "@/components/CardList";
import ExternalLink from "@/components/ExternalLink";
import { SectionHeader } from "@/components/SectionHeader";

export default function PublicationsSection() {
  return (
    <section className="mt-28">
      <SectionHeader title="Publications" />
      <div className="flex flex-col gap-5 pt-2">
        <PublicationItem
          title="SoK: Analysis techniques for WebAssembly"
          journal="MDPI Future Internet"
          date="2024"
          doi="https://doi.org/10.3390/fi16030084"
          abstract="WebAssembly is a low-level bytecode language that enables high-level languages like C, C++, and Rust to be executed in the browser at near-native performance. In recent years, WebAssembly has gained widespread adoption and is now natively supported by all modern browsers. Despite its benefits, WebAssembly has introduced significant security challenges, primarily due to vulnerabilities inherited from memory-unsafe source languages. Moreover, the use of WebAssembly extends beyond traditional web applications to smart contracts on blockchain platforms, where vulnerabilities have led to significant financial losses. WebAssembly has also been used for malicious purposes, like cryptojacking, where website visitors’ hardware resources are used for crypto mining without their consent. To address these issues, several analysis techniques for WebAssembly binaries have been proposed. This paper presents a systematic review of these analysis techniques, focusing on vulnerability analysis, cryptojacking detection, and smart contract security. The analysis techniques are categorized into static, dynamic, and hybrid methods, evaluating their strengths and weaknesses based on quantitative data. Our findings reveal that static techniques are efficient but may struggle with complex binaries, while dynamic techniques offer better detection at the cost of increased overhead. Hybrid approaches, which merge the strengths of static and dynamic methods, are not extensively used in the literature and emerge as a promising direction for future research. Lastly, this paper identifies potential future research directions based on the state of the current literature."
          keywords={[
            "WebAssembly",
            "Vulnerability analysis",
            "Browser security",
            "Cryptojacking",
            "Smart contracts",
          ]}
        />
        <PublicationItem
          title="Deceptive bytes: Evaluating WebAssembly obfuscation for evading crypto mining detection"
          journal="To be announced."
          date="2024"
          doi="/"
          abstract="To be published."
          keywords={[
            "WebAssembly",
            "Obfuscation",
            "Browser security",
            "Crypto mining",
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
  doi: string;
  abstract: string;
  keywords: string[];
};

function PublicationItem({
  title,
  journal,
  date,
  doi,
  abstract,
  keywords,
}: PublicationItemProps) {
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
      <div className="mt-5 h-[1px] w-full bg-slate-700 opacity-30" />
    </div>
  );
}
