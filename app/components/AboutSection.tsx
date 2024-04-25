import CardList from "@/components/CardList";
import SocialLinks from "@/components/SocialLinks";
import ExternalLink from "@/components/ExternalLink";
import { SectionHeader } from "@/components/SectionHeader";
import InternalLink from "@/components/InternalLink";

export default function AboutSection() {
  return (
    <section>
      <SectionHeader title="About" />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 text-lg text-slate-400  ">
          <p>
            Back in 2016, I decided to try my hand at programming a snake game
            after watching a{" "}
            <span className="text-white">
              <ExternalLink href="https://www.youtube.com/watch?v=AaGK-fj-BAMt">
                YouTube video
              </ExternalLink>
            </span>
            . That’s when I tumbled head first into the rabbit hole of
            programming. Fast forward to today, and I hold a Master’s degree in
            Computer Science from the Norwegian University of Science and
            Technology. I’m currently expanding my skill set at the University
            of Tromsø, where I’m studying in management with an expected
            graduation date of June 2024.
          </p>
          <p>
            Throughout the years, I’ve gained experience in a diverse set of
            programming languages. Python and backend development are my
            specialties. That said, my interests extend to frontend development
            and design, as evidenced by this website! I’ve daily driven Linux
            for the last five years, so I know my way around the terminal. I
            currently use Neovim as my editor of choice, on Arch Linux. I’ve
            even written a popular{" "}
            <InternalLink underline href="/projects/img-clip">
              plugin
            </InternalLink>{" "}
            for Neovim!
          </p>
          <p>
            Security is another interest of mine. I’ve successfully identified
            and disclosed critical vulnerabilities that were present on a
            well-known website. At university, I’ve assisted students in various
            advanced topics like network protocols, reverse engineering, and
            cryptography. Through my research, I’ve explored the hidden threat
            of cryptojacking, where websites secretly use visitors’ computers to
            mine cryptocurrencies. My findings have been published in several
            peer-reviewed papers, which you can find in the{" "}
            <InternalLink underline href="#publications">
              publications
            </InternalLink>{" "}
            section.
          </p>
          <p>
            I am currently looking for new job opportunities. If you’d like to
            discuss potential collaborations or have any questions, feel free to
            connect with me.{" "}
          </p>
          <MyLinks />
        </div>
        <div className="lg:w-72 lg:flex-shrink-0">
          <Skills />
        </div>
      </div>
    </section>
  );
}

function MyLinks() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg text-slate-400 pt-0.5">Links:</span>
      <SocialLinks />
    </div>
  );
}

function Skills() {
  return (
    <div className="w-full flex flex-col gap-8">
      <SkillList
        key="languages"
        title="Languages"
        technologies={[
          "Python",
          "TypeScript",
          "Lua",
          "Bash",
          "WebAssembly",
          "Java",
          "Rust",
          "SQL",
          "C",
          "C++",
        ]}
      />
      <SkillList
        key="frameworks"
        title="Frameworks and libraries"
        technologies={[
          "FastAPI",
          "Django",
          "Next.js",
          "Sveltekit",
          "Express.js",
          "Tailwind",
        ]}
      />
      <SkillList
        key="technologies"
        title="Technologies"
        technologies={[
          "Linux",
          "Docker",
          "Git",
          "AWS",
          "CI/CD",
          "OAuth",
          "JWT",
        ]}
      />
    </div>
  );
}
type SkillListProps = {
  title: string;
  technologies: string[];
};

function SkillList({ title, technologies }: SkillListProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">{title}</h1>
      <CardList elements={technologies} />
    </div>
  );
}
