type LinkType = "text" | "icon";

function linkClasses(type: LinkType) {
  switch (type) {
    case "icon":
      return "fill-white stroke-white hover:fill-sky-400 hover:stroke-sky-400 hover:text-sky-400";
    case "text":
    default:
      return "fill-white font-semibold border-b-2 border-b-sky-400 hover:text-sky-400 hover:border-b-white";
  }
}

export default function ExternalLink({
  href,
  newTab = true,
  type = "text",
  children,
  className,
}: {
  href: string;
  newTab?: boolean;
  type?: LinkType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={linkClasses(type) + " " + className}
    >
      {children}
    </a>
  );
}
