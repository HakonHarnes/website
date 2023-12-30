import Link from "next/link";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import EmailIcon from "./icons/EmailIcon";
import NameIcon from "./icons/NameIcon";

export default function Header() {
  return (
    <div className="mt-6 flex items-center justify-center text-sm font-semibold sm:justify-between lg:mt-8">
      <ul className="hidden sm:block">
        <li>
          <InternalLink href="/">
            <NameIcon />
          </InternalLink>
        </li>
      </ul>
      <div className="flex w-full justify-between gap-8 sm:w-auto">
        <ul className="flex w-full items-center justify-between gap-5 mobile:w-auto xxs:gap-8 sm:gap-10 sm:border-r sm:border-r-slate-600 sm:pr-8">
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
        <ul className="hidden gap-4 mobile:flex mobile:items-center mobile:justify-center sm:gap-5">
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
      className="fill-white hover:fill-sky-400 hover:text-sky-400"
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
      className="fill-white stroke-white hover:fill-sky-400 hover:stroke-sky-400 hover:text-sky-400 "
    >
      {children}
    </a>
  );
}
