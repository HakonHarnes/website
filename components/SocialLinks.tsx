import ExternalLink from "./ExternalLink";
import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";
import EmailIcon from "./EmailIcon";

export default function SocialLinks() {
  return (
    <ul className="gap-3 flex items-center justify-center">
      <li>
        <ExternalLink
          underline={false}
          href="https://www.linkedin.com/in/hakon-harnes/"
        >
          <LinkedInIcon />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          underline={false}
          href="https://www.github.com/hakonharnes"
        >
          <GitHubIcon />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          underline={false}
          newTab={false}
          href="mailto:hakon@harnes.co"
        >
          <EmailIcon />
        </ExternalLink>
      </li>
    </ul>
  );
}
