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
          abstract="To be published."
          keywords={[
            "WebAssembly",
            "Obfuscation",
            "Browser security",
            "Crypto mining",
          ]}
        />
        <PublicationItem
          title="SoK: Analysis techniques for WebAssembly"
          journal="MDPI Future Internet"
          date="2024"
          link="https://www.mdpi.com/1999-5903/16/3/84"
          abstract="WebAssembly is a low-level bytecode language that enables high-level languages like C, C++, and Rust to be executed in the browser at near-native performance. In recent years, WebAssembly has gained widespread adoption and is now natively supported by all modern browsers. Despite its benefits, WebAssembly has introduced significant security challenges, primarily due to vulnerabilities inherited from memory-unsafe source languages. Moreover, the use of WebAssembly extends beyond traditional web applications to smart contracts on blockchain platforms, where vulnerabilities have led to significant financial losses. WebAssembly has also been used for malicious purposes, like cryptojacking, where website visitors’ hardware resources are used for crypto mining without their consent. To address these issues, several analysis techniques for WebAssembly binaries have been proposed. This paper presents a systematic review of these analysis techniques, focusing on vulnerability analysis, cryptojacking detection, and smart contract security. The analysis techniques are categorized into static, dynamic, and hybrid methods, evaluating their strengths and weaknesses based on quantitative data. Our findings reveal that static techniques are efficient but may struggle with complex binaries, while dynamic techniques offer better detection at the cost of increased overhead. Hybrid approaches, which merge the strengths of static and dynamic methods, are not extensively used in the literature and emerge as a promising direction for future research. Lastly, this paper identifies potential future research directions based on the state of the current literature."
          keywords={[
            "WebAssembly",
            "Vulnerability analysis",
            "Browser security",
            "Cryptojacking",
            "Smart contracts",
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
      <p className="my-2   text-lg text-slate-400">{abstract}</p>
      <CardList elements={technologies} />
      <div className="mt-5 h-[1px] w-full bg-slate-700 opacity-30" />
    </div>
  );
}
