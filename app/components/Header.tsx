import Link from "next/link";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import EmailIcon from "./icons/EmailIcon";
import NameIcon from "./icons/NameIcon";

export default function Header() {
  return (
    <div className="mt-6 flex items-center justify-between text-sm font-semibold lg:mt-8 ">
      <ul>
        <li>
          <InternalLink href="/">
            <NameIcon />
          </InternalLink>
        </li>
      </ul>
      <div className="flex gap-8">
        <ul className="flex items-center gap-10 border-r border-r-slate-600 pr-8">
          <li>
            <InternalLink href="/">About</InternalLink>
          </li>
          <li>
            <InternalLink href="/">Projects</InternalLink>
          </li>
          <li>
            <InternalLink href="/">Experience</InternalLink>
          </li>
        </ul>
        <ul className="flex items-center gap-5">
          <li>
            <ExternalLink href="https://www.linkedin.com/in/hakon-harnes/">
              <LinkedInIcon />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.github.com/hakonharnes">
              <GitHubIcon />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="mailto:hakon@harnes.co" newTab={false}>
              <EmailIcon />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function InternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="fill-white hover:fill-sky-500 hover:text-sky-500 dark:hover:fill-sky-400 dark:hover:text-sky-400"
    >
      {children}
    </Link>
  );
}

function ExternalLink({
  href,
  newTab = true,
  children,
}: {
  href: string;
  newTab?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="fill-white stroke-white hover:fill-sky-500 hover:stroke-sky-500 hover:text-sky-500 dark:hover:fill-sky-400 dark:hover:stroke-sky-400 dark:hover:text-sky-400"
    >
      {children}
    </a>
  );
}
