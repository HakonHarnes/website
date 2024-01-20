import SocialLinks from "@/components/SocialLinks";
import NameIcon from "@/components/NameIcon";

import InternalLink from "@/components/InternalLink";

export default function HeaderSection() {
  return (
    <nav className="pt-6 flex items-center justify-center sm:justify-between lg:pt-8">
      <ul className="hidden sm:block">
        <li>
          <InternalLink href="/">
            <NameIcon />
          </InternalLink>
        </li>
      </ul>
      <div className="flex  w-full justify-between xxs:gap-8 sm:w-auto">
        <ul className="flex w-full items-center justify-between gap-4 mobile:w-auto xxs:gap-8 sm:gap-10 sm:border-r sm:border-r-slate-600 sm:pr-8">
          <li>
            <InternalLink href="/#about">About</InternalLink>
          </li>
          <li>
            <InternalLink href="/#projects">Projects</InternalLink>
          </li>
          <li>
            <InternalLink href="/#experience">Experience</InternalLink>
          </li>
          <li>
            <InternalLink href="/#publications">Publications</InternalLink>
          </li>
        </ul>
        <ul className="hidden mobile:block">
          <SocialLinks />
        </ul>
      </div>
    </nav>
  );
}
