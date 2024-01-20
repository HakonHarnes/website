import SocialLinks from "@/components/SocialLinks";
import NameIcon from "@/components/NameIcon";

import InternalLink from "@/components/InternalLink";

export default function HeaderSection() {
  return (
    <nav className="w-full items-center pt-6 sm:flex sm:justify-between">
      <ul className="hidden sm:block">
        <li>
          <InternalLink href="/">
            <NameIcon />
          </InternalLink>
        </li>
      </ul>
      <div className="xs:flex">
        <ul className="flex justify-between sm:gap-6 xs:flex-1 xs:border-r xs:border-r-slate-600 xs:pr-3 sm:pr-4">
          <li>
            <InternalLink href="/#about">About</InternalLink>
          </li>
          <li>
            <InternalLink href="/#projects">Projects</InternalLink>
          </li>
          <li className="hidden mobile:block">
            <InternalLink href="/#experience">Experience</InternalLink>
          </li>
          <li className="mobile:hidden">
            <InternalLink href="/#experience">Exp.</InternalLink>
          </li>
          <li className="hidden mobile:block">
            <InternalLink href="/#publications">Publications</InternalLink>
          </li>
          <li className="mobile:hidden">
            <InternalLink href="/#publications">Pub.</InternalLink>
          </li>
        </ul>
        <ul className="hidden xs:block xs:pl-3 sm:pl-4">
          <SocialLinks />
        </ul>
      </div>
    </nav>
  );
}
