import CardList from "@/components/CardList";
import SocialLinks from "@/components/SocialLinks";
import ExternalLink from "@/components/ExternalLink";
import { SectionHeader } from "@/components/SectionHeader";

export default function AboutSection() {
  return (
    <section>
      <SectionHeader title="About" />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 text-lg text-slate-400 text-justify">
          <p>
            Back in 2016, I decided to try my hand at programming a snake game
            after watching a{" "}
            <span className="text-white">
              <ExternalLink href="https://www.youtube.com/watch?v=AaGK-fj-BAM&t">
                YouTube video
              </ExternalLink>
            </span>
            . That’s when I tumbled head first into the rabbit hole of
            programming. Fast-forward to today, and I have a Master&apos;s
            degree in computer science from the Norwegian University of Science
            and Technology. At the moment, I&apos;m broadening my knowledge at
            University of Tromsø where I&apos;m studying mangement, set to
            gradute in June 2024.
          </p>
          <p>
            Throughout the years, I&apos;ve gained experience in a diverse set
            of programming languages. I&apos;d say I&apos;m most proficient in
            Python and backend development. However, I&apos;m no stranger to
            frontend development and design either, as evidenced by this
            website! Moreover, I enjoy trying out cutting-edge technologies,
            like Rust and WebAssembly. You&apos;ll often find me in the
            terminal, programming in Neovim. I also use Arch Linux, by the way.
          </p>
          <p>I am currently looking for new job opportunities.</p>
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
      <span className="text-lg font-medium text-slate-400 pt-[2px]">
        Reach me at:
      </span>
      <SocialLinks />
    </div>
  );
}

function Skills() {
  return (
    <div className="w-full flex flex-col gap-8">
      <SkillList
        title="Languages"
        technologies={["Python", "TypeScript", "HTML", "CSS", "Bash", "Rust"]}
      />
      <SkillList
        title="Frameworks & libraries"
        technologies={["FastAPI", "Django", "Express.js", "TailwindCSS"]}
      />
      <SkillList
        title="Technologies"
        technologies={["Linux", "Docker", "Vim"]}
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
